"use client"

import { type ReactNode, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion"

export default function AnimatedContent({ children }: { children: ReactNode }) {
  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  gsap.registerPlugin(useGSAP, ScrollTrigger)
  useGSAP(() => {
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
          trigger: ".publication",
          start: "top bottom-=20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".number",
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
          trigger: ".number",
          start: "top bottom-=20%",
          toggleActions: "play none none reverse",
        },
      },
    )
  })

  return <div ref={container}>{children}</div>
}
