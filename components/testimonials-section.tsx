"use client"

import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "I'm a nurse from Kenya, and moving to Canada felt like an impossible dream. Through CaresLink, I connected with mentors who walked me through the licensing steps and prepared me for the NCLEX. Now I'm working in Toronto and even mentoring others in my field.",
      name: "Grace N.",
      role: "Registered Nurse",
      location: "Toronto, Canada",
      image: "professional-testimonial1.png"
    },
    {
      text: "Coming from Sri Lanka, I didn't think I could compete with candidates from other countries. CaresLink helped me prepare for the PTE and build my confidence. I'm now working in New Zealand, and it feels amazing to make a difference in people's lives!",
      name: "Dinesh W.",
      role: "Healthcare Assistant",
      location: "New Zealand",
      image: "professional-testimonial2.png"
    },
    {
      text: "Becoming a healthcare entrepreneur felt out of reach for someone like me from Bangladesh. With CaresLink's network of industry leaders, I learned how to build a sustainable business model for my private home care service. I'm proud to lead a team making a real difference in Australia.",
      name: "Arif H.",
      role: "Founder of Lifecare Solutions",
      location: "Australia",
      image: "arif_testimonial_img.png"
    },
    {
      text: "I'm a respiratory therapist from India, and through CaresLink, I connected with recruiters who guided me through the licensing process for the US. In just six months, I landed a job in Texas. I still use CaresLink to stay connected with mentors and leaders in my field.",
      name: "Sukanya K.",
      role: "Respiratory Therapist",
      location: "Texas, USA",
      image: "sukanya_testimonial_img.png"
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
    <div>
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
        What the CaresLink Community is Saying?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            {/* Quote */}
            <div className="mb-6">
              <svg className="w-10 h-10 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
            
            {/* Author Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-[#0092ec]">{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
