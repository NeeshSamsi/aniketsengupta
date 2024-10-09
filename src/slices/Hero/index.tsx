import { asText, Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { SliceComponentProps } from "@prismicio/react"
import Button from "@/components/Button"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const {
    primary: { bgImage, heading, paragraph, button },
  } = slice

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid-stack min-h-dvh items-end"
    >
      <PrismicNextImage
        field={bgImage}
        alt=""
        className="h-full w-full object-cover"
      />

      <div className="container mx-auto px-8 py-16 text-primary-100 lg:py-24 xl:py-32">
        <p className="max-w-[50ch] text-pretty text-base sm:text-lg lg:text-xl">
          {asText(paragraph)}
        </p>
        <h1 className="mt-2 text-balance font-serif text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl xl:mt-3">
          {asText(heading)}
        </h1>

        <Button link={button} size="base" className="mt-6 xl:mt-10">
          {button.text}
        </Button>
      </div>
    </section>
  )
}

export default Hero
