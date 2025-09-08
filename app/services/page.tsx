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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - FreshTech Solutions",
  description:
    "Comprehensive software development services including AI/ML, web development, mobile apps, cloud solutions, UI/UX design, and QA automation.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "ai",
      icon: Brain,
      title: "AI & Machine Learning",
      subtitle: "Intelligent Solutions for Modern Challenges",
      description:
        "Harness the power of artificial intelligence to automate processes, gain insights from data, and create intelligent applications that adapt and learn.",
      image: "/placeholder.svg?key=ai-ml",
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
        "Build responsive, high-performance web applications using cutting-edge technologies that deliver exceptional user experiences across all devices.",
      image: "/placeholder.svg?key=web-dev",
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
      title: "Mobile Applications",
      subtitle: "Native & Cross-Platform Mobile Solutions",
      description:
        "Create engaging mobile experiences with native iOS and Android apps, or cross-platform solutions that reach users wherever they are.",
      image: "/placeholder.svg?key=mobile-dev",
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
      id: "cloud",
      icon: Cloud,
      title: "Cloud Solutions",
      subtitle: "Scalable Infrastructure & DevOps",
      description:
        "Leverage cloud technologies to build scalable, reliable, and cost-effective solutions with automated deployment and monitoring.",
      image: "/placeholder.svg?key=cloud-solutions",
      features: [
        "Cloud Architecture Design",
        "AWS & Azure Implementation",
        "DevOps & CI/CD Pipelines",
        "Containerization & Orchestration",
        "Monitoring & Logging",
        "Security & Compliance",
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      useCases: [
        "Microservices architecture for enterprise applications",
        "Auto-scaling web applications",
        "Data lakes for analytics and reporting",
        "Disaster recovery and backup solutions",
      ],
    },
    {
      id: "design",
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "User-Centered Design Excellence",
      description:
        "Create intuitive, accessible, and visually appealing interfaces that delight users and drive engagement through research-driven design.",
      image: "/placeholder.svg?key=ui-ux-design",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Design Systems & Style Guides",
        "Accessibility Compliance",
        "Mobile-First Design",
        "Conversion Optimization",
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer"],
      useCases: [
        "Healthcare portals with patient-friendly interfaces",
        "E-commerce platforms with optimized checkout flows",
        "Enterprise dashboards with complex data visualization",
        "Mobile apps with intuitive navigation",
      ],
    },
    {
      id: "qa",
      icon: Shield,
      title: "QA & Testing",
      subtitle: "Comprehensive Quality Assurance",
      description:
        "Ensure your software is reliable, secure, and performs optimally with our comprehensive testing strategies and automation frameworks.",
      image: "/placeholder.svg?key=qa-testing",
      features: [
        "Automated Testing Frameworks",
        "Performance & Load Testing",
        "Security Testing & Audits",
        "Cross-Browser Compatibility",
        "API Testing",
        "Continuous Integration Testing",
      ],
      technologies: ["Selenium", "Cypress", "Jest", "Playwright", "JMeter", "SonarQube"],
      useCases: [
        "Automated regression testing for web applications",
        "Performance testing for high-traffic platforms",
        "Security audits for financial applications",
        "Mobile app testing across devices",
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
              Comprehensive <span className="text-primary">Software Solutions</span>
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
                        <Badge key={idx} variant="secondary" className="bg-muted">
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
