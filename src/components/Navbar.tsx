"use client"

import { type Content } from "@prismicio/client"
import { useState } from "react"

import Link from "next/link"
import { Squash as Hamburger } from "hamburger-react"
import { AnimatePresence, motion } from "framer-motion"
import Logo from "./Logo"
import NavLinks from "./NavLinks"

type Props = {
  navLinks: Content.SettingsDocumentData["navLinks"]
}

export default function Navbar({ navLinks }: Props) {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-primary-800 text-primary-100">
      <div className="container mx-auto flex items-center justify-between px-8 py-2 lg:py-6">
        <Link href="/" className="aspect-[10/1] h-5 sm:h-6">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-base lg:flex">
          <NavLinks navLinks={navLinks} theme="light" />
        </div>

        <div className="block text-primary-100 lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            label="Show menu"
            distance="sm"
            size={24}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-screen flex-col place-items-center gap-4 py-8 text-center text-lg lg:hidden"
          >
            <NavLinks navLinks={navLinks} theme="light" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
