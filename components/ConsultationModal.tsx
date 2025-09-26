"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { useConsultationModal } from "@/app/context/GlobalConsultationModal.tsx"

export function GlobalConsultationModal() {
  const { isOpen, closeModal } = useConsultationModal()
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", project: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok) {
        setMessage("✅ Thank you! Your request has been sent.")
        setFormData({ name: "", email: "", phone: "", project: "" })
      } else {
        setMessage(data.error || "❌ Something went wrong.")
      }
    } catch {
      setMessage("❌ Failed to connect to server.")
    }
    setIsSubmitting(false)
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg max-h-screen overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={closeModal}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Get Free Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="project"
            placeholder="Project Details"
            value={formData.project}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
        {message && (
          <p
            className={`mt-2 text-sm ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
