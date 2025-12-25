import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import useWeddingStore from '../store/weddingStore'
import { budgetTiers } from '../data/budgetData'

const BudgetTier = () => {
  const navigate = useNavigate()
  const { budgetTier, setBudgetTier, setCurrentStep, weddingStyle } = useWeddingStore()
  const [selectedTier, setSelectedTier] = useState(budgetTier)

  useEffect(() => {
    if (!weddingStyle) {
      navigate('/style')
    }
  }, [weddingStyle, navigate])

  const handleNext = () => {
    setBudgetTier(selectedTier)
    setCurrentStep(3)
    navigate('/categories')
  }

  const handleBack = () => {
    navigate('/guest-count')
  }

  const tierExamples = {
    essential: [
      'Budget-friendly venue options',
      'Buffet-style catering',
      'Digital invitations',
      'DJ over live band',
      'Seasonal flowers',
    ],
    balanced: [
      'Mid-range venue with amenities',
      'Plated dinner service',
      'Professional photography (6-8 hours)',
      'Custom floral arrangements',
      'Quality rentals and decor',
    ],
    premium: [
      'Luxury venue with all-inclusive packages',
      'Gourmet plated dinner with premium bar',
      'Full-day photography & videography',
      'Designer florals and installations',
      'High-end transportation and extras',
    ],
  }

  return (
    <Layout showProgress={true} currentStep={3} totalSteps={5}>
      <div className="max-w-5xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Select Your Budget Tier
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the spending approach that aligns with your priorities and financial
            comfort level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(budgetTiers).map(([key, tier], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedTier(key)}
              className={`cursor-pointer rounded-xl p-6 border-2 transition-all backdrop-blur-md ${
                selectedTier === key
                  ? 'border-accent-gold bg-black/95 shadow-lg'
                  : 'border-white/20 bg-black/80 hover:border-white/40 hover:bg-black/90'
              }`}
            >
              <div className="text-center mb-4">
                <h3 className="font-display text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <p className="text-sm text-gray-300">{tier.description}</p>
              </div>

              <div className="mb-4 text-center">
                <div className="text-4xl font-bold text-accent-gold">
                  {tier.multiplier}x
                </div>
                <div className="text-xs text-gray-400 mt-1">multiplier</div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  What to Expect:
                </p>
                {tierExamples[key].map((example, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-4 h-4 text-accent-gold mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white">{example}</span>
                  </div>
                ))}
              </div>

              {selectedTier === key && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 pt-4 border-t border-accent-gold/30 text-center"
                >
                  <span className="text-accent-gold font-semibold text-sm">
                    ✓ Selected
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

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

export default BudgetTier
