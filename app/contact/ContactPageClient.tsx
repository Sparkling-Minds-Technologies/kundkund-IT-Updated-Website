"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock, Send, Calendar, MessageSquare, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const offices = [
    {
      city: "Noida",
      type: "India office",
      address: "H-166, Sector 63 Rd, H Block, Noida Uttar Pradesh, 201301",
      phone: "+91 73032 28181",
      email: "info@kundkundit.com",
      hours: "Mon - Sat : 8.00-5.00 Sunday : Closed",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.123456789012!2d77.37702181509202!3d28.62561808241765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefd003862401%3A0x871e4638f0e14413!2sKundkund%20Trading%20and%20Consultancy%20Pvt%20Ltd%2C%20FF%2C%20H-166%2C%20Sector-63%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1695216000000!5m2!1sen!2sin",
    },
   
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+91 73032 28181",
      action: "+91 73032 28181",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      value: "info@kundkundit.com",
      action: "info@kundkundit.com",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with us in real-time",
      value: "Available 8 AM - 5 PM",
      action: "#",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a free consultation",
      value: "30-minute free session",
      action: "#",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader className="pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-4">Thank You!</CardTitle>
              <CardDescription className="text-lg">
                We've received your message and will get back to you within 24 hours. Our team is excited to discuss
                your project!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Let's Build Something <span className="text-primary">Amazing Together</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Ready to transform your business with innovative software solutions? We'd love to hear about your project
              and discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-medium text-primary mb-4">{method.value}</div>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={method.action}>Contact Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your project needs.
                </p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder=""
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder=""
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Interested In
                        </label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                            <SelectItem value="web-dev">Web Development</SelectItem>
                            <SelectItem value="mobile-apps">Mobile Applications</SelectItem>
                            <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="qa-testing">QA & Testing</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Project Budget
                        </label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-25k">Under $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="over-250k">Over $250,000</SelectItem>
                            <SelectItem value="discuss">Prefer to discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder=""
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                        Subscribe to our newsletter for the latest insights and updates
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  We're here to help you transform your ideas into reality. Reach out to us through any of the following
                  channels.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+91 73032 28181</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@kundkundit.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Business Hours</div>
                      <div className="text-muted-foreground">Mon - Sat : 8.00-5.00 Sunday : Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Call CTA */}
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Schedule a Free Consultation</h3>
                      <p className="opacity-90">30-minute strategy session</p>
                    </div>
                  </div>
                  <p className="mb-6 opacity-90">
                    Book a free consultation call to discuss your project requirements and get expert advice on the best
                    approach for your needs.
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="w-full bg-background text-foreground hover:bg-background/90"
                  >
                    <Link href="#">
                      Schedule Free Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Why Choose KundKund IT?</h3>
                <div className="space-y-3">
                  {[
                    "Free initial consultation and project assessment",
                    "Transparent pricing with no hidden costs",
                    "Agile development with regular updates",
                    "Post-launch support and maintenance",
                    "Industry-specific expertise and compliance",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* Office Locations */}
<section className="py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
        Our <span className="text-primary">Locations</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
        Visit us at one of our offices or connect with us remotely. We're strategically located to serve clients
        across different time zones.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
      {offices.length > 0 && (
        <Card className="overflow-hidden flex flex-col">
          {/* Map Section */}
          <div className="relative h-48 w-full">
            <iframe
              src={offices[0].mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${offices[0].city} Office Location`}
            />
          </div>

          {/* Card Header */}
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-5 w-5 text-primary" />
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {offices[0].type}
              </Badge>
            </div>
            <CardTitle className="text-xl">{offices[0].city}</CardTitle>
          </CardHeader>

          {/* Card Content */}
          <CardContent className="space-y-3">
            <div>
              <div className="font-medium text-sm">Address</div>
              <div className="text-sm text-muted-foreground">{offices[0].address}</div>
            </div>
            <div>
              <div className="font-medium text-sm">Contact</div>
              <div className="text-sm text-muted-foreground">
                <div>{offices[0].phone}</div>
                <div>{offices[0].email}</div>
              </div>
            </div>
            <div>
              <div className="font-medium text-sm">Hours</div>
              <div className="text-sm text-muted-foreground break-words">
                {offices[0].hours}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Have questions about our process, pricing, or services? Here are some common questions we receive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer comprehensive post-launch support including bug fixes, updates, and maintenance. We also provide training to help your team manage the solution effectively.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We have deep expertise in healthcare, real estate (PropTech), startups, and enterprise solutions. Our team understands industry-specific requirements and compliance needs.",
              },
              {
                question: "How do you handle project communication?",
                answer:
                  "We use agile methodology with regular sprint reviews, daily standups, and weekly client updates. You'll have direct access to your project manager and development team.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-0">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
