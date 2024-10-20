import { Content } from "@prismicio/client"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"

/**
 * Props for `RichText`.
 */
export type RichTextProps = SliceComponentProps<Content.RichTextSlice>

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <article
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="prose text-primary-800 md:prose-lg marker:text-primary-600 prose-headings:font-serif prose-headings:font-medium prose-headings:text-primary-800 prose-a:text-primary-700 prose-a:transition-colors hover:prose-a:text-primary-600 prose-strong:text-primary-800"
    >
      <PrismicRichText field={slice.primary.content} />
    </article>
  )
}

export default RichText
