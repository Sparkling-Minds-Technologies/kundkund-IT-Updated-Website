import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Building2,
  Rocket,
  Building,
  ArrowRight,
  CheckCircle,
  Shield,
  Users,
  Zap,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries We Serve - FreshTech Solutions",
  description:
    "Specialized software solutions for healthcare, real estate, startups, and enterprises. Industry-specific expertise and proven results.",
}

export default function IndustriesPage() {
  const industries = [
    {
      id: "healthcare",
      icon: Heart,
      title: "Healthcare",
      subtitle: "HIPAA-Compliant Healthcare Solutions",
      description:
        "Transform patient care with secure, compliant healthcare technology solutions that improve outcomes and streamline operations.",
      image: "/modern-healthcare-technology-and-medical-software-.jpg",
      stats: {
        projects: "15+",
        clients: "8",
        satisfaction: "100%",
      },
      solutions: [
        {
          title: "Electronic Health Records (EHR)",
          description:
            "Comprehensive patient management systems with secure data storage and easy access for healthcare providers.",
        },
        {
          title: "Telemedicine Platforms",
          description:
            "Remote consultation solutions with video calling, appointment scheduling, and prescription management.",
        },
        {
          title: "Medical Imaging Solutions",
          description: "AI-powered diagnostic tools for medical image analysis and automated reporting.",
        },
        {
          title: "Patient Portal Applications",
          description:
            "User-friendly interfaces for patients to access medical records, schedule appointments, and communicate with providers.",
        },
      ],
      features: [
        "HIPAA Compliance",
        "HL7 Integration",
        "Medical Device Connectivity",
        "Clinical Decision Support",
        "Audit Trails & Reporting",
        "Multi-factor Authentication",
      ],
      caseStudy: {
        client: "Regional Medical Center",
        challenge: "Needed to digitize patient records and improve care coordination across multiple departments.",
        solution: "Developed a comprehensive EHR system with integrated telemedicine capabilities.",
        results: "40% reduction in administrative time, 25% improvement in patient satisfaction scores.",
      },
    },
    {
      id: "realestate",
      icon: Building2,
      title: "Real Estate",
      subtitle: "PropTech Innovation & Property Management",
      description:
        "Revolutionize real estate operations with cutting-edge PropTech solutions that enhance property management and customer experiences.",
      image: "/real-estate-technology-and-property-management-sof.jpg",
      stats: {
        projects: "20+",
        clients: "12",
        satisfaction: "98%",
      },
      solutions: [
        {
          title: "Property Management Platforms",
          description:
            "Comprehensive solutions for managing properties, tenants, maintenance, and financial operations.",
        },
        {
          title: "Virtual Tour Applications",
          description: "Immersive 3D property tours with VR/AR capabilities for remote property viewing.",
        },
        {
          title: "Real Estate CRM Systems",
          description: "Customer relationship management tools specifically designed for real estate professionals.",
        },
        {
          title: "Investment Analysis Tools",
          description:
            "Advanced analytics platforms for property valuation, market analysis, and investment decisions.",
        },
      ],
      features: [
        "MLS Integration",
        "Document Management",
        "Automated Workflows",
        "Financial Reporting",
        "Mobile Applications",
        "Third-party Integrations",
      ],
      caseStudy: {
        client: "Metro Property Group",
        challenge: "Managing 500+ properties across multiple locations with outdated systems.",
        solution: "Built a cloud-based property management platform with mobile apps for field staff.",
        results: "60% reduction in maintenance response time, 35% increase in operational efficiency.",
      },
    },
    {
      id: "startups",
      icon: Rocket,
      title: "Startups",
      subtitle: "MVP Development & Rapid Scaling",
      description:
        "Accelerate your startup journey with rapid MVP development, scalable architecture, and growth-focused technology solutions.",
      image: "/startup-technology-and-innovative-business-softwar.jpg",
      stats: {
        projects: "30+",
        clients: "25",
        satisfaction: "96%",
      },
      solutions: [
        {
          title: "MVP Development",
          description:
            "Rapid prototyping and minimum viable product development to validate your business ideas quickly.",
        },
        {
          title: "Scalable Architecture",
          description: "Cloud-native solutions designed to grow with your business from startup to enterprise.",
        },
        {
          title: "Product Strategy Consulting",
          description: "Technical guidance and product roadmap development to maximize your chances of success.",
        },
        {
          title: "Funding Pitch Support",
          description: "Technical documentation and demos to support your investor presentations and funding rounds.",
        },
      ],
      features: [
        "Agile Development",
        "Cloud-First Architecture",
        "Cost-Effective Solutions",
        "Rapid Iteration",
        "Technical Mentoring",
        "Growth Analytics",
      ],
      caseStudy: {
        client: "TechStart Inc.",
        challenge: "Needed to build and launch an MVP within 3 months to secure Series A funding.",
        solution: "Developed a full-stack web application with mobile companion app using modern technologies.",
        results: "Successfully launched on schedule, secured $2M Series A funding within 6 months.",
      },
    },
    {
      id: "enterprises",
      icon: Building,
      title: "Enterprises",
      subtitle: "Digital Transformation & Legacy Modernization",
      description:
        "Modernize enterprise operations with scalable solutions, legacy system integration, and digital transformation strategies.",
      image: "/enterprise-software-and-corporate-technology-solut.jpg",
      stats: {
        projects: "10+",
        clients: "8",
        satisfaction: "100%",
      },
      solutions: [
        {
          title: "Legacy System Modernization",
          description: "Upgrade outdated systems with modern technologies while maintaining business continuity.",
        },
        {
          title: "Enterprise Integration",
          description: "Connect disparate systems and create unified data flows across your organization.",
        },
        {
          title: "Digital Transformation",
          description: "Comprehensive strategy and implementation for digital business transformation initiatives.",
        },
        {
          title: "Custom Enterprise Applications",
          description: "Tailored software solutions designed for complex enterprise requirements and workflows.",
        },
      ],
      features: [
        "Enterprise Security",
        "Scalable Architecture",
        "System Integration",
        "Compliance Management",
        "Performance Optimization",
        "24/7 Support",
      ],
      caseStudy: {
        client: "Fortune 500 Manufacturing",
        challenge: "Replace 20-year-old inventory management system affecting operational efficiency.",
        solution: "Developed modern cloud-based inventory system with real-time analytics and mobile access.",
        results: "50% improvement in inventory accuracy, 30% reduction in operational costs.",
      },
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Industry Expertise
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Specialized Solutions for <span className="text-primary">Every Industry</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We understand the unique challenges and requirements of different industries. Our specialized expertise
              ensures solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {industries.map((industry) => (
              <Card key={industry.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription>{industry.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-bold text-primary">{industry.stats.projects}</div>
                      <div className="text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="font-bold text-primary">{industry.stats.clients}</div>
                      <div className="text-muted-foreground">Clients</div>
                    </div>
                    <div>
                      <div className="font-bold text-primary">{industry.stats.satisfaction}</div>
                      <div className="text-muted-foreground">Satisfaction</div>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`#${industry.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {industries.map((industry, index) => (
              <div key={industry.id} id={industry.id} className="space-y-12">
                {/* Industry Header */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{industry.subtitle}</Badge>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold">{industry.title}</h2>
                    <p className="text-lg text-muted-foreground text-pretty">{industry.description}</p>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{industry.stats.projects}</div>
                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{industry.stats.clients}</div>
                        <div className="text-sm text-muted-foreground">Happy Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{industry.stats.satisfaction}</div>
                        <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative">
                      <Image
                        src={industry.image || "/placeholder.svg"}
                        alt={`${industry.title} Solutions`}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-lg w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {industry.solutions.map((solution, idx) => (
                    <Card key={idx} className="bg-card/50 backdrop-blur border-0">
                      <CardHeader>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-pretty">{solution.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Features & Case Study */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Case Study
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{industry.caseStudy.client}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{industry.caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Solution</h4>
                        <p className="text-sm text-muted-foreground">{industry.caseStudy.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Results</h4>
                        <p className="text-sm text-primary font-medium">{industry.caseStudy.results}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Why Choose <span className="text-primary">FreshTech Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our industry expertise and proven track record make us the ideal partner for your next software
              development project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Industry Focus",
                description: "Deep understanding of sector-specific challenges and requirements.",
              },
              {
                icon: Shield,
                title: "Compliance Ready",
                description: "Built-in compliance for HIPAA, SOC 2, GDPR, and other industry standards.",
              },
              {
                icon: Zap,
                title: "Rapid Delivery",
                description: "Agile methodology ensures fast time-to-market without compromising quality.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Specialized developers with years of industry-specific experience.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Ready to Transform Your Industry?</h2>
            <p className="text-xl opacity-90 text-pretty max-w-2xl mx-auto">
              Let's discuss how our industry-specific expertise can help you build innovative solutions that drive real
              business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contact">
                  Schedule Industry Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
