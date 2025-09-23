import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Building2,
  Rocket,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Shield,
  Users,
  Zap,
  Target,
  Award,
   Factory,
    Truck,
    CreditCard,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries We Serve - KundKund IT",
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
  id: "manufacturing",
  icon: Factory,
  title: "Manufacturing",
  subtitle: "Smart Production & Industry 4.0, Advanced Manufacturing,",
  description:
    "Transform your manufacturing operations with intelligent automation, optimized workflows, and advanced Industry 4.0 solutions.",
  image: "/manufacturing.png",
  stats: {
    projects: "50+",
    clients: "40",
    satisfaction: "98%",
  },
  solutions: [
    {
      title: "Process Automation",
      description:
        "Implement smart automation systems to streamline production lines and reduce manual errors.",
    },
    {
      title: "IoT & Industry 4.0 Integration",
      description:
        "Integrate sensors, machines, and data analytics for real-time monitoring and predictive maintenance.",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Enhance operational efficiency with data-driven supply chain management and logistics solutions.",
    },
    {
      title: "Custom Manufacturing Software",
      description:
        "Develop tailor-made software to manage production schedules, inventory, and quality control.",
    },
  ],
  features: [
    "Smart Factory Solutions",
    "Predictive Maintenance",
    "Energy Optimization",
    "Quality Assurance Automation",
    "Real-Time Analytics",
    "ERP & MES Integration",
  ],
  caseStudy: {
    client: "PrecisionTech Ltd.",
    challenge:
      "Needed to reduce downtime and improve efficiency across multiple production lines.",
    solution:
      "Implemented IoT sensors, automated reporting dashboards, and predictive maintenance algorithms.",
    results:
      "Reduced downtime by 35%, increased production efficiency by 25%, and achieved higher product quality standards.",
  },
},
{
  id: "logistics",
  icon: Truck, 
  title: "Logistics",
  subtitle: "Efficient Supply Chain & Delivery Solutions",
  description:
    "Optimize your logistics operations with smart supply chain management, real-time tracking, and streamlined delivery solutions.",
  image: "/logistics-services.jpg", 
  stats: {
    projects: "40+",
    clients: "35",
    satisfaction: "97%",
  },
  solutions: [
    {
      title: "Supply Chain Optimization",
      description:
        "Data-driven strategies to enhance inventory management, reduce costs, and improve delivery timelines.",
    },
    {
      title: "Fleet Management",
      description:
        "Smart tracking and route optimization for your fleet to reduce fuel costs and improve efficiency.",
    },
    {
      title: "Real-Time Shipment Tracking",
      description:
        "Enable end-to-end visibility of shipments with IoT and GPS integration for timely delivery.",
    },
    {
      title: "Custom Logistics Software",
      description:
        "Develop tailor-made solutions for warehouse management, order processing, and transportation.",
    },
  ],
  features: [
    "Route Optimization",
    "Inventory Analytics",
    "Predictive Demand Planning",
    "Real-Time Tracking",
    "Automated Reporting",
    "Integrated ERP Solutions",
  ],
  caseStudy: {
    client: "FastTrack Logistics",
    challenge:
      "Needed to improve on-time deliveries and optimize warehouse operations across multiple locations.",
    solution:
      "Implemented real-time tracking dashboards, automated warehouse management software, and predictive analytics.",
    results:
      "Improved on-time delivery rate by 30%, reduced operational costs by 20%, and increased client satisfaction significantly.",
  },
},

{
  id: "edtech",
  icon: BookOpen, 
  title: "EdTech",
  subtitle: "Innovative Learning & Digital Education",
  description:
    "Empower education with interactive learning platforms, AI-driven content, and seamless online learning experiences.",
  image: "/EdTech.jpg", // Place the image in your public/images folder
  stats: {
    projects: "35+",
    clients: "30",
    satisfaction: "95%",
  },
  solutions: [
    {
      title: "E-Learning Platforms",
      description:
        "Develop scalable online learning platforms with interactive courses, assessments, and certifications.",
    },
    {
      title: "AI-Powered Learning",
      description:
        "Integrate AI-driven personalized learning paths, content recommendations, and performance analytics.",
    },
    {
      title: "Virtual Classrooms",
      description:
        "Real-time video classrooms with collaboration tools, quizzes, and student engagement features.",
    },
    {
      title: "Custom EdTech Software",
      description:
        "Tailor-made solutions for schools, universities, and training institutes to manage courses, students, and progress tracking.",
    },
  ],
  features: [
    "Interactive Content",
    "AI Personalization",
    "Gamified Learning",
    "Progress Analytics",
    "Video & Live Classes",
    "Cloud-Based Infrastructure",
  ],
  caseStudy: {
    client: "LearnSmart Academy",
    challenge:
      "Needed a comprehensive digital learning platform to support 10,000+ students with personalized learning paths.",
    solution:
      "Built a cloud-based e-learning platform with AI-driven course recommendations, assessments, and interactive content.",
    results:
      "Increased student engagement by 40%, improved course completion rate by 30%, and received excellent feedback from educators and learners.",
  },
},

