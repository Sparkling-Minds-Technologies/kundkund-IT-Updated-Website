"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, X } from "lucide-react"
import Link from "next/link"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 500
      setIsVisible(scrolled && !isDismissed)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2">
      <div className="bg-primary text-primary-foreground rounded-lg shadow-lg p-4 max-w-sm">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-background text-foreground rounded-full p-1 shadow-md hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="pr-6">
          <h3 className="font-semibold mb-2">Ready to get started?</h3>
          <p className="text-sm mb-3 opacity-90">Schedule a free consultation to discuss your project needs.</p>
          <Button asChild variant="secondary" size="sm" className="w-full">
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Get Free Consultation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
