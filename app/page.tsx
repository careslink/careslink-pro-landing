"use client"

import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { HeroHighlights } from "@/components/hero-highlights"
import { AppShowcaseSection } from "@/components/app-showcase-section"
import { CountryPaths } from "@/components/country-paths"
import { JobCardsSection } from "@/components/job-cards-section"
import { EssentialCourses } from "@/components/essential-courses"
import { HealthcareJobs } from "@/components/healthcare-jobs"
import { CredentialsSection } from "@/components/credentials-section"
import { AIAgentsSection } from "@/components/ai-agents-section"
import { TrustNetworkSection } from "@/components/trust-network-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* Healthcare-Themed Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 overflow-hidden">
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60"></div>
        
        {/* Decorative Gradient Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0092ec]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00a8ff]/10 rounded-full blur-3xl"></div>
        
        {/* Healthcare Pattern Background */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230892ec' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline - Healthcare Professional */}
            <div className="text-center space-y-6 mb-12">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight">
                <span className="text-[#0092ec]">
                  CaresLink
                </span>
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#0092ec]"></div>
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0092ec]">
                  The Global HealthForce
                </p>
                <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#0092ec]"></div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Empowering healthcare professionals to build exceptional global careers through world-class education, certification, and meaningful connections.
              </p>
            </div>
            
            {/* CTAs - Healthcare Colors */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://careslink.com/account-setup"
                target="_blank"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#0092ec] rounded-lg shadow-lg hover:shadow-xl hover:bg-[#0078c4] transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a
                href="https://careslink.com/jobs"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0092ec] bg-white border-2 border-[#0092ec]/20 rounded-lg hover:bg-[#0092ec]/5 hover:border-[#0092ec]/40 transition-all duration-300"
              >
                Explore Opportunities
              </a>
            </div>

            {/* App Download Buttons */}
            <div className="flex flex-col items-center mb-16">
              <p className="text-sm text-gray-600 mb-4 font-medium">Download Our Mobile App</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mycompany.mediglobo&pcampaignid=web_share&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </a>
                
                <a
                  href="https://apps.apple.com/us/app/careslink/id6717586993?platform=iphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Paths Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
              <span className="text-sm font-semibold text-blue-700">🌍 Global Career Pathways</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Plan Your Global Healthcare Career
        </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate your path to international healthcare opportunities with expert guidance
            </p>
          </motion.div>
          <CountryPaths />
        </div>
      </section>

      {/* Job Cards Section */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 mb-4">
              <span className="text-sm font-semibold text-cyan-700">💼 Career Opportunities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Featured Global Positions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Visa-sponsored healthcare roles at world-class institutions
            </p>
          </motion.div>
          <JobCardsSection />
        </div>
      </section>

      {/* Essential Courses Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-4">
              <span className="text-sm font-semibold text-green-700">📚 Education & Certification</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Professional Development Programs
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally recognized certifications to advance your career
            </p>
          </motion.div>
          <EssentialCourses />
          <HealthcareJobs />
        </div>
      </section>

      {/* Credentials Section */}
      <motion.section 
        className="relative bg-white py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CredentialsSection />
        </div>
      </motion.section>

      {/* AI Agents Section */}
      <motion.section 
        className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AIAgentsSection />
        </div>
      </motion.section>

      {/* Trust Network / FAQ Section */}
      <motion.section 
        className="relative bg-white py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TrustNetworkSection />
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProcessSection />
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="relative bg-white py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TestimonialsSection />
        </div>
      </motion.section>

      {/* App Showcase Section */}
      <AppShowcaseSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
