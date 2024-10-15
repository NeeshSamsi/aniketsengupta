"use client"

import { type RichTextField, type Content, asText } from "@prismicio/client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { SidebarItem } from "@/components/Sidebar"
import { FiArrowUpRight } from "react-icons/fi"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion"

type Publication = {
  pubDate: `${number}-${number}-${number}T${number}:${number}:${number}+${number}`
  slug: string
  title: RichTextField
  category: string
}

type Props = {
  publications: Publication[]
  categories: Content.CategoryDocument<string>[]
}

export function AnimatedContent({
  publications,
  categories: publicationCategories,
}: Props) {
  const categories = publicationCategories.map(({ data: { name } }) => name)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPublications, setSelectedPublications] =
    useState<Publication[]>(publications)

  const container = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  useEffect(() => {
    setSelectedPublications(
      publications.filter((pub) => {
        if (selectedCategory === null) {
          return true
        } else {
          return pub.category === selectedCategory
        }
      }),
    )
  }, [publications, selectedCategory])

  const prefersReducedMotion = usePrefersReducedMotion()
  useGSAP(
    () => {
      if (prefersReducedMotion) {
        return
      }

      gsap.fromTo(
        ".publication",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.15,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    },
    { scope: container, dependencies: [selectedPublications] },
  )

  return (
    <>
      <div className="hidden items-center gap-2 overflow-x-scroll text-primary-700 sm:flex sm:flex-col sm:items-start">
        <SidebarItem
          text="All"
          selected={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        />
        {categories.map((name, i) => (
          <SidebarItem
            key={`category-${i}`}
            text={asText(name)}
            selected={selectedCategory === asText(name)}
            onClick={() => setSelectedCategory(asText(name))}
            className="text-start"
          />
        ))}
      </div>

      <div className="grid gap-4 sm:gap-6" ref={container}>
        {selectedPublications
          .filter((publication) =>
            selectedCategory === null
              ? true
              : publication.category === selectedCategory,
          )
          .map(({ slug, pubDate, title, category }) => (
            <Link
              href={`/publications/${slug}`}
              key={slug}
              className="publication group flex justify-between gap-8 border-b border-primary-600 pb-4 sm:pb-6"
            >
              <div className="space-y-4">
                <h3 className="font-serif text-xl transition-colors group-hover:text-primary-700 sm:text-2xl lg:text-3xl">
                  {asText(title)}
                </h3>
                <div className="flex items-center gap-2 text-primary-700 sm:gap-4">
                  <p>{new Date(pubDate).getFullYear()}</p>
                  <div className="size-1 rounded-full bg-primary-700" />
                  <p>{category}</p>
                </div>
              </div>
              <FiArrowUpRight
                strokeWidth={1.5}
                className="size-14 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-700 sm:size-16"
              />
            </Link>
          ))}
      </div>
    </>
  )
}
