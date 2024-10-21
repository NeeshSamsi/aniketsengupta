"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"
import Button from "./Button"

type Props = {
  heading: KeyTextField
  content: RichTextField
}

export default function Disclaimer({ heading, content }: Props) {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const showDisclaimer = localStorage.getItem("showDisclaimer")

    if (showDisclaimer === "undefined" || showDisclaimer === "null") {
      localStorage.setItem("showDisclaimer", "true")
    }

    if (showDisclaimer === "false") setOpen(false)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="space-y-6">
        <DialogHeader className="space-y-6">
          <DialogTitle className="text-xl sm:text-2xl lg:text-3xl">
            {heading}
          </DialogTitle>
          <DialogDescription className="prose prose-sm text-primary-800 sm:prose-base marker:text-primary-600 prose-a:text-primary-700 prose-a:transition-colors hover:prose-a:text-primary-600">
            <PrismicRichText field={content} />
          </DialogDescription>
        </DialogHeader>

        <DialogClose
          onClick={() => localStorage.setItem("showDisclaimer", "false")}
        >
          <Button
            size="base"
            theme="dark"
            className="w-full text-sm font-semibold sm:text-base lg:text-lg"
            onClick={() => localStorage.setItem("showDisclaimer", "false")}
          >
            Agree & Continue
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
