"use client"
import { Phone } from "lucide-react"
import { useConsultationModal } from "@/app/context/GlobalConsultationModal.tsx"
import { Button } from "./ui/button"

export function HeaderButton() {
  const { openModal } = useConsultationModal()

  return (
    <Button
      onClick={openModal}
      className="bg-primary hover:bg-primary/90 flex items-center gap-2"
    >
      <Phone className="h-4 w-4" />
      Get Free Consultation
    </Button>
  )
}