{
  id: "fintech",
  icon: CreditCard, 
  title: "FinTech",
  subtitle: "Smart Financial Solutions & Digital Banking",
  description:
    "Revolutionize financial services with secure digital payments, AI-driven analytics, and innovative banking solutions.",
  image: "/fintech-1.jpg", 
  stats: {
    projects: "45+",
    clients: "38",
    satisfaction: "97%",
  },
  solutions: [
    {
      title: "Digital Payments",
      description:
        "Implement secure, scalable, and user-friendly payment systems for web and mobile platforms.",
    },
    {
      title: "AI & Data Analytics",
      description:
        "Leverage AI for fraud detection, credit scoring, and personalized financial insights.",
    },
    {
      title: "Mobile Banking Solutions",
      description:
        "Develop apps for seamless account management, transactions, and financial planning.",
    },
    {
      title: "Custom FinTech Software",
      description:
        "Tailor-made solutions for banks, startups, and financial institutions to streamline operations and enhance customer experience.",
    },
  ],
  features: [
    "Secure Transactions",
    "Real-Time Analytics",
    "Fraud Detection",
    "AI-Powered Insights",
    "Regulatory Compliance",
    "Cloud-Based Banking",
  ],
  caseStudy: {
    client: "SmartBank Solutions",
    challenge:
      "Needed to launch a digital banking platform with secure payments and AI-powered customer insights.",
    solution:
      "Built a mobile and web banking platform integrated with AI analytics, fraud detection, and real-time reporting.",
    results:
      "Launched successfully within 6 months, increased customer retention by 25%, and enhanced transaction security.",
  },
},

{
  id: "tech-startups",
  icon: Rocket, 
  title: "Technology Startups",
  subtitle: "Innovation & Rapid Growth Solutions",
  description:
    "Accelerate your technology startup with scalable solutions, innovative products, and growth-focused strategies.",
  image: "/startuptechnlogy.jpg",
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
      description:
        "Cloud-native solutions designed to grow with your startup from MVP to enterprise-level applications.",
    },
    {
      title: "Product Strategy Consulting",
      description:
        "Technical guidance and product roadmap development to maximize your chances of success.",
    },
    {
      title: "Funding Pitch Support",
      description:
        "Technical documentation, demos, and prototype support to help secure investor funding.",
    },
  ],
  features: [
    "Agile Development",
    "Cloud-First Architecture",
    "Rapid Iteration",
    "Cost-Effective Solutions",
    "Technical Mentoring",
    "Growth Analytics",
  ],
  caseStudy: {
    client: "TechStart Inc.",
    challenge:
      "Needed to build and launch an MVP within 3 months to secure Series A funding.",
    solution:
      "Developed a full-stack web application with a mobile companion app using modern technologies.",
    results:
      "Successfully launched on schedule and secured $2M Series A funding within 6 months.",
  },
}


    
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
              Solutions Designed for <span className="text-primary">Your Industry</span>
               
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We understand the unique challenges and requirements of different industries. Our specialized expertise
              ensures solutions that drive real business value.
              Whether it’s streamlining operations, enhancing customer experiences, or driving digital transformation, our solutions are designed to create measurable impact.
            </p>
          </div>
        </div>
      </section>

  {/* Industries Overview */}
{/* Industries Overview */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {industries.map((industry) => (
        <Card
          key={industry.id}
          className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col h-full bg-white"
        >
          {/* Card Header */}
          <div className="flex flex-col items-center justify-center pt-6 pb-4 
                          w-full min-h-[140px]
                          bg-gradient-to-r from-primary/20 to-primary/10 
                          group-hover:from-primary/40 group-hover:to-primary/20 
                          transition-all rounded-t-2xl">
            {/* Icon Circle */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 
                            bg-white shadow-md">
              <industry.icon className="h-8 w-8 text-primary" />
            </div>

            {/* Title and Subtitle */}
            <CardTitle className="text-lg font-semibold mb-1 text-center break-words text-primary">
              {industry.title}
            </CardTitle>
            <CardDescription className="text-gray-500 text-sm text-center break-words">
              {industry.subtitle}
            </CardDescription>
          </div>

          {/* Stats and Button Container */}
          <CardContent className="mt-4 flex flex-col gap-4 flex-1 px-4">
            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-3 w-full">
              {[
                { label: "Projects", value: industry.stats.projects },
                { label: "Clients", value: industry.stats.clients },
                { label: "Satisfaction", value: industry.stats.satisfaction },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center bg-gray-100 rounded-full px-4 py-2 min-w-[80px]"
                >
                  <div className="font-bold text-primary text-base">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Learn More Button aligned at bottom */}
            <div className="mt-auto">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-primary hover:bg-primary hover:text-white transition-all text-sm"
              >
                <Link href={`#${industry.id}`} className="flex justify-center items-center">
                  Learn More
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
<section className="py-20 relative overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* Title Section */}
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">
        Why Choose <span className="text-primary">Kundkund IT</span>
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Our industry expertise and proven track record make us the ideal partner for your next software
        development project.
      </p>
    </div>

    {/* Cards Section */}
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
        <div
          key={index}
          className="group relative text-center bg-white/70 dark:bg-card/40 backdrop-blur-lg border border-border/40 shadow-lg rounded-2xl p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          {/* Icon with Glow */}
          <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <div className="w-16 h-16 bg-gradient-to-tr from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
              <benefit.icon className="h-8 w-8 text-primary animate-bounce-slow" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {benefit.description}
          </p>
        </div>
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
