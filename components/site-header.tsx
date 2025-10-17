export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-br from-blue-100/95 via-blue-50/95 to-blue-100/95 backdrop-blur-md supports-[backdrop-filter]:from-blue-100/90 via-blue-50/90 to-blue-100/90 border-b border-blue-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="/CaresLink_full_logo.png" 
            alt="CaresLink" 
            className="h-8 sm:h-10 w-auto"
          />
        </a>
        
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-gray-700 hover:text-[#0092ec] transition-colors" href="https://careslink.com/jobs" target="_blank">
            Jobs
          </a>
          <a className="text-sm font-medium text-gray-700 hover:text-[#0092ec] transition-colors" href="https://careslink.com/learning" target="_blank">
            Learning
          </a>
          <a className="text-sm font-medium text-gray-700 hover:text-[#0092ec] transition-colors" href="https://careslink.com/goglobal" target="_blank">
            GoGlobal
          </a>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <a 
            href="https://careslink.com/search-jobs" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Search Jobs" 
            className="hidden sm:inline-flex h-9 w-9 rounded-lg border border-gray-200 bg-white/50 hover:bg-white hover:border-[#0092ec]/30 items-center justify-center transition-all duration-200"
          >
            <span className="sr-only">Search Jobs</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-500">
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <path d="m21 21-4.3-4.3" strokeWidth="2" />
            </svg>
          </a>
          <a
            className="inline-flex items-center justify-center rounded-lg px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold bg-[#0092ec] text-white hover:bg-[#0078c4] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            href="https://careslink.com/account-setup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  )
}
