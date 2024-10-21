import { Metadata } from "next"
import { notFound } from "next/navigation"
import { SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { asText } from "@prismicio/client"
import { formatDate } from "@/lib/utils"
import Link from "next/link"

type Params = { uid: string }

export default async function Page({ params }: { params: Params }) {
  const client = createClient()
  const page = await client
    .getByUID("publication", params.uid, {
      fetchLinks: ["category.name", "author.name", "author.designation"],
    })
    .catch(() => notFound())

  const publications = await client.getAllByType("publication", {
    fetchLinks: ["category.name"],
  })

  const {
    first_publication_date: pubDate,
    data: {
      title,
      category: {
        // @ts-expect-error Prismic fetchLinks types don't work
        data: { name: category },
      },
      author: {
        // @ts-expect-error Prismic fetchLinks types don't work
        data: { name: authorName, designation: authorDesignation },
      },
    },
  } = page

  return (
    <div className="bg-primary-100 text-primary-800">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 pb-12 pt-24 md:grid-cols-[3fr,2fr] lg:pb-24 lg:pt-32 xl:pb-32 xl:pt-40">
        <div className="flex flex-col gap-12">
          <main className="text-lg sm:text-xl lg:text-2xl">
            <div className="mb-4 flex items-center gap-2 text-primary-700 sm:gap-4">
              <p className="font-light">{asText(category)}</p>
              <div className="size-1 rounded-full bg-primary-700" />
              <p className="font-extralight">{formatDate(new Date(pubDate))}</p>
            </div>
            <h1 className="mb-6 font-serif text-3xl sm:text-4xl lg:text-5xl">
              {asText(title)}
            </h1>
            <div className="grid gap-1">
              <p>{authorName}</p>
              <p className="text-base sm:text-lg md:gap-6 lg:text-xl">
                {authorDesignation}
              </p>
            </div>
          </main>

          <SliceZone slices={page.data.slices} components={components} />
        </div>

        <aside className="grid h-fit gap-6 bg-primary-300 px-8 py-6">
          <p className="text-lg lg:text-2xl">Recent posts</p>

          <div className="grid gap-4">
            {publications
              .sort(
                (a, b) =>
                  new Date(b.first_publication_date).valueOf() -
                  new Date(a.first_publication_date).valueOf(),
              )
              .slice(0, 5)
              .map(
                ({
                  uid,
                  first_publication_date: pubDate,
                  data: {
                    title,
                    category: {
                      // @ts-expect-error Prismic fetchLinks types don't work
                      data: { name: category },
                    },
                  },
                }) => (
                  <Link
                    href={`/publications/${uid}`}
                    key={uid}
                    className="grid gap-1"
                  >
                    <p className="font-serif text-lg lg:text-xl">
                      {asText(title)}
                    </p>
                    <p className="text-sm text-primary-700 lg:text-base">
                      {asText(category)}
                    </p>
                  </Link>
                ),
              )}
          </div>
        </aside>
      </div>
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client
    .getByUID("publication", params.uid, { fetchLinks: ["author.name"] })
    .catch(() => notFound())

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    // @ts-expect-error Prismic fetchLinks types don't work
    authors: [{ name: page.data.author.name }],
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType("publication")

  return pages.map((page) => {
    return { uid: page.uid }
  })
}
