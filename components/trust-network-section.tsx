"use client"

import { useState } from "react"

export function TrustNetworkSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      title: "10,000+ Employers & Institutions Across 7 Countries",
      description: "Connect with a global network of healthcare leaders and employers to expand your professional opportunities.",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed488bb9485585949d8df6_Faq-image-1.png"
    },
    {
      title: "5000+ Professionals Successfully Placed Globally",
      description: "We help you navigate licensure, relocation, and connect you with trusted resources for visa sponsorship and career transitions.",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed488b74734780873821d5_Faq-image-2.png"
    },
    {
      title: "AI-Powered Career Building Engine",
      description: "Our AI Job Matching and Recommendation Engine connects you with roles tailored to your skills, ensuring 91% of members find opportunities within 1 month.",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed488aade745d3ec305d68_Faq-image-3.png"
    },
    {
      title: "98% Satisfaction Rate Among Healthcare Professionals",
      description: "Healthcare professionals rely on CaresLink for expert guidance and meaningful networking opportunities that simplify career progression.",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed488ad35dfdb9c7f69b43_Faq-image-4.png"
    },
    {
      title: "30% Faster Licensing and Relocation",
      description: "We simplify processes and connect you to essential resources, helping you relocate while growing your professional network",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed488ac3ffa925f7c68998_Faq-image-5.png"
    },
    {
      title: "100+ Courses for Global Competency",
      description: "Gain certifications and skills to meet international healthcare standards while enhancing your professional profile.",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed488ab9485585949d8d9f_Faq-image-6.png"
    },
    {
      title: "1:1 Consultations With Experts",
      description: "Get insights from leaders and entrepreneurs to overcome challenges and kickstart your healthcare ventures",
      image: "https://cdn.prod.website-files.com/67aca5948cce33c6fba69ac2/67ed488b5f3cfb51e1438679_Faq-image-7.png"
    }
  ]

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
        Why 200,000+ Healthcare Professionals Trust the CaresLink Network
        </h2>
        <a
          href="https://careslink.com/account-setup"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#0092ec] rounded-lg shadow-lg hover:bg-[#0078c4] transition-colors duration-300"
        >
          Join the CaresLink Network
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Desktop View - Accordion */}
        <div className="hidden md:block space-y-2">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                activeIndex === index
                  ? 'border-blue-300 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900 pr-4">
                  {faq.title}
                </h3>
                <svg
                  className={`w-5 h-5 text-[#0092ec] flex-shrink-0 transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeIndex === index && (
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {faq.description}
                </p>
              )}
            </button>
          ))}
        </div>

        {/* Desktop View - Image */}
        <div className="hidden md:block sticky top-4">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <img
              src={faqs[activeIndex].image}
              alt={faqs[activeIndex].title}
              className="w-full"
            />
          </div>
        </div>

        {/* Mobile View - Full Cards */}
        <div className="md:hidden space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {faq.description}
              </p>
              <img
                src={faq.image}
                alt={faq.title}
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
