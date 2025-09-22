"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StickyCTA } from "@/components/sticky-cta";
import {
  Brain,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Target,
  Code,
  Server,
HelpCircle,
ChevronDown
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiAmazon,
  SiDocker,
  SiTypescript,
  SiPostgresql,
  SiReactquery,
  SiTensorflow,
  SiKubernetes,
  SiGraphql,
  SiReactivex,
} from "react-icons/si";

// FAQ Data
// FAQ Data
const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the project. For most web apps, you can expect around 8–16 weeks. Mobile apps usually take a bit longer—about 12–20 weeks from the initial idea to launch.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We don’t just build and leave. Our support covers bug fixes, security updates, performance checks, and even adding new features whenever you need them.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across healthcare, real estate (PropTech), fintech, e-commerce, and enterprise software. Plus, we’re experienced with HIPAA and SOC2 compliance, so your data stays safe.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. Whether you need extra hands, a dedicated team, or a mix of both, we adapt to complement your in-house team perfectly.",
  },
  {
    question: "What's your development methodology?",
    answer:
      "We follow Agile/Scrum with 2-week sprints, regular demos, and constant feedback. That way, you stay in the loop and we deliver exactly what you need.",
  },
  {
    question: "Do you sign NDAs and ensure IP protection?",
    answer:
      "Yes! Your ideas are safe with us. We sign NDAs and make sure all your code and data remain fully secure and yours.",
  },
];

