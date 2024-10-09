import { asText, Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

/**
 * Props for `AccordionInfo`.
 */
export type AccordionInfoProps = SliceComponentProps<Content.AccordionInfoSlice>

/**
 * Component for "AccordionInfo" Slices.
 */
const AccordionInfo = ({ slice }: AccordionInfoProps): JSX.Element => {
  const {
    primary: { heading, subheading, practiceAreas },
  } = slice

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-primary-100 text-primary-800"
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 py-8 sm:grid-cols-[1fr,4fr] md:gap-12 lg:py-24 xl:py-32">
        <div className="grid grid-cols-[subgrid] gap-1 sm:col-span-2 sm:gap-4 md:gap-6">
          <h2 className="text-xs font-medium sm:text-sm lg:text-base">
            {asText(subheading)}
          </h2>
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl">
            {asText(heading)}
          </p>
        </div>
        <div className="grid grid-cols-[subgrid] gap-4 text-base sm:col-span-2 sm:text-lg md:gap-6 lg:text-xl">
          {practiceAreas.map(({ title, description }, i) => (
            <>
              <p className="mt-5 hidden sm:block">( {i + 1} )</p>

              <Accordion type="single" collapsible>
                <AccordionItem value={title as string}>
                  <AccordionTrigger className="font-serif text-xl sm:text-2xl lg:text-3xl">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-[40ch]">
                    {asText(description)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AccordionInfo
