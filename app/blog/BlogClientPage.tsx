"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample blog posts data
const blogPosts = [
  {
    slug: "ai-healthcare-revolution-2024",
    title: "How AI is Revolutionizing Healthcare in 2024",
    excerpt:
      "Explore the latest AI applications transforming patient care, from diagnostic imaging to personalized treatment plans.",
    content: "Full blog content would go here...",
    author: {
      name: "David Kim",
      role: "Senior AI Engineer",
      avatar: "/ai-engineer-data-scientist.png",
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Healthcare", "Machine Learning", "Innovation"],
    image: "/placeholder.svg?key=ai-healthcare",
    featured: true,
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization: Best Practices for 2024",
    excerpt:
      "Learn advanced techniques to optimize your Next.js applications for better performance and user experience.",
    content: "Full blog content would go here...",
    author: {
      name: "Michael Johnson",
      role: "Head of Engineering",
      avatar: "/senior-software-engineer-male.png",
    },
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["Next.js", "Performance", "React", "Optimization"],
    image: "/placeholder.svg?key=nextjs-performance",
    featured: false,
  },
  {
    slug: "proptech-trends-real-estate",
    title: "PropTech Trends Shaping the Future of Real Estate",
    excerpt:
      "Discover how technology is transforming property management, virtual tours, and real estate transactions.",
    content: "Full blog content would go here...",
    author: {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      avatar: "/female-cto-software-engineer.png",
    },
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    category: "Industry Insights",
    tags: ["PropTech", "Real Estate", "Innovation", "Technology"],
    image: "/placeholder.svg?key=proptech-trends",
    featured: true,
  },
  {
    slug: "cloud-security-best-practices",
    title: "Cloud Security Best Practices for Enterprise Applications",
    excerpt: "Essential security measures every enterprise should implement when moving to the cloud infrastructure.",
    content: "Full blog content would go here...",
    author: {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      avatar: "/professional-ceo-tech-leader.png",
    },
    publishedAt: "2023-12-28",
    readTime: "15 min read",
    category: "Cloud Solutions",
    tags: ["Cloud Security", "Enterprise", "DevOps", "Security"],
    image: "/placeholder.svg?key=cloud-security",
    featured: false,
  },
  {
    slug: "ux-design-healthcare-apps",
    title: "UX Design Principles for Healthcare Applications",
    excerpt: "How to create user-friendly healthcare interfaces that prioritize patient safety and accessibility.",
    content: "Full blog content would go here...",
    author: {
      name: "Emily Davis",
      role: "Lead UI/UX Designer",
      avatar: "/female-ui-ux-designer.png",
    },
    publishedAt: "2023-12-20",
    readTime: "9 min read",
    category: "Design",
    tags: ["UX Design", "Healthcare", "Accessibility", "User Experience"],
    image: "/placeholder.svg?key=ux-healthcare",
    featured: false,
  },
  {
    slug: "startup-mvp-development-guide",
    title: "The Complete Guide to MVP Development for Startups",
    excerpt:
      "Step-by-step approach to building a minimum viable product that validates your business idea effectively.",
    content: "Full blog content would go here...",
    author: {
      name: "Lisa Thompson",
      role: "Project Manager",
      avatar: "/female-project-manager.png",
    },
    publishedAt: "2023-12-15",
    readTime: "11 min read",
    category: "Startup Insights",
    tags: ["MVP", "Startups", "Product Development", "Strategy"],
    image: "/placeholder.svg?key=mvp-development",
    featured: false,
  },
]

const categories = [
  "All Categories",
  "AI & Machine Learning",
  "Web Development",
  "Industry Insights",
  "Cloud Solutions",
  "Design",
  "Startup Insights",
]

export default function BlogClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              FreshTech Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Insights & <span className="text-primary">Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Stay updated with the latest trends in software development, AI, and technology. Our team shares insights,
              best practices, and industry knowledge to help you stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
              <p className="text-muted-foreground">Our most popular and impactful content</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <div className="font-medium text-sm">{post.author.name}</div>
                          <div className="text-xs text-muted-foreground">{post.author.role}</div>
                        </div>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
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
              {regularPosts.map((post) => (
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
                        <Image
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
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

      {/* Newsletter Signup */}
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
