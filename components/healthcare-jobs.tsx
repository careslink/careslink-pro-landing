export function HealthcareJobs() {
  const jobs = [
    {
      title: "Registered Nurses",
      link: "https://careslink.com/jobs?role=RN",
      count: "500+"
    },
    {
      title: "CNA",
      link: "https://careslink.com/jobs?role=CNA",
      count: "500+"
    },
    {
      title: "HHA",
      link: "https://careslink.com/jobs?role=HHA",
      count: "500+"
    },
    {
      title: "Staff Nurses",
      link: "https://careslink.com/jobs?role=Staff+Nurses",
      count: "500+"
    },
    {
      title: "Caregivers",
      link: "https://careslink.com/jobs?role=Caregiver",
      count: "500+"
    }
  ]

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
          Top Global Health Care Jobs
        </h2>
        <p className="text-gray-600">
          Browse opportunities across specialized healthcare roles
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {jobs.map((job, index) => (
          <a
            key={index}
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {job.title}
            </h3>
            
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#0078c4] text-sm font-medium mb-3">
              {job.count} Jobs
            </div>
            
            <div className="flex items-center justify-center gap-1 text-sm text-[#0092ec] group-hover:text-[#0078c4]">
              <span>View All</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
