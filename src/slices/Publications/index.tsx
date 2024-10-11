import Section from "@/components/Section"
import { client } from "@/lib/prismic"
import { cn } from "@/lib/utils"
import { asText, Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

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
    primary: { heading, subheading },
  } = slice

  const publications = (
    await client.getAllByType("publication", {
      fetchLinks: ["author.name", "author.designation", "category.name"],
    })
  )
    .map(
      ({
        last_publication_date: pubDate,
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
      id="publications"
      heading={asText(heading)}
      subheading={asText(subheading)}
      className="bg-primary-100 text-primary-800"
    >
      <div className="hidden items-center gap-2 overflow-x-scroll text-primary-700 sm:flex sm:flex-col sm:items-start">
        <Category text="All" selected />
        {categories.map(({ id, data: { name } }) => (
          <Category
            key={id}
            text={asText(name)}
            selected={false}
            className="text-start"
          />
        ))}
      </div>

      <div className="grid gap-4 sm:gap-6">
        {publications.map(({ slug, pubDate, title, category }) => (
          <Link
            href={`/publications/${slug}`}
            key={slug}
            className="group flex justify-between gap-8 border-b border-primary-600 pb-4 sm:pb-6"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-xl transition-colors group-hover:text-primary-700 sm:text-2xl lg:text-3xl">
                {asText(title)}
              </h3>
              <div className="flex items-center gap-2 text-primary-700 sm:gap-4">
                <p>{new Date(pubDate).getFullYear()}</p>
                <div className="size-1 rounded-full bg-primary-700" />
                <p>{category}</p>
              </div>
            </div>
            <FiArrowUpRight
              strokeWidth={1.5}
              className="size-16 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-700 sm:size-12"
            />
          </Link>
        ))}
      </div>
    </Section>
  )
}

function Category({
  text,
  selected,
  className,
}: {
  text: string
  selected: boolean
  className?: string
}) {
  return (
    <button
      className={cn(
        "transition-all hover:font-medium hover:text-primary-800",
        className,
        {
          "font-semibold text-primary-800 hover:font-semibold": selected,
        },
      )}
    >
      {selected && <span>• </span>}
      {text}
    </button>
  )
}

export default Publications
