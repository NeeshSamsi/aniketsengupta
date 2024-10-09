import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `AccordionInfo`.
 */
export type AccordionInfoProps = SliceComponentProps<Content.AccordionInfoSlice>

/**
 * Component for "AccordionInfo" Slices.
 */
const AccordionInfo = ({ slice }: AccordionInfoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for accordion_info (variation: {slice.variation})
      Slices
    </section>
  )
}

export default AccordionInfo
