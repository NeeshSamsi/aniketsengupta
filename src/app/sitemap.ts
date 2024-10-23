import { type MetadataRoute } from "next"
import { createClient } from "@/prismicio"
import { url } from "@/lib/config"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient()

  const publications = await client.getAllByType("publication")

  return [
    {
      url: url,
      lastModified: new Date(),
    },
    ...publications.map((publication) => ({
      url: `${url}/publications/${publication.uid}`,
      lastModified: new Date(publication.first_publication_date),
    })),
  ]
}
