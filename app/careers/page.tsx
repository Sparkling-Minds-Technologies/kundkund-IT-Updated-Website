"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

const jobs = [
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    location: "Bangalore, India",
    type: "Full time",
    category: "Development",
    short: "Build modern UI with React / Next.js and Tailwind.",
    description: `As a Frontend Developer at KundKund IT you'll build performant, accessible, and maintainable UI.
You'll collaborate with designers and backend teams to ship user-facing features using React/Next.js, TypeScript, and modern tooling.`,
  },
  {
    title: "Backend Developer",
    slug: "backend-developer",
    location: "Hyderabad, India",
    type: "Full time",
    category: "Development",
    short: "Design & scale backend services (Node.js, Postgres).",
    description: `You will design and build APIs, data models, and background jobs. Expect to work with Node.js/TypeScript, PostgreSQL, queues, and cloud services.`,
  },
  {
    title: "UI/UX Designer",
    slug: "ui-ux-designer",
    location: "Mumbai, India",
    type: "Full time",
    category: "Design",
    short: "Design delightful interfaces & flows for web and mobile.",
    description: `You will craft wireframes, high-fidelity mocks, and prototypes. You must be comfortable with user research, Figma, and interaction design.`,
  },
  {
    title: "IT Support Engineer",
    slug: "it-support-engineer",
    location: "Delhi, India",
    type: "Full time",
    category: "Customer Services",
    short: "Provide technical support and maintain internal systems.",
    description: `Support employees and customers with issues, maintain hardware/software, and help automate recurring tasks.`,
  },
  {
    title: "Project Manager",
    slug: "project-manager",
    location: "Chennai, India",
    type: "Full time",
    category: "Management",
    short: "Lead cross-functional teams and deliver projects on time.",
    description: `You will manage timelines, stakeholders, and scope using Agile processes and a focus on outcomes.`,
  },
  {
    title: "Digital Marketing Specialist",
    slug: "digital-marketing-specialist",
    location: "Pune, India",
    type: "Full time",
    category: "Marketing",
    short: "Run SEO/SEM, paid campaigns, and content strategy.",
    description: `Drive user acquisition and brand using SEO, SEM, email, and analytics tools.`,
  },
]

const categories = ["View All", "Customer Services", "Design", "Development", "Management", "Marketing"]

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState<string>("View All")
  const [search, setSearch] = useState<string>("")
  const [locationFilter, setLocationFilter] = useState<string>("All Locations")

  // unique location list
  const locations = useMemo(
    () => ["All Locations", ...Array.from(new Set(jobs.map((j) => j.location)))],
    []
  )

  // filter jobs by category, search, and location
  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const byCategory = activeCategory === "View All" || job.category === activeCategory
      const bySearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.short.toLowerCase().includes(search.toLowerCase())
      const byLocation = locationFilter === "All Locations" || job.location === locationFilter
      return byCategory && bySearch && byLocation
    })
  }, [activeCategory, search, locationFilter])

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            Careers
          </p>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold">
            Be a part of shaping the <span className="text-primary">future</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Explore career opportunities at KundKund and help build software that matters.
          </p>

          {/* Search & Location filter */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by job title or keyword..."
              className="w-full sm:w-96 border rounded-md px-4 py-2"
            />
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="border rounded-md px-4 py-2"
            >
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Send your CV", desc: "Apply by sending your CV or LinkedIn profile." },
              { step: "02", title: "Initial screening", desc: "HR screens and shortlists candidates." },
              { step: "03", title: "Interview", desc: "Interview with hiring managers / team." },
              { step: "04", title: "Test task", desc: "Complete a short role-specific task." },
              { step: "05", title: "You're hired!", desc: "Receive offer and join the team." },
            ].map((s) => (
              <div
                key={s.step}
                className="p-6 border rounded-lg text-center bg-white shadow-sm"
              >
                <div className="text-2xl font-bold text-primary mb-2">{s.step}</div>
                <div className="font-semibold">{s.title}</div>
                <p className="text-sm text-slate-500 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Jobs */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-md ${
                  activeCategory === c ? "bg-primary text-white" : "border bg-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-slate-500 py-12">
                No jobs match your filters.
              </div>
            )}

            {filtered.map((job) => (
              <article
                key={job.slug}
                className="border rounded-lg p-6 bg-white shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {job.location} · {job.type}
                  </p>
                  <p className="mt-4 text-slate-700">{job.short}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 border rounded">{job.category}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="inline-block w-full text-center px-4 py-2 bg-primary text-white rounded-md"
                  >
                    View Job & Apply →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Why people work with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Endless career growth", desc: "Many opportunities to grow financially and professionally." },
              { title: "Mentorship & learning", desc: "In-house training, peer mentoring, and knowledge sharing." },
              { title: "Cozy & fun offices", desc: "Comfortable offices with perks and recreational activities." },
              { title: "Competitive salary", desc: "Industry-competitive pay and bonuses." },
              { title: "Career change option", desc: "Switch roles internally to learn new skills." },
              { title: "Friendly atmosphere", desc: "Collaborative, respectful, and people-first culture." },
            ].map((b) => (
              <div key={b.title} className="p-6 bg-white border rounded-lg">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">We’d love to hear from you!</h3>
          <p className="mt-2 text-slate-600">
            For queries, hiring, or partnerships — reach out to us.
          </p>
          <div className="mt-6">
            <a href="/contact" className="px-6 py-2 bg-primary text-white rounded-md">
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
