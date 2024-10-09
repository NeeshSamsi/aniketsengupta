import { asText, Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  const {
    primary: { heading, content, image },
  } = slice

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-primary-800 text-primary-100"
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 py-8 sm:grid-cols-[1fr,2fr] sm:gap-4 md:gap-12 lg:py-24 xl:py-32">
        <PrismicNextImage
          field={image}
          className="aspect-[1/1.25] object-cover"
        />
        <div>
          <p className="text-xs font-medium uppercase sm:text-sm lg:text-base">
            ABOUT
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl">
            {asText(heading)}
          </h2>

          <div className="prose prose-base sm:prose-lg lg:prose-xl mt-6 text-primary-100 md:mt-8">
            <PrismicRichText field={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
