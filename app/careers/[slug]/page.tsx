// app/careers/[slug]/page.tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import ApplyForm from "../ApplyForm"

export const metadata: Metadata = {
  title: "Careers - KundKund IT",
  description: "Open roles at KundKund IT",
}

export const dynamic = "force-dynamic"

const jobs = [
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    location: "Bangalore, India",
    type: "Full time",
    category: "Development",
    description: `We are looking for a skilled Frontend Developer to join our team. You will:
- Build user interfaces using React & Next.js.
- Work closely with designers and backend engineers.
- Ensure accessibility, performance, and maintainability.`,
    responsibilities: [
      "Implement UI components with React/Next.js",
      "Optimize performance and accessibility",
      "Collaborate on design and API contracts",
      "Write unit/integration tests",
    ],
    requirements: [
      "3+ years of frontend experience with React",
      "Good understanding of HTML, CSS, JavaScript",
      "Experience with Next.js and TypeScript",
      "Familiarity with REST/GraphQL APIs",
    ],
    niceToHave: ["Familiarity with SSR/SSG patterns", "Experience with testing libraries"],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Training & mentorship",
      "Flexible work hours",
    ],
  },
  {
    title: "Backend Developer",
    slug: "backend-developer",
    location: "Hyderabad, India",
    type: "Full time",
    category: "Development",
    description: `We are looking for a Backend Developer to design and scale backend services.`,
    responsibilities: [
      "Develop REST/GraphQL APIs",
      "Optimize PostgreSQL queries",
      "Ensure system reliability and performance",
      "Collaborate with frontend engineers",
    ],
    requirements: [
      "3+ years of backend development (Node.js preferred)",
      "Experience with relational databases (Postgres, MySQL)",
      "Knowledge of API security and authentication",
    ],
    niceToHave: ["Experience with microservices", "Cloud platforms (AWS/GCP)"],
    benefits: ["Competitive salary", "Health insurance", "Team outings"],
  },
  {
    title: "UI/UX Designer",
    slug: "ui-ux-designer",
    location: "Mumbai, India",
    type: "Full time",
    category: "Design",
    description: `We are looking for a UI/UX Designer to create delightful user experiences.`,
    responsibilities: [
      "Design wireframes, prototypes, and UI screens",
      "Conduct usability testing",
      "Collaborate with product managers and developers",
    ],
    requirements: [
      "2+ years experience in UI/UX design",
      "Proficiency in Figma/Sketch/Adobe XD",
      "Strong portfolio of web/mobile projects",
    ],
    niceToHave: ["Animation/motion design skills", "Knowledge of accessibility guidelines"],
    benefits: ["Competitive salary", "Health insurance", "Flexible work hours"],
  },
  {
    title: "IT Support Engineer",
    slug: "it-support-engineer",
    location: "Delhi, India",
    type: "Full time",
    category: "Customer Services",
    description: `We are looking for an IT Support Engineer to provide technical support and maintain internal systems.`,
    responsibilities: [
      "Resolve hardware/software issues",
      "Maintain internal IT systems",
      "Provide support to remote teams",
    ],
    requirements: [
      "Experience with Windows/Linux systems",
      "Knowledge of networking basics",
      "Good troubleshooting skills",
    ],
    niceToHave: ["Certifications (CompTIA, Cisco, etc.)"],
    benefits: ["Health insurance", "Career growth opportunities", "Friendly work environment"],
  },
  {
    title: "Project Manager",
    slug: "project-manager",
    location: "Chennai, India",
    type: "Full time",
    category: "Management",
    description: `We are looking for a Project Manager to lead cross-functional teams and deliver projects on time.`,
    responsibilities: [
      "Plan, execute, and monitor projects",
      "Coordinate between teams",
      "Manage client communications",
    ],
    requirements: [
      "3+ years project management experience",
      "Familiar with Agile/Scrum methodologies",
      "Excellent communication skills",
    ],
    niceToHave: ["PMP/Prince2 certification"],
    benefits: ["Performance bonuses", "Flexible working", "Health insurance"],
  },
  {
    title: "Digital Marketing Specialist",
    slug: "digital-marketing-specialist",
    location: "Pune, India",
    type: "Full time",
    category: "Marketing",
    description: `We are looking for a Digital Marketing Specialist to run SEO/SEM, paid campaigns, and content strategy.`,
    responsibilities: [
      "Plan and execute SEO/SEM strategies",
      "Manage social media campaigns",
      "Track analytics and performance",
    ],
    requirements: [
      "2+ years in digital marketing",
      "Experience with Google Ads, Facebook Ads",
      "Knowledge of SEO tools (Ahrefs, SEMrush, etc.)",
    ],
    niceToHave: ["Experience with content marketing", "Email marketing campaigns"],
    benefits: ["Competitive salary", "Health insurance", "Career development"],
  },
]

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }))
}

export default function JobDetail({ params }: { params: { slug: string } }) {
  const job = jobs.find((j) => j.slug === params.slug)

  if (!job) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-10 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href="/careers"
          className="text-sm text-slate-600 underline hover:text-slate-800"
        >
          ← Back to Careers
        </Link>

        <header className="mt-6 sm:mt-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            {job.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {job.location} · {job.type} · {job.category}
          </p>
        </header>

        <article className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Overview</h2>
            <p className="whitespace-pre-line text-slate-700 leading-relaxed">
              {job.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              {job.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Requirements</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              {job.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          {job.niceToHave?.length ? (
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Nice to have</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                {job.niceToHave.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">What we offer</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              {job.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <ApplyForm jobTitle={job.title} />
          </div>
        </article>
      </section>
    </main>
  )
}
