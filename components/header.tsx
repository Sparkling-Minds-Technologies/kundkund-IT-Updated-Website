"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { useConsultationModal } from "@/app/context/GlobalConsultationModal.tsx"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openModal } = useConsultationModal()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-20 w-42">
              <Image
                src="/kundkund-IT-Logos-1.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            {/* 👆 Added ml-6 for extra gap between "Contact" and button */}
            <Button
              onClick={openModal}
              className="bg-primary hover:bg-primary/90 flex items-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={openModal}
                  className="w-full bg-primary hover:bg-primary/90 flex items-center"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
