import { client } from "@/lib/prismic"
import Logo from "./Logo"
import { FiLinkedin } from "react-icons/fi"
import { PrismicNextLink } from "@prismicio/next"
import NavLinks from "./NavLinks"

export default async function Footer() {
  const {
    data: { navLinks, linkedin, number, email, copyright },
  } = await client.getSingle("settings")

  return (
    <footer className="bg-primary-800 text-base text-primary-100 lg:text-lg">
      <div className="container mx-auto space-y-16 px-8 py-12 lg:py-24 xl:py-40">
        <div className="flex flex-col items-center justify-between gap-12 sm:flex-row sm:items-start">
          <div className="sm:text-star flex flex-col items-center gap-4 text-center sm:items-start sm:text-start">
            <div className="aspect-[10/1] w-60">
              <Logo />
            </div>
            <PrismicNextLink field={linkedin}>
              <FiLinkedin
                strokeWidth={1.5}
                className="size-6 transition-colors hover:text-primary-600"
              />
            </PrismicNextLink>
            <div className="flex flex-col">
              <a
                href={`tel:${number}`}
                className="underline-offset-2 hover:underline"
              >
                {number}
              </a>
              <a
                href={`mailto:${email}`}
                className="underline-offset-2 hover:underline"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <NavLinks navLinks={navLinks} />
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm lg:text-base">
          {copyright}
        </p>
      </div>
    </footer>
  )
}
