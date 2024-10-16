import { createClient } from "@/prismicio"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient()

  const publications = await client.getAllByType("publication")

  return [
    {
      url: "/",
      lastModified: new Date(),
    },
    ...publications.map((publication) => ({
      url: `/publications/${publication.uid}`,
      lastModified: new Date(publication.first_publication_date),
    })),
  ]
}
