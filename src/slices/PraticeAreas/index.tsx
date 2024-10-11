import { asText, Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Section from "@/components/Section"

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
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      heading={asText(heading)}
      subheading={asText(subheading)}
      className="bg-primary-100 text-primary-800"
    >
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
    </Section>
  )
}

export default AccordionInfo
