"use client"

import { motion } from "framer-motion"

type Agent = {
  title: string
  description: string
  category: string
  icon: string
  gradient: string
  stats: { value: string; label: string; icon: string }[]
  features: string[]
}

export function AIAgentsSection() {
  const agents: Agent[] = [
    {
      title: "Visa Interview Prep Agent",
      description: "Ace your visa interview with AI-driven guidance and real-time feedback.",
      category: "Interview Prep",
      icon: "🛂",
      gradient: "from-[#0092ec] to-[#0078c4]",
      stats: [
        { value: "1,500+", label: "Mock interviews monthly", icon: "📊" },
        { value: "80%", label: "Success rate boost", icon: "🎯" }
      ],
      features: ["Real-time feedback", "Country-specific prep", "Confidence building"]
    },
    {
      title: "NCLEX Prep Agent",
      description: "Master the NCLEX with AI-powered adaptive learning.",
      category: "Exam Prep",
      icon: "📝",
      gradient: "from-[#00a8ff] to-[#0092ec]",
      stats: [
        { value: "5,000+", label: "Candidates trained monthly", icon: "👥" },
        { value: "40%", label: "Faster preparation", icon: "⚡" }
      ],
      features: ["Adaptive learning", "Practice questions", "Performance tracking"]
    },
    {
      title: "English Prep Agent",
      description: "Sharpen your language skills for IELTS, OET, and PTE.",
      category: "Language Skills",
      icon: "🗣️",
      gradient: "from-[#0078c4] to-[#005a94]",
      stats: [
        { value: "90%", label: "Fluency gains in 4 weeks", icon: "📈" },
        { value: "3,000+", label: "Practice tests monthly", icon: "✍️" }
      ],
      features: ["Speaking practice", "Writing feedback", "Vocabulary building"]
    },
    {
      title: "Skill-Specific Interview Agent",
      description: "Perfect your answers for ICU, Emergency, Auxiliary Nursing, and more.",
      category: "Interview Prep",
      icon: "🏥",
      gradient: "from-[#00bfff] to-[#0092ec]",
      stats: [
        { value: "2,000+", label: "Mock interviews monthly", icon: "🎤" },
        { value: "75%", label: "Faster response growth", icon: "🚀" }
      ],
      features: ["Role-specific scenarios", "Expert feedback", "Industry insights"]
    },
    {
      title: "HR Interview Agent",
      description: "Prepare for HR rounds with AI-driven role-play sessions.",
      category: "Interview Prep",
      icon: "💼",
      gradient: "from-[#0092ec] to-[#006bb3]",
      stats: [
        { value: "1,500+", label: "HR interviews simulated", icon: "🎭" },
        { value: "60%", label: "Rejection rate reduction", icon: "✅" }
      ],
      features: ["Behavioral questions", "Salary negotiation", "Culture fit prep"]
    },
    {
      title: "AI Job Application Agent",
      description: "Let AI apply to jobs on your behalf—smart, fast, and tailored.",
      category: "Job Search",
      icon: "🤖",
      gradient: "from-[#00a8ff] to-[#0078c4]",
      stats: [
        { value: "10,000+", label: "Applications sent monthly", icon: "📤" },
        { value: "2x", label: "Interview callbacks", icon: "📞" }
      ],
      features: ["Auto-apply", "Resume optimization", "Job matching"]
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
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
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
          <span className="text-sm font-semibold text-[#0092ec]">🤖 AI-Powered Intelligence</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        From Exams to Employment -AI Has You Covered
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
        From visa interviews to job applications and exam prep, our Al agents are designed to help healthcare professionals succeed-faster, smarter, and with confidence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Gradient Header */}
            <div className={`relative bg-gradient-to-br ${agent.gradient} p-6 text-white`}>
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{agent.icon}</div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                  {agent.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 min-h-[4rem] flex items-center">
                {agent.title}
              </h3>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-gray-600 leading-relaxed mb-6">
                {agent.description}
              </p>

              {/* Features List */}
              <div className="mb-6 space-y-2">
                {agent.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#0092ec] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 mt-auto">
                {agent.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#0092ec] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Gradient Border Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br ${agent.gradient} -z-10`} style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
