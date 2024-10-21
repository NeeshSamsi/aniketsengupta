import { type Content } from "@prismicio/client"
import Button from "./Button"
import { PrismicNextLink } from "@prismicio/next"
import { cn } from "@/lib/utils"

type Props = {
  navLinks: Content.SettingsDocumentData["navLinks"]
  theme: "light" | "dark"
  cta: boolean
}

export default function NavLinks({ navLinks, theme, cta }: Props) {
  const links = !cta ? navLinks.slice(0, -1) : navLinks

  return links.map(({ link, isCta }, i) =>
    isCta ? (
      <Button
        key={`nav-link-${i}`}
        link={link}
        size="sm"
        theme="light"
        className="w-fit"
      >
        {link.text}
      </Button>
    ) : (
      <PrismicNextLink
        key={`nav-link-${i}`}
        field={link}
        className={cn("hover-underline-animation w-fit transition-all", {
          "after:bg-primary-300 hover:text-primary-300": theme === "light",
          "after:bg-primary-700 hover:text-primary-700": theme === "dark",
        })}
      />
    ),
  )
}
