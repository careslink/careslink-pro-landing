"use client"

import { motion } from "framer-motion"

export function CredentialsSection() {
  const features = [
    {
      title: "All-in-One Storage",
      description: "Safely store your certificates, licenses, and credentials in one secure place"
    },
    {
      title: "Credential Verification",
      description: "Ensure your documents are verified and trusted by employers worldwide with AI-driven verification."
    },
    {
      title: "Expiration Alerts",
      description: "Get timely reminders for renewals so you're always compliant and job-ready"
    },
    {
      title: "Fast Sharing",
      description: "Send verified credentials to employers, recruiters, and mentors in seconds"
    }
  ]

  const featureVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
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
        Keep Your Credentials Ready for Every Opportunity
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          CaresLink makes it easy to stay organized and prepared for your next job opportunity.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        {/* Image Side */}
        <motion.div 
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="cred_section.svg"
            alt="Credentials"
            className="w-full rounded-xl"
          />
        </motion.div>

        {/* Features Side */}
        <div className="order-1 lg:order-2 space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={featureVariants}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why It Matters Banner */}
      <motion.div 
        className="bg-[#0092ec] rounded-xl p-6 md:p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-semibold text-white">💡 Why It Matters</span>
          </div>
          <p className="text-base md:text-lg text-white leading-relaxed">
            When your credentials are <span className="font-semibold">organized and verified</span>, you can apply for jobs faster, avoid delays, and stay ahead in the global healthcare job market
          </p>
        </div>
      </motion.div>
    </div>
  )
}
