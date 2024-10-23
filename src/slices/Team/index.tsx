import Section from "@/components/Section"
import { asText, Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  const {
    primary: { sectionID, subheading, heading, description, members },
  } = slice

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={sectionID!}
      subheading={asText(subheading)}
      heading={asText(heading)}
      description={description}
      className="bg-primary-800 text-primary-100"
    >
      <div className="col-start-2 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
        {members.map(({ portrait, name, designation }, index) => (
          <div key={`team-member-${index}`} className="flex flex-col gap-2">
            <PrismicNextImage
              field={portrait}
              className="aspect-[3/4] object-cover"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm sm:text-base lg:text-lg">{designation}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Team
