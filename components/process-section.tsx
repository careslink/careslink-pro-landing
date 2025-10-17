"use client"

import { motion } from "framer-motion"

export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Create your Account",
      subtitle: "Start Your Journey",
      description: "Sign up and build a professional profile. A complete profile helps you get noticed by potential employers.",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed085dec6f0e8aba55967d_Create%20an%20account.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      features: ["Quick 2-min signup", "Professional profile", "Instant access"]
    },
    {
      number: 2,
      title: "Explore Courses & Opportunities",
      subtitle: "Learn & Discover",
      description: "Browse certifications, continuous education, NCLEX training, and global job opportunities.",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed083a224fecfbc67e0d3a_Explore%20Courses%20%26%20Opportunities.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      features: ["10,000+ jobs", "200+ courses", "Global opportunities"]
    },
    {
      number: 3,
      title: "Connect and Grow",
      subtitle: "Achieve Success",
      description: "Engage with healthcare professionals, find jobs, and access visa sponsorship resources.",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed08293b1af4d42e751c59_Connect%20and%20Grow.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ["200K+ network", "AI assistance", "Visa support"]
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6
      }
    })
  }

  return (
    <div className="relative">
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
          <span className="text-sm font-semibold text-[#0092ec]">🚀 Simple Process</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Get Started in 3 Easy Steps
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Join thousands of healthcare professionals who've transformed their careers with CaresLink
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="group relative flex flex-col h-full"
          >
            {/* Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 group-hover:border-[#0092ec] transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col h-full">
              {/* Number Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0092ec] to-[#0078c4] text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50/50 to-white">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                {/* Icon & Subtitle */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center text-[#0092ec] group-hover:bg-[#0092ec] group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium text-[#0092ec] uppercase tracking-wide">
                    {step.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#0092ec] transition-colors mb-3 sm:mb-4 min-h-[3.5rem] flex items-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                  {step.description}
                </p>

                {/* Features List */}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-[#0092ec] to-[#00a8ff] -z-10" style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="https://careslink.com/account-setup"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-[#0092ec] to-[#00a8ff] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
        >
          <span>Start Your Journey Today</span>
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        
      </motion.div>
    </div>
  )
}
