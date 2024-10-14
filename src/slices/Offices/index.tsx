import Section from "@/components/Section"
import { SidebarItem } from "@/components/Sidebar"
import { asText, Content } from "@prismicio/client"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import { SliceComponentProps } from "@prismicio/react"
import Link from "next/link"
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi"

/**
 * Props for `Offices`.
 */
export type OfficesProps = SliceComponentProps<Content.OfficesSlice>

/**
 * Component for "Offices" Slices.
 */
const Offices = ({ slice }: OfficesProps): JSX.Element => {
  const {
    primary: { heading, subheading, offices, email, number },
  } = slice

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      heading={asText(heading)}
      subheading={asText(subheading)}
      className="bg-primary-300 text-primary-800"
    >
      <div className="hidden items-center gap-2 overflow-x-scroll text-primary-700 sm:flex sm:flex-col sm:items-start">
        {offices.map(({ city }, i) => (
          <SidebarItem
            key={i}
            text={city}
            selected={i === 0}
            className="text-start"
          />
        ))}
      </div>

      <div className="grid gap-8">
        <PrismicNextLink
          field={offices[0]?.mapsLink}
          className="hidden flex-col gap-4 sm:flex md:flex-row"
        >
          <PrismicNextImage
            field={offices[0]?.mapImage}
            className="aspect-video w-72 object-cover"
          />
          <div className="grid gap-2 md:gap-4">
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl">
              {offices[0]?.city}
            </h3>
            <p className="max-w-[25ch] text-primary-700">
              {offices[0]?.address}
            </p>
            <PrismicNextLink
              field={offices[0]?.mapsLink}
              className="flex items-center gap-2"
            >
              <span className="">{offices[0]?.mapsLink.text}</span>
              <FiArrowUpRight className="size-5 sm:size-6" strokeWidth={1.5} />
            </PrismicNextLink>
          </div>
        </PrismicNextLink>
        <div className="grid gap-6 sm:hidden">
          {offices.map(({ city, address, mapImage, mapsLink }, i) => (
            <PrismicNextLink
              key={i}
              field={mapsLink}
              className="flex flex-col gap-2 md:flex-row"
            >
              <PrismicNextImage
                field={mapImage}
                className="aspect-video w-72 object-cover"
              />
              <div className="grid gap-1 md:gap-4">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl">
                  {city}
                </h3>
                <p className="max-w-[25ch] text-primary-700">{address}</p>
                <PrismicNextLink
                  field={mapsLink}
                  className="flex items-center gap-2"
                >
                  <span className="">{mapsLink.text}</span>
                  <FiArrowUpRight
                    className="size-5 sm:size-6"
                    strokeWidth={1.5}
                  />
                </PrismicNextLink>
              </div>
            </PrismicNextLink>
          ))}
        </div>

        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-8">
          <Link href={`mailto:${email}`} className="flex items-center gap-3">
            <FiMail className="size-5 sm:size-6" strokeWidth={1.5} />
            <span>{email}</span>
          </Link>
          <Link href={`tel:${number}`} className="flex items-center gap-3">
            <FiPhone className="size-5 sm:size-6" strokeWidth={1.5} />
            <span>{number}</span>
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default Offices
