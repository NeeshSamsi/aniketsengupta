"use client"

import { type Content, type KeyTextField } from "@prismicio/client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import { SidebarItem } from "@/components/Sidebar"
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion"

type Props = {
  offices: Content.OfficesSlice["primary"]["offices"]
  number: KeyTextField
  email: KeyTextField
}

type Office = {
  city: Content.OfficesSlice["primary"]["offices"][number]["city"]
  address: Content.OfficesSlice["primary"]["offices"][number]["address"]
  mapsLink: Content.OfficesSlice["primary"]["offices"][number]["mapsLink"]
  mapImage: Content.OfficesSlice["primary"]["offices"][number]["mapImage"]
}

export default function AnimatedContent({ offices, number, email }: Props) {
  if (!offices) throw new Error("Offices not found")

  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const [selectedOffice, setSelectedOffice] = useState<Office>(offices[0]!)

  useEffect(() => {
    setSelectedOffice(offices[0]!)
  }, [offices])

  gsap.registerPlugin(useGSAP, ScrollTrigger)
  useGSAP(
    () => {
      if (prefersReducedMotion) {
        return
      }

      const from = {
        opacity: 0,
        y: 50,
      }
      const to = {
        opacity: 1,
        y: 0,
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=20%",
          toggleActions: "play none none reverse",
        },
      })
      tl.fromTo(".map-img", from, { ...to, duration: 0.3 })
      tl.fromTo(".city", from, { ...to, duration: 0.3, delay: "-0.2" })
      tl.fromTo(".address", from, { ...to, duration: 0.3, delay: "-0.2" })
      tl.fromTo(".cta", from, { ...to, duration: 0.3, delay: "-0.2" })

      gsap.fromTo(".contact", from, {
        ...to,
        delay: 0.3,
        duration: 0.3,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".contact",
          start: "top bottom-=10%",
          toggleActions: "play none none reverse",
        },
      })
    },
    { scope: container, dependencies: [selectedOffice] },
  )

  return (
    <>
      <div className="hidden items-center gap-2 overflow-x-scroll text-primary-700 sm:flex sm:flex-col sm:items-start">
        {offices.map((office, i) => (
          <SidebarItem
            key={i}
            text={office.city}
            selected={selectedOffice.city === office.city}
            onClick={() => setSelectedOffice(office)}
            className="text-start"
          />
        ))}
      </div>

      <div ref={container} className="grid gap-8">
        <PrismicNextLink
          field={selectedOffice.mapsLink}
          className="hidden flex-col gap-4 sm:flex md:flex-row"
        >
          <PrismicNextImage
            field={selectedOffice.mapImage}
            className="map-img aspect-video w-72 object-cover"
          />
          <div className="grid gap-2 md:gap-4">
            <h3 className="city font-serif text-xl sm:text-2xl lg:text-3xl">
              {selectedOffice.city}
            </h3>
            <p className="address max-w-[25ch] text-primary-700">
              {selectedOffice.address}
            </p>
            <PrismicNextLink
              field={selectedOffice.mapsLink}
              className="cta flex items-center gap-2"
            >
              <span className="">{selectedOffice.mapsLink.text}</span>
              <FiArrowUpRight className="size-5 sm:size-6" strokeWidth={1.5} />
            </PrismicNextLink>
          </div>
        </PrismicNextLink>
        <div className="grid gap-6 sm:hidden">
          {offices.map(({ city, address, mapImage, mapsLink }, i) => (
            <PrismicNextLink
              key={i}
              field={mapsLink}
              className="flex flex-col gap-2 md:flex-row"
            >
              <PrismicNextImage
                field={mapImage}
                className="map-img aspect-video w-72 object-cover"
              />
              <div className="grid gap-1 md:gap-4">
                <h3 className="city font-serif text-xl sm:text-2xl lg:text-3xl">
                  {city}
                </h3>
                <p className="address max-w-[25ch] text-primary-700">
                  {address}
                </p>
                <PrismicNextLink
                  field={mapsLink}
                  className="cta flex items-center gap-2"
                >
                  <span className="">{mapsLink.text}</span>
                  <FiArrowUpRight
                    className="size-5 sm:size-6"
                    strokeWidth={1.5}
                  />
                </PrismicNextLink>
              </div>
            </PrismicNextLink>
          ))}
        </div>

        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-8">
          <Link
            href={`mailto:${email}`}
            className="contact flex items-center gap-3"
          >
            <FiMail className="size-5 sm:size-6" strokeWidth={1.5} />
            <span>{email}</span>
          </Link>
          <Link
            href={`tel:${number}`}
            className="contact flex items-center gap-3"
          >
            <FiPhone className="size-5 sm:size-6" strokeWidth={1.5} />
            <span>{number}</span>
          </Link>
        </div>
      </div>
    </>
  )
}
