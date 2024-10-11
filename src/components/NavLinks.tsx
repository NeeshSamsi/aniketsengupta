import { type Content } from "@prismicio/client"
import Button from "./Button"
import { PrismicNextLink } from "@prismicio/next"

type Props = {
  navLinks: Content.SettingsDocumentData["navLinks"]
}

export default function NavLinks({ navLinks }: Props) {
  return navLinks.map(({ link, isCta }, i) =>
    isCta ? (
      <Button key={`nav-link-${i}`} link={link} size="sm" className="w-fit">
        {link.text}
      </Button>
    ) : (
      <PrismicNextLink
        key={`nav-link-${i}`}
        field={link}
        className="hover-underline-animation w-fit transition-all hover:text-primary-300"
      />
    ),
  )
}
