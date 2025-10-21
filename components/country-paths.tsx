"use client"

import { motion } from "framer-motion"

export function CountryPaths() {
  const paths = [
    {
      image: "./path_to_usa.png",
      title: "Path To USA",
      flag: "🇺🇸",
      description: "Your ultimate guide to becoming a Registered Nurse in the USA: Navigate licensure, NCLEX-RN, visas, and high-demand career opportunities with ease.",
      link: "https://careslink.com/path-to-usa"
    },
    {
      image: "./path_to_canada.png",
      title: "Path To Canada",
      flag: "🇨🇦",
      description: "Step-by-step guide for international nurses to work in Canada: From credential evaluation to licensure, discover a thriving healthcare career.",
      link: "https://careslink.com/path-to-canada"
    },
    {
      image: "./path_to_australia.jpg",
      title: "Path To Australia",
      flag: "🇦🇺",
      description: "Become a nurse in Australia: A comprehensive guide to registration, visas, and thriving in a top healthcare destination.",
      link: "https://careslink.com/path-to-australia"
    },
    {
      image: "./explore_more.jpg",
      title: "Explore More",
      flag: "🌍",
      description: "Discover opportunities in UK, UAE, Germany, Japan, and more countries worldwide.",
      link: "https://careslink.com/career-roadmaps",
      isExplore: true
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {paths.map((path, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
            <img 
              src={path.image} 
              alt={path.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Flag */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              {path.flag}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              {path.title}
            </h3>
            
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {path.description}
            </p>
            
            <a
              href={path.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-[#0092ec] hover:text-[#0078c4] group/link transition-colors"
            >
              <span>{path.isExplore ? "View All Paths" : "Learn More"}</span>
              <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
