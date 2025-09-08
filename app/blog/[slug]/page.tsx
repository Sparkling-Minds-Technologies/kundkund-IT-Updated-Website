import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Sample blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    slug: "ai-healthcare-revolution-2024",
    title: "How AI is Revolutionizing Healthcare in 2024",
    excerpt:
      "Explore the latest AI applications transforming patient care, from diagnostic imaging to personalized treatment plans.",
    content: `
      <p>Artificial Intelligence is fundamentally transforming the healthcare industry in ways we never imagined possible. As we progress through 2024, we're witnessing unprecedented advancements that are not just improving patient outcomes but revolutionizing the entire healthcare ecosystem.</p>

      <h2>The Current State of AI in Healthcare</h2>
      <p>Healthcare AI applications have evolved far beyond simple automation. Today's AI systems are capable of complex decision-making, pattern recognition, and predictive analytics that rival and often surpass human capabilities in specific domains.</p>

      <h3>Diagnostic Imaging Revolution</h3>
      <p>One of the most significant breakthroughs has been in medical imaging. AI algorithms can now detect early-stage cancers, identify fractures, and diagnose conditions with accuracy rates exceeding 95%. This technology is particularly valuable in areas with limited access to specialist radiologists.</p>

      <h3>Personalized Treatment Plans</h3>
      <p>AI is enabling truly personalized medicine by analyzing vast amounts of patient data, including genetic information, medical history, and lifestyle factors. This comprehensive analysis allows healthcare providers to create treatment plans tailored to individual patients' unique characteristics.</p>

      <h2>Real-World Applications</h2>
      <p>Several healthcare institutions have successfully implemented AI solutions:</p>
      <ul>
        <li><strong>Mayo Clinic</strong> uses AI for early sepsis detection, reducing mortality rates by 18%</li>
        <li><strong>Johns Hopkins</strong> employs machine learning for surgical planning and risk assessment</li>
        <li><strong>Kaiser Permanente</strong> leverages AI for population health management and preventive care</li>
      </ul>

      <h2>Challenges and Considerations</h2>
      <p>While the potential is enormous, implementing AI in healthcare comes with significant challenges:</p>

      <h3>Data Privacy and Security</h3>
      <p>Healthcare data is highly sensitive, requiring robust security measures and compliance with regulations like HIPAA. Organizations must balance innovation with patient privacy protection.</p>

      <h3>Regulatory Compliance</h3>
      <p>AI healthcare solutions must navigate complex regulatory frameworks. The FDA has established new pathways for AI/ML-based medical devices, but the approval process remains rigorous.</p>

      <h3>Integration with Existing Systems</h3>
      <p>Many healthcare organizations operate on legacy systems that weren't designed for AI integration. Successful implementation requires careful planning and often significant infrastructure upgrades.</p>

      <h2>The Future of AI in Healthcare</h2>
      <p>Looking ahead, we can expect to see:</p>
      <ul>
        <li>More sophisticated predictive models for disease prevention</li>
        <li>AI-powered drug discovery reducing development timelines</li>
        <li>Virtual health assistants providing 24/7 patient support</li>
        <li>Robotic surgery with enhanced precision and safety</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The AI revolution in healthcare is not a distant future—it's happening now. Organizations that embrace these technologies while addressing the associated challenges will be best positioned to improve patient outcomes and operational efficiency.</p>

      <p>At FreshTech Solutions, we're committed to helping healthcare organizations navigate this transformation safely and effectively. Our HIPAA-compliant AI solutions are designed to integrate seamlessly with existing workflows while maintaining the highest standards of security and reliability.</p>
    `,
    author: {
      name: "David Kim",
      role: "Senior AI Engineer",
      avatar: "/ai-engineer-data-scientist.png",
      bio: "David is a machine learning expert with a PhD in Computer Science and over 8 years of experience building AI solutions for healthcare and fintech industries.",
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Healthcare", "Machine Learning", "Innovation"],
    image: "/placeholder.svg?key=ai-healthcare-hero",
    featured: true,
  },
  // Add more blog posts here...
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found - FreshTech Solutions Blog",
    }
  }

  return {
    title: `${post.title} - FreshTech Solutions Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="ghost" size="sm">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {post.category}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">{post.title}</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-3xl">{post.excerpt}</p>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{post.author.name}</div>
                    <div className="text-sm text-muted-foreground">{post.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Author Bio */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Image
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <CardTitle className="text-lg">{post.author.name}</CardTitle>
                          <CardDescription>{post.author.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{post.author.bio}</p>
                    </CardContent>
                  </Card>

                  {/* Table of Contents */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Table of Contents</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <nav className="space-y-2 text-sm">
                        <Link href="#current-state" className="block text-muted-foreground hover:text-primary">
                          The Current State of AI in Healthcare
                        </Link>
                        <Link href="#applications" className="block text-muted-foreground hover:text-primary">
                          Real-World Applications
                        </Link>
                        <Link href="#challenges" className="block text-muted-foreground hover:text-primary">
                          Challenges and Considerations
                        </Link>
                        <Link href="#future" className="block text-muted-foreground hover:text-primary">
                          The Future of AI in Healthcare
                        </Link>
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{relatedPost.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {new Date(relatedPost.publishedAt).toLocaleDateString()}
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/blog/${relatedPost.slug}`}>
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
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you implement innovative solutions like those discussed in this
                article.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
