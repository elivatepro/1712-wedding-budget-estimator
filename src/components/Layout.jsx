import React from 'react'
import { Link } from 'react-router-dom'
import useWeddingStore from '../store/weddingStore'
import { weddingStyles } from '../data/budgetData'

const Layout = ({ children, showProgress = false, currentStep = 0, totalSteps = 5 }) => {
  const { weddingStyle } = useWeddingStore()
  const theme = weddingStyle ? weddingStyles[weddingStyle]?.theme : null

  const dynamicStyle = theme
    ? {
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }
    : {}

  // Determine if background is light (use black logo) or dark (use white logo)
  const isLightBackground = theme && (
    weddingStyle === 'intimate' ||
    weddingStyle === 'classic' ||
    weddingStyle === 'bohemian' ||
    weddingStyle === 'modern'
  )

  const logoSrc = isLightBackground
    ? "/images/1712 Logo black.png"
    : "/images/1712 Logo white.png"

  return (
    <div className="min-h-screen transition-theme" style={dynamicStyle}>
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logoSrc}
              alt="1712 Studios"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/why-this-tool"
              className="text-sm hover:opacity-70 transition-opacity"
              style={theme ? { color: theme.textColor } : {}}
            >
              Why This Tool
            </Link>
            <Link
              to="/our-sources"
              className="text-sm hover:opacity-70 transition-opacity"
              style={theme ? { color: theme.textColor } : {}}
            >
              Our Sources
            </Link>
          </nav>
        </div>
      </header>

      {/* Progress Bar */}
      {showProgress && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-70">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm opacity-70">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{
                width: `${(currentStep / totalSteps) * 100}%`,
                backgroundColor: theme?.accentColor || '#d4a574',
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8 mt-16"
        style={theme ? { borderColor: theme.accentColor + '30' } : { borderColor: '#333' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">About This Tool</h3>
              <p className="text-sm opacity-70">
                Free Seattle wedding budget calculator by 1712 Studios
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <Link to="/why-this-tool" className="hover:opacity-70 transition-opacity">
                    Why We Created This
                  </Link>
                </li>
                <li>
                  <Link to="/our-sources" className="hover:opacity-70 transition-opacity">
                    Our Sources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm opacity-70">
                <a
                  href="https://weddings.1712studios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  weddings.1712studios.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm opacity-70"
            style={theme ? { borderColor: theme.accentColor + '30' } : { borderColor: '#333' }}>
            <p>&copy; {new Date().getFullYear()} 1712 Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
