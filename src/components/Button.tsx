import { type LinkField } from "@prismicio/client"
import { type ReactNode } from "react"
import { PrismicNextLink } from "@prismicio/next"
import ConditionalWrapper from "./ConditionalWrapper"
import { cn } from "@/lib/utils"

type Props = {
  link?: LinkField
  size: "sm" | "base"
  className?: string
  children: ReactNode
}

export default function Button({ children, link, size, className }: Props) {
  return (
    <button
      className={cn(
        "bg-primary-100 text-primary-800",
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
