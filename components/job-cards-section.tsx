type Job = {
  company: string
  location: string
  role: string
  description: string
  salary: string
  contractType: string
  shift: string
  benefits: string[]
  link: string
  badges?: string[]
  logo?: string
}

const jobs: Job[] = [
  {
    company: "Saratoga Medical",
    location: "New York, United States",
    role: "Registered Nurse",
    description: "The Registered Nurse will deliver round-the-clock in-home care to clients with disabilities and aged care needs—monitoring health, administering medication, coordinating with professionals, and assisting activities—to ensure dignified, compassionate care.",
    salary: "$75,000- $100,000/year",
    contractType: "Full-time",
    shift: "Choose your own hours",
    benefits: ["20 Days Annual PTO", "Life Insurance", "Retirement Plan", "401K Match"],
    link: "https://careslink.com/jobs?role=RN&location=USA",
    badges: ["VISA SPONSORED", "NCLEX SPONSORED"],
    logo: "/saratoga.png"
  },
  {
    company: "Focused Post Acute Care Partners",
    location: "Hamilton, ON, Canada",
    role: "CNA",
    description: "Assist residents with daily living activities to support dignity, safety, and independence. Must have valid Nurse Aide certification, clear English communication, and ability to lift up to 50 lbs. Experience with electronic medical records is a plus.",
    salary: "$25(CAD)/Hour",
    contractType: "Full-time",
    shift: "As Assigned",
    benefits: ["Health Plans", "Dental", "Generous PTO", "Daily Pay Available"],
    link: "https://careslink.com/jobs?role=CNA&location=Canada",
    badges: ["VISA SPONSORED", "CNA SPONSORED"],
    logo: "/focused_post_acute_care_partners.png"
  },
  {
    company: "ComForHealth",
    location: "Norton Mandeville, England, United Kingdom",
    role: "Caregiver",
    description: "You will support clients with personal care, meals, mobility, and daily tasks—helping them stay safe and independent at home. Bring a heart for service, a high school diploma or GED, and reliable transport. Compassion and reliability matter most.",
    salary: "£22,000 /year",
    contractType: "Full-time",
    shift: "Choose your own hours",
    benefits: ["401K Match", "Flexible Schedule", "Training Programs", "Supported in the field"],
    link: "https://careslink.com/jobs?role=Caregiver&location=UK",
    badges: ["VISA SPONSORED"],
    logo: "/com_for_health.png"
  },
]

export function JobCardsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job, index) => (
        <div key={index} className="flex flex-col">
          <div className="group bg-white rounded-xl border border-gray-200 hover:border-[#0092ec] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
          {/* Header with Logo and Sponsored Badge */}
          <div className="p-6 pb-4 border-b border-gray-100">
            <div className="flex items-start justify-between mb-4">
              {/* Logo */}
              <div className="flex items-center">
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={job.logo} 
                    alt={job.company}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Sponsored Badges */}
              <div className="flex gap-3">
                {job.badges?.map((badge, badgeIndex) => (
                  <div key={badgeIndex} className="relative">
                    <img 
                      src={`/${badge.toLowerCase().replace(' ', '_')}.png`}
                      alt={badge}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Company and Location */}
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {job.company}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {job.location}
            </p>
            
            {/* Job Title */}
            <h4 className="text-3xl font-bold text-gray-900 mb-4">
              {job.role}
            </h4>
            
            {/* Job Description */}
            <p className="text-xs text-gray-600 leading-relaxed">
              {job.description}
            </p>
          </div>

            {/* Job Details - Two Column Layout */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="grid grid-cols-2 gap-4 mt-auto">
              {/* Left Column - Blue Background with White Text */}
              <div className="bg-[#0078c4] rounded-lg p-4 space-y-4">
                {/* Salary */}
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wide mb-1">
                    Salary
                  </p>
                  <p className="text-sm font-bold text-white">
                    {job.salary}
                  </p>
                </div>

                {/* Contract Type */}
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wide mb-1">
                    Contract Type
                  </p>
                  <p className="text-sm font-bold text-white">
                    {job.contractType}
                  </p>
                </div>

                {/* Shift & Schedule */}
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wide mb-1">
                    Shift & Schedule
                  </p>
                  <p className="text-sm font-bold text-white">
                    {job.shift}
                  </p>
                </div>
              </div>

              {/* Right Column - Light Green Background with Dark Green Text */}
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-3">
                  Benefits
                </p>
                <div className="space-y-2">
                  {job.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-green-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
          
          {/* CTA Button for each card */}
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-4 bg-[#0092ec] text-white font-semibold rounded-lg hover:bg-[#0078c4] transition-all duration-300 text-center"
          >
            View More Jobs in {job.location.split(',')[2]?.trim() || job.location.split(',')[1]?.trim()}
          </a>
        </div>
      ))}
    </div>
  )
}
