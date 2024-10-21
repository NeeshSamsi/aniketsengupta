import Section from "@/components/Section"
import { asText, Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import AnimatedContent from "./AnimatedContent"

/**
 * Props for `Offices`.
 */
export type OfficesProps = SliceComponentProps<Content.OfficesSlice>

/**
 * Component for "Offices" Slices.
 */
const Offices = ({ slice }: OfficesProps): JSX.Element => {
  const {
    primary: { sectionID, heading, subheading, offices, email, number },
  } = slice

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={sectionID!}
      heading={asText(heading)}
      subheading={asText(subheading)}
      className="bg-primary-300 text-primary-800"
    >
      <AnimatedContent offices={offices} email={email} number={number} />
    </Section>
  )
}

export default Offices
