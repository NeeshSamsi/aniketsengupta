import { client } from "@/lib/prismic"

import { PrismicNextLink } from "@prismicio/next"
import Logo from "./Logo"
import Link from "next/link"

export default async function Navbar() {
  const {
    data: { navLinks },
  } = await client.getSingle("settings")

  return (
    <nav className="bg-primary-800 text-primary-100">
      <div className="container mx-auto flex items-center justify-between px-8 py-6">
        <Link href="/" className="">
          <Logo />
        </Link>

        <div className="flex items-center gap-6 text-base">
          {navLinks.map(
            (
              {
                link,
                // isCta
              },
              i,
            ) => (
              <PrismicNextLink key={`nav-link-${i}`} field={link} />
            ),
          )}
        </div>
      </div>
    </nav>
  )
}
