import { KeyTextField } from "@prismicio/client"
import { type ReactNode } from "react"

type Props = {
  heading: string
  subheading: string
  description: KeyTextField | null
  children: ReactNode
  id?: string
  className?: string
}

export default function Section({
  heading,
  subheading,
  description,
  children,
  className,
  id,
}: Props) {
  return (
    <section className={className} id={id}>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 py-12 sm:grid-cols-[1fr,4fr] md:gap-12 lg:py-24 xl:py-32">
        <div className="grid grid-cols-[subgrid] gap-1 sm:col-span-2 sm:gap-4 md:gap-6">
          <h2 className="text-xs font-medium uppercase sm:text-sm lg:text-base">
            {subheading}
          </h2>
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl">
            {heading}
          </p>

          {description && (
            <p className="col-start-2 text-base sm:text-lg lg:text-xl">
              {description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-[subgrid] gap-4 text-base sm:col-span-2 sm:text-lg md:gap-6 lg:text-xl">
          {children}
        </div>
      </div>
    </section>
  )
}
