import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `Offices`.
 */
export type OfficesProps = SliceComponentProps<Content.OfficesSlice>

/**
 * Component for "Offices" Slices.
 */
const Offices = ({ slice }: OfficesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for offices (variation: {slice.variation}) Slices
    </section>
  )
}

export default Offices
