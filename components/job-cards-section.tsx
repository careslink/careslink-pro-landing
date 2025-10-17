type Job = {
  role: string
  location: string
  count: string
  link: string
  badges?: string[]
}

const jobs: Job[] = [
  {
    role: "Registered Nurse",
    location: "New York, United States",
    count: "500+",
    link: "https://careslink.com/jobs?role=RN&location=USA",
    badges: ["VISA SPONSORED", "NCLEX SPONSORED"]
  },
  {
    role: "CNA",
    location: "Hamilton, ON, Canada",
    count: "300+",
    link: "https://careslink.com/jobs?role=CNA&location=Canada",
    badges: ["VISA SPONSORED"]
  },
  {
    role: "Caregiver",
    location: "Norton Mandeville, UK",
    count: "250+",
    link: "https://careslink.com/jobs?role=Caregiver&location=UK",
    badges: ["VISA SPONSORED"]
  },
]

export function JobCardsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job, index) => (
        <a
          key={index}
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          {/* Location Badge */}
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{job.location}</span>
          </div>

          {/* Job Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0092ec] transition-colors">
            {job.role}
          </h3>
          
          {/* Job Count Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#0078c4] text-sm font-semibold mb-4 w-fit">
            {job.count} Jobs Available
          </div>

          {/* Sponsored Badges */}
          {job.badges && job.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {job.badges.map((badge, badgeIndex) => (
                <span 
                  key={badgeIndex} 
                  className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${
                    badge.includes("VISA") ? "bg-[#0092ec]" : "bg-[#0078c4]"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          
          {/* View All Link */}
          <div className="mt-auto flex items-center gap-2 text-[#0092ec] font-medium group-hover:text-[#0078c4]">
            <span>View All Positions</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  )
}
