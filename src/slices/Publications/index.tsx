import Section from "@/components/Section"
import { client } from "@/lib/prismic"
import { asText, Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import { AnimatedContent } from "./AnimatedContent"

/**
 * Props for `Publications`.
 */
export type PublicationsProps = SliceComponentProps<Content.PublicationsSlice>

/**
 * Component for "Publications" Slices.
 */
const Publications = async ({
  slice,
}: PublicationsProps): Promise<JSX.Element> => {
  const {
    primary: { sectionID, heading, subheading },
  } = slice

  const publications = (
    await client.getAllByType("publication", {
      fetchLinks: ["author.name", "author.designation", "category.name"],
    })
  )
    .map(
      ({
        first_publication_date: pubDate,
        uid: slug,
        data: { title, category },
      }) => ({
        pubDate,
        slug,
        title,
        // @ts-expect-error fetchLinks doesn't update types
        category: asText(category.data.name),
      }),
    )
    .sort(
      (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf(),
    )

  const categories = await client.getAllByType("category")

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={sectionID!}
      heading={asText(heading)}
      subheading={asText(subheading)}
      className="bg-primary-100 text-primary-800"
    >
      <AnimatedContent publications={publications} categories={categories} />
    </Section>
  )
}

export default Publications
