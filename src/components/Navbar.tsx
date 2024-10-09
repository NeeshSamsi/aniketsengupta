"use client"

import { type Content } from "@prismicio/client"
import Link from "next/link"
import { PrismicNextLink } from "@prismicio/next"
import Logo from "./Logo"
import Button from "./Button"

type Props = {
  navLinks: Content.SettingsDocumentData["navLinks"]
}

export default function Navbar({ navLinks }: Props) {
  return (
    <nav className="fixed top-0 w-full bg-primary-800 text-primary-100">
      <div className="container mx-auto flex items-center justify-between px-8 py-6">
        <Link href="/" className="aspect-[10/1] h-6">
          <Logo />
        </Link>

        <div className="flex items-center gap-6 text-base">
          {navLinks.map(({ link, isCta }, i) =>
            isCta ? (
              <Button key={`nav-link-${i}`} link={link} size="sm">
                {link.text}
              </Button>
            ) : (
              <PrismicNextLink key={`nav-link-${i}`} field={link} />
            ),
          )}
        </div>
      </div>
    </nav>
  )
}
