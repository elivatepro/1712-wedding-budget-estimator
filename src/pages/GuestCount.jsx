import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import useWeddingStore from '../store/weddingStore'
import { weddingStyles } from '../data/budgetData'

const GuestCount = () => {
  const navigate = useNavigate()
  const { guestCount, setGuestCount, setCurrentStep, weddingStyle } = useWeddingStore()
  const [localCount, setLocalCount] = useState(guestCount)

  const suggestedRange = weddingStyle
    ? weddingStyles[weddingStyle].suggestedGuestRange
    : { min: 50, max: 150 }

  useEffect(() => {
    if (!weddingStyle) {
      navigate('/style')
    }
  }, [weddingStyle, navigate])

  const handleNext = () => {
    setGuestCount(localCount)
    setCurrentStep(2)
    navigate('/budget-tier')
  }

  const handleBack = () => {
    navigate('/style')
  }

  return (
    <Layout showProgress={true} currentStep={2} totalSteps={5}>
      <div className="max-w-3xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How Many Guests?
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The number of guests significantly impacts your overall budget, especially for
            catering, rentals, and favors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10"
        >
          <div className="text-center mb-8">
            <div className="text-7xl md:text-8xl font-display font-bold text-accent-gold mb-2">
              {localCount}
            </div>
            <div className="text-gray-300">guests</div>
          </div>

          {/* Slider */}
          <div className="mb-8">
            <input
              type="range"
              min="2"
              max="300"
              value={localCount}
              onChange={(e) => setLocalCount(parseInt(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #d4a574 0%, #d4a574 ${
                  ((localCount - 2) / 298) * 100
                }%, #4a4a4a ${((localCount - 2) / 298) * 100}%, #4a4a4a 100%)`,
              }}
            />
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>2</span>
              <span>300</span>
            </div>
          </div>

          {/* Direct input */}
          <div className="mb-8">
            <label className="block text-sm text-gray-300 mb-2">
              Or enter a specific number:
            </label>
            <input
              type="number"
              min="2"
              max="300"
              value={localCount}
              onChange={(e) => {
                const value = parseInt(e.target.value) || 2
                setLocalCount(Math.min(300, Math.max(2, value)))
              }}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-center text-2xl font-semibold text-white focus:outline-none focus:border-accent-gold focus:bg-white/15 transition-colors"
            />
          </div>

          {/* Suggested range */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
            <p className="text-sm text-gray-300 mb-1">
              Suggested range for your style:
            </p>
            <p className="text-lg font-semibold text-white">
              {suggestedRange.min} - {suggestedRange.max} guests
            </p>
          </div>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-between mt-8"
        >
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-lg border border-gray-600 hover:border-accent-gold transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-lg bg-accent-gold text-primary-bg font-semibold hover:opacity-90 transition-opacity"
          >
            Continue →
          </button>
        </motion.div>
      </div>
    </Layout>
  )
}

export default GuestCount
