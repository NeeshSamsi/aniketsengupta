import Button from "@/components/Button"
import Section from "@/components/Section"
import { asText, Content } from "@prismicio/client"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"
import { FiArrowUpRight } from "react-icons/fi"

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  const {
    primary: { sectionID, heading, subheading, paragraph, ctas },
  } = slice

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={sectionID!}
      heading={asText(heading)}
      subheading={asText(subheading)}
      description={null}
      className="bg-primary-800 text-primary-100"
    >
      <div className="col-start-2">
        <div>
          <PrismicRichText field={paragraph} />
        </div>
        <div className="mt-8 flex items-center gap-8">
          {ctas.map(({ button }, index) => (
            <Button key={index} link={button} size="base" theme="light">
              <span className="flex items-center gap-2">
                {button.text}
                <FiArrowUpRight className="size-5 sm:size-6" />
              </span>
            </Button>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default CallToAction
