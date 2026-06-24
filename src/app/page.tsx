"use client"

import React from "react"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/sections/HeroSection"
import { MentorshipOverviewSection } from "@/sections/MentorshipOverviewSection"
import { FeaturesSection } from "@/sections/FeaturesSection"
import { TestimonialsSection } from "@/sections/TestimonialsSection"
import { AboutSection } from "@/sections/AboutSection"
import { ContactSection } from "@/sections/ContactSection"

export default function Home() {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contacto")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      {/* Sections separated by large gaps as per the design system (160px) */}
      <div className="space-y-20 md:space-y-28 lg:space-y-[160px] pb-20 md:pb-[160px]">
        <HeroSection onCtaClick={scrollToContact} />
        <MentorshipOverviewSection />
        <FeaturesSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </div>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/20 bg-surface-container-lowest text-center font-hanken text-xs text-on-surface-variant/60">
        <div className="container mx-auto px-6 max-w-7xl">
          <p>© {new Date().getFullYear()} César Naim. Todos los derechos reservados. Reprogramación Mental 90 Días.</p>
        </div>
      </footer>
    </main>
  )
}
