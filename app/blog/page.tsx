import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog - KundKund IT",
  description:
    "Stay updated with the latest insights on software development, AI, technology trends, and industry best practices from the KundKund IT Solutions team.",
}

export default function BlogPage() {
  return <BlogClientPage />
}
