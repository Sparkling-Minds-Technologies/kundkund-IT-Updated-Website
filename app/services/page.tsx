import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Code,
  Layers,
  Package,
  Building2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - KundKund IT",
  description:
    "Comprehensive software development services including AI/ML, web development, mobile apps, cloud solutions, UI/UX design, and QA automation.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "ai",
      icon: Brain,
      title: "AI/ML",
      subtitle: "Intelligent Solutions for Modern Challenges",
      description:
        "We build intelligent systems that learn, adapt, and deliver. AI/ML solutions made for real business impact.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
      features: [
        "Custom AI Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Machine Learning Pipelines",
        "AI Integration & Deployment",
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "AWS SageMaker", "Azure ML"],
      useCases: [
        "Automated customer support with intelligent chatbots",
        "Predictive maintenance for manufacturing equipment",
        "Medical image analysis for healthcare diagnostics",
        "Fraud detection for financial services",
      ],
    },
    {
      id: "web",
      icon: Globe,
      title: "Web Development",
      subtitle: "Modern, Scalable Web Applications",
      description:
        "Smart web development for modern Businesses. Fast, functional and future-ready.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
      features: [
        "React & Next.js Development",
        "Progressive Web Apps (PWAs)",
        "E-commerce Platforms",
        "Content Management Systems",
        "API Development & Integration",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"],
      useCases: [
        "E-commerce platforms with real-time inventory",
        "SaaS applications with subscription management",
        "Corporate websites with CMS integration",
        "Real-time collaboration tools",
      ],
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "Native & Cross-Platform Mobile Solutions",
      description:
        "Apps that deliver more than just clicks. Smooth, smart, and ready for growth.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions",
        "Mobile UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect"],
      useCases: [
        "Healthcare apps with patient monitoring",
        "Real estate apps with virtual tours",
        "Fintech apps with secure transactions",
        "Social networking and community apps",
      ],
    },
   {
  id: "product-dev",
  icon: Package,
  title: "Product Development",
  subtitle: "From Idea to Market-Ready Solutions",
  description:
    "Transforming concepts into market-ready products with innovation, speed, and precision.",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
  features: [
    "End-to-End Product Strategy",
    "MVP Design & Development",
    "Agile Prototyping",
    "Scalable Architecture",
    "Continuous Testing & QA",
    "Product Lifecycle Management",
  ],
  technologies: ["React", "Node.js", "Python", "GraphQL", "Docker", "Kubernetes"],
  useCases: [
    "Building MVPs for startups",
    "IoT-based consumer products",
    "AI-powered recommendation engines",
    "E-commerce platforms with custom features",
  ],
},
{
  id: "enterprise-software",
  icon: Building2,
  title: "Enterprise Software",
  subtitle: "Robust, Scalable, and Secure Business Solutions",
  description:
    "Empowering enterprises with software that drives efficiency, innovation, and growth.",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  features: [
    "Custom ERP & CRM Solutions",
    "Legacy System Modernization",
    "Workflow Automation",
    "Enterprise Data Management",
    "Cloud Migration & Integration",
    "Role-Based Access Control",
  ],
  technologies: ["Java", "Spring Boot", "C#", ".NET", "Oracle", "Azure", "AWS"],
  useCases: [
    "ERP systems for manufacturing",
    "CRM platforms for sales and marketing",
    "Supply chain management solutions",
    "HR & payroll management systems",
  ],
},
{
  id: "saas-product",
  icon: Cloud,
  title: "SaaS Product",
  subtitle: "Cloud-First, Subscription-Based Digital Solutions",
  description:
    "Scalable SaaS solutions that deliver seamless experiences and recurring value.",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  features: [
    "Multi-Tenant Architecture",
    "Subscription & Billing Integration",
    "Scalable Cloud Infrastructure",
    "Analytics & Reporting Dashboards",
    "Single Sign-On (SSO) & Authentication",
    "API-First Approach",
  ],
  technologies: ["Next.js", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Stripe", "Auth0"],
  useCases: [
    "Project management & collaboration tools",
    "SaaS-based HR & recruitment platforms",
    "Analytics & BI dashboards",
    "Customer support and ticketing systems",
  ],
},

  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Next-Gen  <span className="text-primary"></span>
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              <span className="text-primary">Software Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              From AI-powered applications to scalable cloud infrastructure, we provide end-to-end software development
              services that transform your business ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{service.subtitle}</Badge>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">{service.title}</h2>
                    <p className="text-lg text-muted-foreground text-pretty">{service.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-muted text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <Card className="overflow-hidden">
                    <div className="relative h-64 lg:h-80">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={`${service.title} Services`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">Use Cases</h4>
                      <ul className="space-y-2">
                        {service.useCases.map((useCase, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Our Development <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds
              your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your requirements, understand your business goals, and define project scope.",
                icon: Users,
              },
              {
                step: "02",
                title: "Design",
                description: "Create wireframes, prototypes, and technical architecture based on your needs.",
                icon: Layers,
              },
              {
                step: "03",
                title: "Development",
                description: "Build your solution using agile methodology with regular updates and feedback.",
                icon: Code,
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launch your application with comprehensive testing, monitoring, and support.",
                icon: Zap,
              },
            ].map((process, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{process.step}</div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Start Your Project?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-pretty">
                Let's discuss your requirements and create a custom solution that drives your business forward.
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
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
