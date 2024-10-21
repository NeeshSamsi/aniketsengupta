import { type LinkField } from "@prismicio/client"
import { type ReactNode } from "react"
import { PrismicNextLink } from "@prismicio/next"
import ConditionalWrapper from "./ConditionalWrapper"
import { cn } from "@/lib/utils"

type Props = {
  link?: LinkField
  size: "sm" | "base"
  theme: "light" | "dark"
  className?: string
  onClick?: () => void
  children: ReactNode
}

export default function Button({
  children,
  link,
  size,
  theme,
  className,
}: Props) {
  return (
    <button
      className={cn(
        "font-medium transition-colors",
        {
          "bg-primary-100 text-primary-800 hover:bg-primary-700 hover:text-primary-100":
            theme === "light",
          "bg-primary-800 text-primary-100 hover:bg-primary-700 hover:text-primary-100":
            theme === "dark",
        },
        {
          "px-3 py-2": size === "sm",
          "px-4 py-2 text-base sm:text-lg lg:px-6 lg:py-4 lg:text-xl":
            size === "base",
        },
        className,
      )}
    >
      <ConditionalWrapper
        condition={!!link}
        wrapper={(children) => (
          <PrismicNextLink field={link}>{children}</PrismicNextLink>
        )}
      >
        {children}
      </ConditionalWrapper>
    </button>
  )
}
