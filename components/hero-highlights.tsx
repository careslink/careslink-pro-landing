export function HeroHighlights() {
  const highlights = [
    {
      number: "10,000+",
      title: "Global Healthcare Jobs",
      description: "Visa-sponsored opportunities in top hospitals and healthcare institutions across USA, Canada, UK, Australia, and more.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-[#00a8ff] to-[#0092ec]",
      bgGradient: "from-blue-50 to-blue-50"
    },
    {
      number: "200,000+",
      title: "Healthcare Professionals",
      description: "Join a thriving community of nurses, doctors, therapists, and healthcare workers building global careers.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-[#0092ec] to-[#0078c4]",
      bgGradient: "from-blue-50 to-blue-50"
    },
    {
      number: "200+",
      title: "Specialized Training Programs",
      description: "NCLEX preparation, language proficiency, certifications, and continuous education courses designed for healthcare professionals.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: "from-[#0078c4] to-[#006bb3]",
      bgGradient: "from-blue-50 to-blue-50"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden"
        >
          {/* Background Gradient on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon with Healthcare Colors */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {highlight.icon}
            </div>
            
            {/* Number - Medical Blue Gradient */}
            <div className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${highlight.gradient} mb-4`}>
              {highlight.number}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {highlight.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {highlight.description}
            </p>
          </div>
          
          {/* Decorative Medical Cross */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-5">
            <svg viewBox="0 0 100 100" className={`text-gradient-to-br ${highlight.gradient}`}>
              <path fill="currentColor" d="M40 0h20v40h40v20H60v40H40V60H0V40h40V0z"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}
