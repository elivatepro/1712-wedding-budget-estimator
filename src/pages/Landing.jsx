import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      {/* Hero Section */}
      <div className="px-4 py-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight">
            What Will Your Seattle Wedding{' '}
            <span className="text-accent-gold">Really Cost?</span>
          </h1>

          <p className="text-lg md:text-2xl text-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto">
            Get a personalized estimate in under 2 minutes
          </p>

          <motion.button
            onClick={() => navigate('/style')}
            className="bg-accent-gold text-primary-bg px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:opacity-90 transition-opacity mb-5 md:mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Planning
          </motion.button>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No signup required to start
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Seattle-specific pricing
            </div>
          </div>
        </motion.div>
      </div>

      {/* Continuous sliding image showcase - Full Width */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-3 md:gap-4 animate-scroll"
        >
            {/* First set of images */}
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Dining Hall Interior.jpg"
                alt="Wedding venue"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/White Pink Floral Wedding Decoration.jpg"
                alt="Beach wedding"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Pink White Roses Centerpiece.jpg"
                alt="Wedding flowers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Various Desserts Free Stock Photo.jpg"
                alt="Wedding desserts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Man And Woman Kissing.jpg"
                alt="Wedding couple"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Newlyweds Bouquet.jpg"
                alt="Newlyweds"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Charcuterie Board Photo.jpg"
                alt="Wedding catering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Drinking Glass Lot.jpg"
                alt="Wedding drinks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/woman holding flower.jpg"
                alt="Wedding florals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Cold Table Photo.jpg"
                alt="Reception setup"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Duplicate set for seamless infinite loop */}
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Dining Hall Interior.jpg"
                alt="Wedding venue"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/White Pink Floral Wedding Decoration.jpg"
                alt="Beach wedding"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Pink White Roses Centerpiece.jpg"
                alt="Wedding flowers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Various Desserts Free Stock Photo.jpg"
                alt="Wedding desserts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Man And Woman Kissing.jpg"
                alt="Wedding couple"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Newlyweds Bouquet.jpg"
                alt="Newlyweds"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Charcuterie Board Photo.jpg"
                alt="Wedding catering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Drinking Glass Lot.jpg"
                alt="Wedding drinks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/woman holding flower.jpg"
                alt="Wedding florals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-80 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/images/Cold Table Photo.jpg"
                alt="Reception setup"
                className="w-full h-full object-cover"
              />
            </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Landing
