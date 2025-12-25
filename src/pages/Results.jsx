import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import SourcesModalContent from '../components/SourcesModalContent'
import useWeddingStore from '../store/weddingStore'
import { calculateTotalBudget, formatCurrency } from '../utils/budgetCalculator'
import { budgetCategories } from '../data/budgetData'

const Results = () => {
  const navigate = useNavigate()
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false)
  const {
    weddingStyle,
    guestCount,
    budgetTier,
    selectedCategories,
    leadInfo,
    reset,
  } = useWeddingStore()

  useEffect(() => {
    if (!weddingStyle) {
      navigate('/style')
    }
  }, [weddingStyle, navigate])

  const budgetResults = useMemo(
    () => calculateTotalBudget(selectedCategories, guestCount, budgetTier, weddingStyle),
    [selectedCategories, guestCount, budgetTier, weddingStyle]
  )

  const handleStartOver = () => {
    reset()
    navigate('/')
  }

  // Calculate venue estimate for comparison
  const venueEstimate = budgetResults.breakdown.venue?.estimate || 0

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Your Personalized Budget
          </h1>
          <p className="text-lg text-text-secondary">
            {leadInfo.name
              ? `Hello ${leadInfo.name}! Here's your Seattle wedding estimate`
              : "Here's your Seattle wedding estimate"}
          </p>
        </motion.div>

        {/* Total Estimate Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 rounded-2xl p-8 md:p-12 mb-8 text-center border border-accent-gold/30 no-page-break"
        >
          <div className="text-sm uppercase tracking-wide text-text-secondary mb-2">
            Estimated Total Cost
          </div>
          <div className="text-5xl md:text-7xl font-display font-bold text-accent-gold mb-4">
            {formatCurrency(budgetResults.totalEstimate)}
          </div>
          <div className="text-lg text-text-secondary">
            Range: {formatCurrency(budgetResults.totalMin)} -{' '}
            {formatCurrency(budgetResults.totalMax)}
          </div>
          <div className="mt-6 text-sm text-text-secondary">
            For {guestCount} guests • {budgetTier} tier
          </div>
        </motion.div>

        {/* 1712 Studios Promotion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-8 border border-accent-gold/30 shadow-xl no-page-break"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">
            Looking for a venue that fits your budget?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            1712 Studios offers transparent pricing starting at{' '}
            <span className="text-accent-gold font-semibold">$3,600</span> for an
            8-hour wedding package—including tables, chairs, sound system, and more.
          </p>

          {venueEstimate > 3600 && (
            <div className="bg-accent-gold/20 rounded-lg p-4 mb-6 border border-accent-gold/30">
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-sm text-gray-300 mb-1">
                    Your Estimated Venue Cost
                  </div>
                  <div className="text-2xl font-bold text-white">{formatCurrency(venueEstimate)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">At 1712 Studios</div>
                  <div className="text-2xl font-bold text-accent-gold">
                    $3,600 - $5,000
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 text-sm text-accent-gold font-semibold">
                Save up to {formatCurrency(venueEstimate - 3600)} with more included
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://weddings.1712studios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-gold text-primary-bg font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Schedule a Free Tour
            </a>
            <a
              href="https://weddings.1712studios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent-gold text-accent-gold font-semibold px-8 py-3 rounded-lg hover:bg-accent-gold/10 transition-colors text-center"
            >
              See What's Included
            </a>
          </div>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-8 shadow-xl border border-white/10 print-section"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              Budget Breakdown
            </h2>
            <button
              onClick={() => setIsSourcesModalOpen(true)}
              className="text-sm text-gray-300 hover:text-accent-gold transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              How did we calculate this?
            </button>
          </div>

          <div className="space-y-4">
            {Object.entries(budgetResults.breakdown).map(([key, values]) => {
              const category = budgetCategories[key]
              const percentage = (values.estimate / budgetResults.totalEstimate) * 100

              return (
                <div key={key} className="border-b border-white/10 pb-4 last:border-b-0 no-page-break">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <h3 className="font-semibold text-white">{category.name}</h3>
                        <p className="text-sm text-gray-300">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-white">
                        {formatCurrency(values.estimate)}
                      </div>
                      <div className="text-sm text-gray-400">
                        {formatCurrency(values.min)} - {formatCurrency(values.max)}
                      </div>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-accent-gold h-2 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 text-right">
                    {percentage.toFixed(1)}% of total
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleStartOver}
            className="border border-accent-gold text-accent-gold font-semibold px-8 py-3 rounded-lg hover:bg-accent-gold/10 transition-colors"
          >
            Start Over
          </button>
          <button
            onClick={() => window.print()}
            className="border border-gray-600 font-semibold px-8 py-3 rounded-lg hover:border-accent-gold transition-colors"
          >
            Print / Save as PDF
          </button>
        </motion.div>

        {/* Sources Modal */}
        <Modal isOpen={isSourcesModalOpen} onClose={() => setIsSourcesModalOpen(false)}>
          <SourcesModalContent />
        </Modal>
      </div>
    </Layout>
  )
}

export default Results
