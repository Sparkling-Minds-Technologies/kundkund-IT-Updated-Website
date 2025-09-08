import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - FreshTech Solutions",
  description:
    "Get in touch with FreshTech Solutions. Schedule a free consultation to discuss your software development needs and discover how we can help transform your business.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