// FAQItem Component
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-5 cursor-pointer transition-all duration-300 hover:shadow-xl ${
        isOpen ? "bg-gradient-to-r from-primary/10 to-primary/20" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <HelpCircle className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-balance">{question}</h3>
            <ChevronDown
              className={`text-primary w-5 h-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isOpen && (
            <div className="mt-3 text-muted-foreground text-pretty">
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default function HomePage() {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Only one open at a time
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/30 py-12 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Innovative Software Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  AI-Powered Solutions for  <span className="text-primary">Modern Enterprises</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  Transform your business with cutting-edge AI, web, and mobile applications. We deliver innovative
                  solutions that drive growth and efficiency for healthcare, real estate, startups, and enterprises.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">70+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/modern-software-development-team-working-on-innova.jpg"
                  alt="KundKund IT - Software Development Team"  
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Our Core <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From AI-powered solutions to scalable cloud infrastructure, we provide comprehensive technology services
              that drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
  {
    icon: Brain, // AI/ML
    title: "AI/ML",
    description:
      "Intelligent automation, predictive analytics, and custom AI models to enhance decision-making and efficiency.",
    features: ["Custom AI Models", "Predictive Analytics", "Process Automation"],
  },
  {
    icon: Globe, // Web Development
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies for optimal performance.",
    features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions"],
  },
  {
    icon: Smartphone, // Mobile App Development
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
    features: ["iOS & Android", "Cross-Platform", "App Store Optimization"],
  },
  {
    icon: Code, // Product Development
    title: "Product Development",
    description:
      "End-to-end product development services from ideation to deployment, ensuring innovative and market-ready solutions.",
    features: ["Prototyping", "MVP Development", "Product Strategy"],
  },
  {
    icon: Server, // Enterprise Software
    title: "Enterprise Software",
    description:
      "Custom enterprise solutions that streamline operations, enhance collaboration, and improve overall business efficiency.",
    features: ["ERP Systems", "CRM Solutions", "Business Process Automation"],
  },
  {
    icon: Cloud, // SaaS Product
    title: "SaaS Product",
    description:
      "Scalable Software-as-a-Service products designed for seamless user experience and subscription-based business models.",
    features: ["Cloud Deployment", "Subscription Management", "Multi-Tenant Architecture"],
  },
]
.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-pretty">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Industry <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We understand the unique challenges of different industries and deliver tailored solutions that drive
              measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
  {
    title: "Healthcare",
    description: "HIPAA-compliant solutions, telemedicine platforms, and patient management systems.",
    image: "/modern-healthcare-technology-and-medical-software-.jpg",
    stats: "15+ Healthcare Projects",
  },
  {
    title: "Real Estate",
    description: "PropTech solutions, property management platforms, and virtual tour applications.",
    image: "/real-estate-technology-and-property-management-sof.jpg",
    stats: "20+ PropTech Solutions",
  },
  {
    title: "Startups",
    description: "MVP development, rapid prototyping, and scalable architecture for growing businesses.",
    image: "/startup-technology-and-innovative-business-softwar.jpg",
    stats: "30+ Startup Launches",
  },
  {
    title: "Manufacturing",
    description: "Smart factory solutions, IoT integration, and production optimization software.",
    image: "/manufacturing.png",
    stats: "25+ Manufacturing Projects",
  },
  {
    title: "Logistics",
    description: "Supply chain management platforms, fleet tracking, and warehouse automation systems.",
    image: "/logistics-services.jpg",
    stats: "20+ Logistics Solutions",
  },
  {
    title: "EdTech",
    description: "E-learning platforms, online classrooms, and digital education tools.",
    image: "/EdTech.jpg",
    stats: "18+ EdTech Projects",
  },
  {
    title: "FinTech",
    description: "Payment gateways, digital banking platforms, and financial analytics solutions.",
    image: "/fintech-1.jpg",
    stats: "22+ FinTech Projects",
  },
  {
    title: "Technology Startups",
    description: "Innovation-driven solutions, product prototyping, and scalable software architecture.",
    image: "/startuptechnlogy.jpg",
    stats: "15+ Tech Startup Projects",
  }
]
.map((industry, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={`${industry.title} Solutions`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{industry.stats}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription className="text-pretty">{industry.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
Don’t just take our word for it—hear directly from our valued clients about their journey with KundKund IT Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, HealthTech Innovations",
                content:
                  "KundKund IT completely transformed our patient management system. With their AI-powered analytics, we’ve achieved a remarkable 40% boost in operational efficiency.",
                rating: 5,
                avatar: "/healthcare-executive-woman.png",
              },
              {
                name: "Michael Chen",
                role: "Founder, PropVision",
                content:
                  "The real estate platform developed by KundKund IT has transformed the way we manage properties. Their commitment to quality and precision is truly exceptional.",
                rating: 5,
                avatar: "/professional-man-real-estate-entrepreneur.jpg",
              },
              {
                name: "Emily Rodriguez",
                role: "VP Engineering, TechStart",
                content:
                  "From MVP to full-scale growth, KundKund IT Solutions has been our trusted partner. Their cloud architecture expertise helped us save months of development effort.",
                rating: 5,
                avatar: "/professional-woman-tech-executive.png",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-0">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-pretty">"{testimonial.content}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
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
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 text-pretty max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project needs and discover how we can help you build
              innovative software solutions that drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>50+ Satisfied Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Results-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Why Choose <span className="text-primary">KundKund IT</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
             We bring together technical expertise and business insight to deliver solutions that are effective and result-driven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Rapid Development",
                description: "Our Agile methodology enables faster time-to-market while maintaining the highest standards of quality.",
                stat: "50% Faster Delivery",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "We follow bank-level security protocols and comply with leading industry standards to ensure complete data protection.",
                stat: "100% Secure",
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description: "Our team of experienced developers, designers, and project managers is dedicated to driving your success.",
                stat: "24/7 Support",
              },
              {
                icon: Target,
                title: "Proven Results",
                description: "We have a proven track record of delivering successful projects across diverse industries and technologies.",
                stat: "98% Success Rate",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-pretty mb-4">{item.description}</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {item.stat}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Our <span className="text-primary">Development Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A proven methodology that ensures your project is delivered on time, within budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We carefully analyze your requirements, define the project scope, and develop a detailed roadmap for success.",
                duration: "1-2 weeks",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "We follow a user-centered design process, creating wireframes, mockups, and interactive prototypes to ensure optimal user experiences.",
                duration: "2-3 weeks",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "We follow Agile development practices with continuous integration, rigorous testing, and regular client feedback to ensure quality and alignment.",
                duration: "4-12 weeks",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We provide deployment, comprehensive training, and ongoing maintenance to ensure your project’s long-term success.",
                duration: "Ongoing",
              },
            ].map((process, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                <CardHeader className="pb-4">
                  <div className="text-4xl font-bold text-primary/20 mb-2">{process.step}</div>
                  <CardTitle className="text-xl mb-2">{process.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {process.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies section */}
      {/* Technologies section */}
<section className="py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
        Technologies We <span className="text-primary">Master</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
        We stay at the forefront of technology, using the latest tools and frameworks to build cutting-edge
        solutions.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {[
        { name: "React", category: "Frontend", icon: <SiReact size={32} className="text-blue-500" /> },
        { name: "Next.js", category: "Framework", icon: <SiNextdotjs size={32} className="text-black" /> },
        { name: "Node.js", category: "Backend", icon: <SiNodedotjs size={32} className="text-green-500" /> },
        { name: "Python", category: "AI/ML", icon: <SiPython size={32} className="text-yellow-500" /> },
        { name: "AWS", category: "Cloud", icon: <SiAmazon size={32} className="text-orange-500" /> },
        { name: "Docker", category: "DevOps", icon: <SiDocker size={32} className="text-blue-600" /> },
        { name: "TypeScript", category: "Language", icon: <SiTypescript size={32} className="text-blue-700" /> },
        { name: "PostgreSQL", category: "Database", icon: <SiPostgresql size={32} className="text-blue-800" /> },
        { name: "React Native", category: "Mobile", icon: <SiReactivex size={32} className="text-teal-500" /> },
        { name: "TensorFlow", category: "AI/ML", icon: <SiTensorflow size={32} className="text-orange-600" /> },
        { name: "Kubernetes", category: "DevOps", icon: <SiKubernetes size={32} className="text-blue-500" /> },
        { name: "GraphQL", category: "API", icon: <SiGraphql size={32} className="text-pink-500" /> },
      ].map((tech, index) => (
        <div key={index} className="text-center group">
          <div className="w-16 h-16 bg-card border rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300">
            {tech.icon}
          </div>
          <h4 className="font-semibold text-sm">{tech.name}</h4>
          <p className="text-xs text-muted-foreground">{tech.category}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Recent Projects section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Recent <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore some of our latest projects that showcase our expertise across different industries and
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HealthCare AI Platform",
                description:
                  "An AI-driven diagnostic platform that helped a leading hospital network cut down diagnosis time by 60%, making healthcare faster and more efficient for patients",
                industry: "Healthcare",
                tech: ["Python", "TensorFlow", "React", "AWS"],
                results: "60% faster diagnosis",
                image: "/modern-healthcare-technology-and-medical-software-.jpg",
              },
              {
                title: "PropTech Mobile App",
                description: "A real estate management app that brings properties to life with AR tours and simplifies tenant screening through automation.",
                industry: "Real Estate",
                tech: ["React Native", "Node.js", "MongoDB", "AR Kit"],
                results: "300% user engagement",
                image: "/real-estate-technology-and-property-management-sof.jpg",
              },
              {
                title: "E-commerce Platform",
                description: "A scalable e-commerce platform that effortlessly handles over 10M+ transactions while providing advanced analytics for smarter business decisions.",
                industry: "Retail",
                tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
                results: "10M+ transactions",
                image: "/startup-technology-and-innovative-business-softwar.jpg",
              },
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{project.industry}</Badge>
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{project.results}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-pretty">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

     <section className="py-20 text-center bg-gray-100">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
          Welcome to Our IT Solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Delivering cutting-edge technology to help your business grow and succeed.
        </p>
        <Button className="mt-8">Get Started</Button>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Got questions? Here are answers to some of the most common queries about our services and process.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
