"use client"

import { motion } from "framer-motion"

export function EssentialCourses() {
  const courses = [
    {
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed0a2de3903092acb4802e_Core%20Certifications.png",
      title: "Core Certifications",
      description: "For: Aspiring professionals building caregiving expertise.",
      link: "https://careslink.com/nursing-certifications-credentials/certification-courses",
      buttonText: "30+ Certifications"
    },
    {
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed0a2eca646d746620f6d9_NCLEX%20Training.png",
      title: "NCLEX Training",
      description: "For: Nurses preparing for international licensure.",
      link: "https://careslink.com/nursing-certifications-credentials/continuing-nclex",
      buttonText: "20+ Programs"
    },
    {
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed0a2d452724163045b532_Continuous%20Education%20Credits.png",
      title: "Continuous Education",
      description: "For: Licensed professionals staying up-to-date with healthcare",
      link: "https://careslink.com/nursing-certifications-credentials/continuing-education-courses",
      buttonText: "20+ Courses"
    },
    {
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed0a2edf05f9c9856fb2cc_Language%20Proficiency.png",
      title: "Language Proficiency",
      subtitle: "PTE, OET, IELTS",
      description: "For: Professionals seeking roles in English-speaking countries.",
      link: "https://careslink.com/nursing-certifications-credentials/continuing-pte-ielts-oet-training",
      buttonText: "10+ Programs"
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
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {courses.map((course, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
          className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <div className="min-h-[4rem]">
              <h3 className="text-lg font-semibold text-gray-900">
                {course.title}
              </h3>
              {course.subtitle && (
                <p className="text-sm text-gray-500 mt-1">{course.subtitle}</p>
              )}
            </div>
            
            <p className="text-sm text-gray-600 mb-4 flex-1">
              {course.description}
            </p>
            
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-[#0092ec] bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 mt-auto"
            >
              {course.buttonText}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
