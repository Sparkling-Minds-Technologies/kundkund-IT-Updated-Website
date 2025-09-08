import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Heart,
  Zap,
  Shield,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - FreshTech Solutions",
  description:
    "Learn about FreshTech Solutions - our mission, values, team, and commitment to delivering innovative software solutions that drive business growth.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our success. We build lasting partnerships by understanding your business and delivering solutions that exceed expectations.",
    },
    {
      icon: Zap,
      title: "Agile Excellence",
      description:
        "We embrace agile methodologies to ensure rapid delivery, continuous improvement, and adaptability to changing requirements.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "We maintain the highest standards of code quality, security, and performance in every project we deliver.",
    },
  ]

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to deliver fresh, innovative software solutions to growing businesses.",
    },
    {
      year: "2020",
      title: "First Healthcare Client",
      description:
        "Launched our first HIPAA-compliant healthcare platform, establishing our expertise in regulated industries.",
    },
    {
      year: "2021",
      title: "PropTech Expansion",
      description: "Expanded into real estate technology, delivering property management and virtual tour solutions.",
    },
    {
      year: "2022",
      title: "AI/ML Capabilities",
      description: "Added artificial intelligence and machine learning services to our core offerings.",
    },
    {
      year: "2023",
      title: "Enterprise Growth",
      description: "Secured major enterprise clients and expanded our cloud infrastructure capabilities.",
    },
    {
      year: "2024",
      title: "50+ Projects Milestone",
      description: "Celebrated delivering over 50 successful projects across multiple industries.",
    },
  ]

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former tech lead at Fortune 500 companies with 12+ years of experience in software architecture and team leadership.",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Full-stack engineer and AI specialist with expertise in scalable cloud architectures and machine learning systems.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Michael Johnson",
      role: "Head of Engineering",
      bio: "Senior software engineer with deep expertise in web technologies, mobile development, and DevOps practices.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Emily Davis",
      role: "Lead UI/UX Designer",
      bio: "Creative designer with a passion for user-centered design and 8+ years of experience in digital product design.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "Senior AI Engineer",
      bio: "Machine learning expert with PhD in Computer Science and experience building AI solutions for healthcare and fintech.",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      bio: "Certified Scrum Master with expertise in agile project management and client relationship management.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  ]

  const whyChooseUs = [
    {
      title: "Proven Expertise",
      description: "5+ years of experience delivering successful projects across multiple industries.",
      stat: "50+",
      label: "Projects Delivered",
    },
    {
      title: "Agile Methodology",
      description: "Fast, iterative development with regular client feedback and continuous improvement.",
      stat: "2-4",
      label: "Week Sprints",
    },
    {
      title: "Cost-Effective",
      description: "Competitive pricing with transparent costs and no hidden fees.",
      stat: "30%",
      label: "Cost Savings",
    },
    {
      title: "Quality Focus",
      description: "Rigorous testing and quality assurance processes ensure reliable, secure solutions.",
      stat: "98%",
      label: "Client Satisfaction",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                About FreshTech Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance">
                Building the <span className="text-primary">Future</span> of Software
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Founded in 2019 with a mission to deliver innovative, scalable software solutions that drive business
                growth. We combine cutting-edge technology with deep industry expertise to transform ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#team">Meet Our Team</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/modern-software-development-team-working-on-innova.jpg"
                alt="FreshTech Solutions Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-pretty">
                  To empower businesses with innovative software solutions that drive growth, efficiency, and digital
                  transformation. We believe technology should be accessible, reliable, and tailored to each client's
                  unique needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Award className="h-6 w-6 text-accent" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-pretty">
                  To be the leading software development partner for businesses seeking innovative, scalable solutions.
                  We envision a future where technology seamlessly integrates with business processes to create
                  exceptional value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              These core values guide everything we do, from how we approach projects to how we build relationships with
              our clients and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From a small startup to a trusted software development partner, here are the key milestones that have
              shaped our growth.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <Card className="bg-card/50 backdrop-blur border-0">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-pretty">{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Why Choose <span className="text-primary">FreshTech Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We combine technical expertise with business acumen to deliver solutions that not only work but drive real
              business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur border-0">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{reason.stat}</div>
                  <div className="text-sm text-muted-foreground mb-4">{reason.label}</div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our diverse team of experts brings together years of experience in software development, design, and
              project management to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Link
                        href={member.linkedin}
                        className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                      <Link
                        href={member.github}
                        className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link
                        href={member.twitter}
                        className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-pretty">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Our <span className="text-primary">Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We're strategically located to serve clients across different time zones while maintaining close
              collaboration with our distributed team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "San Francisco",
                address: "123 Tech Street, Innovation District, CA 94105",
                type: "Headquarters",
                email: "sf@freshtech.solutions",
              },
              {
                city: "New York",
                address: "456 Business Ave, Manhattan, NY 10001",
                type: "East Coast Office",
                email: "ny@freshtech.solutions",
              },
              {
                city: "Austin",
                address: "789 Startup Blvd, Tech Quarter, TX 78701",
                type: "Development Center",
                email: "austin@freshtech.solutions",
              },
            ].map((office, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-0">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {office.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{office.address}</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <Link href={`mailto:${office.email}`} className="text-sm text-primary hover:underline">
                      {office.email}
                    </Link>
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
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Ready to Work Together?</h2>
            <p className="text-xl opacity-90 text-pretty max-w-2xl mx-auto">
              Join the growing list of satisfied clients who trust FreshTech Solutions to deliver innovative software
              solutions that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contact">
                  Start Your Project
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

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
