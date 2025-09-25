"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// --- Blog Data ---
const blogPosts = [
  {
    slug: "ai-healthcare-revolution-2025",
    title: "How AI is Revolutionizing Healthcare in 2025",
    excerpt:
      "Explore the latest AI applications transforming patient care, from diagnostic imaging to personalized treatment plans.",
    category: "AI & Machine Learning",
    readTime: "6 min read",
    image: "/Gemini_ai-healthcare-revolution-2025.png",
    author: { name: "KundKund IT Team",  },
    publishedAt: "2025-08-15",
    content: `<h2>AI in Healthcare</h2><p>AI is changing healthcare...</p>`,
  },
  {
     slug: "cloud-computing-trends-2025",
    title: "Top Cloud Computing Trends in 2025",
    excerpt:
      "From serverless architectures to hybrid cloud adoption, discover the key cloud innovations shaping the industry.",
    category: "Cloud & DevOps",
    readTime: "5 min read",
    image: "/Gemini_cloud-computing-trends-2025.png",
    author: { name: "KundKund IT Team",  },   //avatar: "/avatar2.png"
    publishedAt: "2025-08-05",
    content: `<h2>Cloud Evolution</h2><p>Cloud computing continues...</p>`,
  },
  {
       slug: "future-of-software-development-2025",
    title: "The Future of Software Development in 2025",
    excerpt:
      "Explore how low-code platforms, AI coding assistants, and agile practices are reshaping software engineering.",
    category: "Software Development",
    readTime: "7 min read",
    image: "/Gemini_future-of-software-development.png",
    author: { name: "KundKund IT Team", },
    publishedAt: "2025-07-20",
    content: `<h2>Next-Gen Software</h2><p>The software world is...</p>`,
  },
  {
    slug: "cybersecurity-best-practices",
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt:
      "Learn how to protect your business from cyber threats with the latest security frameworks and AI-powered defenses.",
    category: "Cybersecurity",
    readTime: "8 min read",
    image: "/Gemini_cybersecurity-best-practices.png",
    author: { name: "KundKund IT Team",  },
    publishedAt: "2025-07-10",
    content: `<h2>Cybersecurity 2025</h2><p>Modern threats require...</p>`,
  },
  {
     slug: "web3-and-decentralized-applications",
    title: "Web3 and the Rise of Decentralized Applications",
    excerpt:
      "Discover how blockchain and decentralized technologies are shaping the internet's next evolution.",
    category: "Web3 & Blockchain",
    readTime: "6 min read",
    image: "/Gemini_web3-and-decentralized-applications.png",
    author: { name: "KundKund IT Team",  },
    publishedAt: "2025-06-28",
    content: `<h2>Decentralization</h2><p>Web3 introduces...</p>`,
  },
  {
    slug: "generative-ai-in-business",
    title: "Generative AI in Business: Opportunities and Risks",
    excerpt:
      "From content creation to automation, explore how businesses can leverage generative AI responsibly.",
    category: "AI & Machine Learning",
    readTime: "5 min read",
    image: "/Gemini_generative-ai-in-business.png",
    author: { name: "KundKund IT Team", },
    publishedAt: "2025-06-15",
    content: `<h2>Generative AI</h2><p>Generative AI is...</p>`,
  },
]

export default function BlogClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const categories = ["All Categories", ...new Set(blogPosts.map((post) => post.category))]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const regularPosts = filteredPosts

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Insights & Resources</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay updated with the latest insights on software development, AI, technology trends, and industry best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-background"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.slice(0, 6).map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-pretty line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {/* <Image
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        /> */}
                        <div>
                          <div className="font-medium text-sm">{post.author.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/blog/${post.slug}`}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All Categories")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get the latest insights on software development, AI, and technology trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="bg-background text-foreground border-0" />
                <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
