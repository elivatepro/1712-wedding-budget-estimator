import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import useWeddingStore from '../store/weddingStore'
import { budgetCategories } from '../data/budgetData'

const CategorySelection = () => {
  const navigate = useNavigate()
  const { selectedCategories, toggleCategory, setCurrentStep, weddingStyle } = useWeddingStore()

  useEffect(() => {
    if (!weddingStyle) {
      navigate('/style')
    }
  }, [weddingStyle, navigate])

  const handleNext = () => {
    setCurrentStep(4)
    navigate('/lead-capture')
  }

  const handleBack = () => {
    navigate('/budget-tier')
  }

  const selectedCount = Object.values(selectedCategories).filter(Boolean).length

  return (
    <Layout showProgress={true} currentStep={4} totalSteps={5}>
      <div className="max-w-6xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Select Your Categories
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-4">
            All categories are selected by default. Toggle off any you plan to skip or
            already have covered.
          </p>
          <p className="text-sm text-accent-gold">
            {selectedCount} of {Object.keys(budgetCategories).length} categories selected
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Object.entries(budgetCategories).map(([key, category], index) => {
            const isSelected = selectedCategories[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onClick={() => toggleCategory(key)}
                className={`cursor-pointer rounded-xl p-5 border-2 transition-all backdrop-blur-md ${
                  isSelected
                    ? 'border-accent-gold bg-black/95'
                    : 'border-white/20 bg-black/70 opacity-60 hover:opacity-90 hover:bg-black/80'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1 text-white">{category.name}</h3>
                    <p className="text-sm text-white line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-accent-gold border-accent-gold'
                          : 'border-white/40'
                      }`}
                    >
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {selectedCount === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-accent-gold mb-4"
          >
            ⚠ Please select at least one category to continue
          </motion.div>
        )}

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
            disabled={selectedCount === 0}
            className={`px-8 py-3 rounded-lg font-semibold transition-opacity ${
              selectedCount === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-accent-gold text-primary-bg hover:opacity-90'
            }`}
          >
            Continue →
          </button>
        </motion.div>
      </div>
    </Layout>
  )
}

export default CategorySelection
