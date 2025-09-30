import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const services = [
    { name: "AI/ML", href: "/services#ai" },
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile App Development", href: "/services#mobile" },
    { name: "Product Development", href: "/services#product-dev" },
    { name: "Enterprise Software", href: "/services#enterprise-software" },
    { name: "SaaS Product", href: "/services#saas-product" },
  ]


  const footerIndustries = [
  { id: "healthcare", title: "Healthcare" },
  { id: "realestate", title: "Real Estate" },
  { id: "startups", title: "Startups" },
  { id: "manufacturing", title: "Manufacturing" },
  { id: "logistics", title: "Logistics" },
  { id: "edtech", title: "EdTech" },
  { id: "fintech", title: "FinTech" },
  { id: "tech-startups", title: "Technology Startups" },
]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
             {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-20 w-42">
              <Image src="/kundkund-IT-Logos-1.png" alt="Logo" fill style={{ objectFit: "contain" }} />
            </div>
          </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              We build fresh, scalable software solutions that drive innovation and growth for businesses across
              healthcare, real estate, and enterprise sectors.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>H-166, Sector 63 Rd, H Block, Noida Uttar Pradesh, 201301</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 73032 28181</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@kundkundit.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
           <div>
      <h3 className="text-sm font-semibold mb-2">Industries</h3>
      <ul className="space-y-1">
        {footerIndustries.map((industry) => (
          <li key={industry.id}>
            <Link
              href={`/industries#${industry.id}`}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {industry.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest insights on software development and technology trends.
              </p>
            </div>
            <div className="flex w-full md:w-auto space-x-2">
              <Input type="email" placeholder="Enter your email" className="w-full md:w-64" />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>

{/* Bottom Bar */}
<div className="mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
  <p className="text-muted-foreground text-sm">
    © 2025 KundKund IT. All rights reserved.
  </p>
  <div className="flex items-center space-x-4">
    <a
      href="https://www.facebook.com/kundkundit"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <Facebook className="h-5 w-5" />
    </a>
    <a
      href="https://www.instagram.com/kundkundit/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <Instagram className="h-5 w-5" />
    </a>
    <a
      href="https://www.linkedin.com/company/kundkund-it/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <Linkedin className="h-5 w-5" />
    </a>
  </div>
</div>

      </div>
    </footer>
  )
}
