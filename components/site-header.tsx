"use client"

import { useState, useEffect } from "react"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])
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
          <a className="text-sm font-medium text-gray-700 hover:text-[#0092ec] transition-colors" href="https://careslink.com/career-education" target="_blank">
            Learning
          </a>
          <a className="text-sm font-medium text-gray-700 hover:text-[#0092ec] transition-colors" href="https://careslink.com/career-roadmaps" target="_blank">
            GoGlobal
          </a>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Icon - Visible on all screens */}
          <a 
            href="https://careslink.com/search-jobs" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Search Jobs" 
            className="inline-flex h-9 w-9 rounded-lg border border-gray-200 bg-white/50 hover:bg-white hover:border-[#0092ec]/30 items-center justify-center transition-all duration-200"
          >
            <span className="sr-only">Search Jobs</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-500">
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <path d="m21 21-4.3-4.3" strokeWidth="2" />
            </svg>
          </a>

          {/* Sign In Button - Hidden on mobile */}
          <a
            className="hidden sm:inline-flex items-center justify-center rounded-lg px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold bg-[#0092ec] text-white hover:bg-[#0078c4] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            href="https://careslink.com/account-setup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign In
          </a>

          {/* Menu Icon - Visible only on mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden inline-flex h-9 w-9 rounded-lg border border-gray-200 bg-white/50 hover:bg-white hover:border-[#0092ec]/30 items-center justify-center transition-all duration-200"
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile Menu Content */}
            <div className="h-screen flex flex-col justify-center px-8 bg-gradient-to-b from-blue-100 via-blue-50 to-white">
              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col items-center justify-center space-y-10">
                <a 
                  href="https://careslink.com/jobs" 
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-gray-900 hover:text-[#0092ec] transition-colors block"
                >
                  Jobs
                </a>
                  <a 
                    href="https://careslink.com/career-education" 
                    target="_blank"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-gray-900 hover:text-[#0092ec] transition-colors block"
                  >
                    Learning
                  </a>
                  <a 
                    href="https://careslink.com/career-roadmaps" 
                    target="_blank"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-gray-900 hover:text-[#0092ec] transition-colors block"
                  >
                    GoGlobal
                </a>
              </nav>

              {/* Sign In Button */}
              <div className="pb-8 mt-auto">
                <a
                  href="https://careslink.com/account-setup"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center rounded-xl px-8 py-4 text-lg font-bold bg-[#0092ec] text-white hover:bg-[#0078c4] transition-colors w-full shadow-lg"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
