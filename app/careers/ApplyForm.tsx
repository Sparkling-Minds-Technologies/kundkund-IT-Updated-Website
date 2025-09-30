// app/careers/ApplyForm.tsx
"use client"

import { useState } from "react"

export default function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [cv, setCv] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    if (!name || !email) {
      setError("Please provide name and email.")
      return
    }

    setLoading(true)
    try {
      const fd = new FormData()
      fd.append("name", name)
      fd.append("email", email)
      fd.append("phone", phone)
      fd.append("message", message)
      fd.append("jobTitle", jobTitle)
      if (cv) fd.append("cv", cv)

      const res = await fetch("/api/apply", {
        method: "POST",
        body: fd,
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed to submit")

      setSuccess("Application submitted — thank you! We will contact you soon.")
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      setCv(null)
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Submission failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 p-6 border rounded-lg bg-white shadow-sm">
      <h4 className="text-lg font-semibold mb-2">Apply for this role</h4>

      <div>
        <label className="block text-sm mb-1">Full name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm mb-1">Phone (optional)</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm mb-1">Cover letter / message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm mb-1">Upload CV (PDF, DOC)</label>
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCv(e.target.files?.[0] ?? null)} />
        {cv && <div className="text-sm mt-1">{cv.name}</div>}
      </div>

      <div>
        <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded">
          {loading ? "Submitting..." : `Submit Application`}
        </button>
      </div>

      {success && <div className="text-green-600 mt-2">{success}</div>}
      {error && <div className="text-red-600 mt-2">{error}</div>}
    </form>
  )
}
