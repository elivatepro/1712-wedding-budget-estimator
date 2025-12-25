import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import useWeddingStore from '../store/weddingStore'
import { weddingStyles } from '../data/budgetData'

const StyleSelection = () => {
  const navigate = useNavigate()
  const { setWeddingStyle, setCurrentStep } = useWeddingStore()

  const handleStyleSelect = (styleKey) => {
    setWeddingStyle(styleKey)
    setCurrentStep(1)
    navigate('/guest-count')
  }

  return (
    <Layout showProgress={true} currentStep={1} totalSteps={5}>
      <div className="max-w-6xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Choose Your Wedding Style
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Select the style that resonates with your vision. This will personalize your
            experience and help us provide more accurate estimates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(weddingStyles).map(([key, style], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleStyleSelect(key)}
              className="cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4 shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {style.name}
                  </h3>
                  <p className="text-sm opacity-90 mb-3">{style.description}</p>
                  <p className="text-xs opacity-75">
                    Typical: {style.suggestedGuestRange.min}-
                    {style.suggestedGuestRange.max} guests
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => navigate('/')}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            ← Back to Home
          </button>
        </motion.div>
      </div>
    </Layout>
  )
}

export default StyleSelection
