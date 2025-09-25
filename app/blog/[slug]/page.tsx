import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Bookmark } from "lucide-react"

// --- Blog Posts (same as BlogClientPage) ---
const blogPosts = [
  {
    slug: "ai-healthcare-revolution-2025",
    title: "How AI is Revolutionizing Healthcare in 2025",
    excerpt: "Explore the latest AI applications transforming patient care, from diagnostic imaging to personalized treatment plans.",
    content: `
      <p>Artificial Intelligence is transforming healthcare at an unprecedented rate. From predictive analytics to robotic surgery, AI is reshaping how care is delivered.</p>
      <h2>The Current State of AI in Healthcare</h2>
      <p>Healthcare AI applications have evolved far beyond simple automation. Modern systems can predict outcomes, optimize workflows, and improve patient experiences.</p>
      <h3>Diagnostic Imaging Revolution</h3>
      <p>AI algorithms detect early-stage cancers, fractures, and other conditions with over 95% accuracy, assisting radiologists and reducing human error.</p>
      <h3>Personalized Treatment Plans</h3>
      <p>By analyzing patient data, genetics, and lifestyle factors, AI enables truly personalized medicine, improving outcomes and patient satisfaction.</p>
      <h2>Real-World Applications</h2>
      <ul>
        <li>Mayo Clinic: Early sepsis detection, reducing mortality by 18%</li>
        <li>Johns Hopkins: Machine learning for surgical planning</li>
        <li>Kaiser Permanente: Population health management</li>
      </ul>
      <h2>Challenges</h2>
      <p>Privacy, regulatory compliance, and integrating AI with legacy systems remain key challenges for healthcare organizations.</p>
      <h2>The Future</h2>
      <ul>
        <li>Predictive models for disease prevention</li>
        <li>AI-powered drug discovery</li>
        <li>Virtual health assistants available 24/7</li>
        <li>Enhanced robotic surgery precision and safety</li>
      </ul>
      <p>Organizations that embrace AI responsibly will achieve better patient outcomes and operational efficiency.</p>
    `,
    author: {
      name: "David Kim",
      role: "Senior AI Engineer",
      // avatar: "/ai-engineer-data-scientist.png",
      bio: "Machine learning expert with 8+ years experience in healthcare and fintech AI solutions.",
    },
    publishedAt: "2025-09-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Healthcare", "Machine Learning", "Innovation"],
    image: "/Gemini_ai-healthcare-revolution-2025.png",
    featured: true,
  },
  {
    slug: "cloud-computing-trends-2025",
    title: "Top Cloud Computing Trends in 2025",
    excerpt: "Discover how cloud computing is evolving and the latest technologies shaping the industry.",
    content: `
      <p>Cloud computing is evolving rapidly, integrating AI, serverless platforms, and multi-cloud strategies to boost efficiency and scalability.</p>
      <h2>Serverless & Function-as-a-Service</h2>
      <p>Organizations are moving toward serverless solutions, reducing infrastructure management overhead while improving deployment speed.</p>
      <h2>Multi-Cloud Strategies</h2>
      <p>Using multiple cloud providers ensures redundancy, avoids vendor lock-in, and enhances global scalability.</p>
      <h2>AI & Cloud Integration</h2>
      <p>Cloud providers now integrate AI and ML services, enabling predictive analytics, automation, and smarter decision-making.</p>
      <p>Businesses leveraging these trends stay competitive and future-proof their infrastructure.</p>
    `,
    author: {
      name: "Sarah Lee",
      role: "Cloud Architect",
      // avatar: "/cloud-architect.png",
      bio: "Cloud solutions expert helping enterprises migrate and optimize their infrastructure.",
    },
    publishedAt: "2025-08-20",
    readTime: "6 min read",
    category: "Cloud Computing",
    tags: ["Cloud", "AWS", "Azure", "Serverless"],
    image: "/Gemini_cloud-computing-trends-2025.png",
    featured: true,
  },
  {
    slug: "cybersecurity-best-practices",
    title: "Essential Cybersecurity Best Practices for 2025",
    excerpt: "Protect your business with the most effective cybersecurity strategies and tools.",
    content: `
      <p>Cyber threats continue to increase in complexity and frequency. Organizations need robust strategies to protect their assets.</p>
      <h2>Layered Security Approach</h2>
      <p>Implement firewalls, intrusion detection, endpoint protection, and secure authentication to create a multi-layered defense.</p>
      <h2>Employee Training</h2>
      <p>Human error is a leading cause of breaches. Regular employee training on phishing and security policies is essential.</p>
      <h2>Regular Audits & Compliance</h2>
      <p>Conduct regular security audits and ensure compliance with standards like ISO 27001 and GDPR.</p>
      <p>Organizations that invest in proactive security measures minimize risks and protect customer trust.</p>
    `,
    author: {
      name: "James Wong",
      role: "Cybersecurity Expert",
      // avatar: "/cybersecurity-expert.png",
      bio: "Security analyst with 10+ years of experience in protecting enterprise systems.",
    },
    publishedAt: "2025-07-30",
    readTime: "7 min read",
    category: "Cybersecurity",
    tags: ["Security", "Data Protection", "Threat Analysis"],
    image: "/Gemini_cybersecurity-best-practices.png",
    featured: false,
  },
  {
        slug: "future-of-software-development-2025",
    title: "The Future of Software Development in 2025",
    excerpt: "Discover emerging trends, tools, and methodologies shaping software development in 2025.",
    content: `
      <p>The software development landscape is evolving rapidly, driven by AI, cloud computing, and low-code/no-code platforms. Developers are adopting agile methodologies, DevOps practices, and collaborative tools to accelerate delivery.</p>
      <h2>AI-Assisted Development</h2>
      <p>AI-powered coding assistants help developers write cleaner code, detect bugs faster, and automate repetitive tasks.</p>
      <h2>Low-Code & No-Code Platforms</h2>
      <p>These platforms empower business users to create applications with minimal coding, speeding up digital transformation.</p>
      <h2>Cloud-Native & Microservices</h2>
      <p>Cloud-native architectures and microservices allow scalable, resilient, and maintainable software solutions.</p>
      <p>By 2025, software development will emphasize speed, collaboration, and intelligent automation, enabling organizations to respond faster to market needs.</p>
    `,
    author: {
      name: "Vikram Patel",
      role: "Software Architect",
      // avatar: "/Gemini_future-of-software-development.png",
      bio: "Guiding companies to adopt modern development practices and scalable software architectures.",
    },
    publishedAt: "2025-08-01",
    readTime: "6 min read",
    category: "Software Development",
    tags: ["Software Development", "AI", "Cloud", "Low-Code"],
    image: "/future-software-development.jpg",
    featured: false,
  },
  {
    slug: "web3-and-decentralized-applications",
    title: "Web3 and the Rise of Decentralized Applications",
    excerpt: "Explore how Web3 and decentralized applications are redefining ownership, privacy, and digital interactions.",
    content: `
      <p>Web3 represents the next evolution of the internet, emphasizing decentralization, user control, and trustless interactions. Decentralized applications (DApps) are becoming the cornerstone of this ecosystem.</p>
      <h2>Decentralized Finance (DeFi)</h2>
      <p>DeFi platforms allow users to lend, borrow, and trade without intermediaries, increasing accessibility and transparency.</p>
      <h2>Decentralized Identity</h2>
      <p>Web3 solutions enable users to own and control their digital identities securely across multiple platforms.</p>
      <h2>Tokenization & NFTs</h2>
      <p>Digital assets, collectibles, and intellectual property are being tokenized, creating new economic models and ownership opportunities.</p>
      <p>As Web3 matures, DApps will drive innovation across finance, gaming, social media, and supply chains, shifting power from centralized platforms to users.</p>
    `,
    author: {
      name: "Anna Smith",
      role: "Blockchain Consultant",
      // avatar: "/Gemini_web3-and-decentralized-applications.png",
      bio: "Helping businesses integrate blockchain solutions for transparency and efficiency.",
    },
    publishedAt: "2025-07-20",
    readTime: "7 min read",
    category: "Web3",
    tags: ["Web3", "Blockchain", "DApps", "Decentralization"],
    image: "/Gemini_generative-ai-in-business.png",
    featured: false,
  },
  {
      slug: "generative-ai-in-business",
    title: "Generative AI in Business: Opportunities and Risks",
    excerpt: "Learn how generative AI is transforming business processes, creativity, and decision-making while highlighting potential risks.",
    content: `
      <p>Generative AI is revolutionizing business by creating content, designing products, and assisting in strategic decision-making. Organizations are leveraging these tools to enhance creativity and productivity.</p>
      <h2>Content Generation & Automation</h2>
      <p>AI can generate text, images, videos, and designs, enabling rapid content production with minimal human intervention.</p>
      <h2>Enhanced Decision-Making</h2>
      <p>Generative AI models analyze vast datasets to provide actionable insights, forecast trends, and support business strategy.</p>
      <h2>Ethical Considerations & Risks</h2>
      <p>While generative AI offers efficiency, businesses must address biases, intellectual property concerns, and misuse of AI-generated content.</p>
      <p>By 2025, companies embracing generative AI responsibly will gain competitive advantages in innovation, speed, and customer engagement.</p>
    `,
    author: {
      name: "Michael Chen",
      role: "AI Strategist",
      // avatar: "/ai-strategist.png",
      bio: "Advising enterprises on ethical and effective implementation of AI technologies.",
    },
    publishedAt: "2025-08-05",
    readTime: "6 min read",
    category: "AI",
    tags: ["Generative AI", "Business", "Automation", "Innovation"],
    image: "/Gemini_generative-ai-in-business.png",
    featured: false,
  }
  
 
]

interface BlogPostPageProps {
  params: { slug: string }
}

// --- Metadata ---
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: "Post Not Found - KundKund IT Blog" }

  return {
    title: `${post.title} - KundKund IT Blog`,
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

// --- Blog Post Page ---
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-4">
                {/* <Image src={post.author.avatar} alt={post.author.name} width={60} height={60} className="rounded-full" /> */}
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
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      {/* <Image src={post.author.avatar} alt={post.author.name} width={60} height={60} className="rounded-full" /> */}
                      <div>
                        <CardTitle>{post.author.name}</CardTitle>
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
                    <CardTitle>Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2 text-sm">
                      <Link href="#current-state" className="block text-muted-foreground hover:text-primary">
                        Current State
                      </Link>
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()}</div>
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
    </div>
  )
}

// --- Static Params ---
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}
