import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import useWeddingStore from '../store/weddingStore'

const LeadCapture = () => {
  const navigate = useNavigate()
  const { leadInfo, setLeadInfo, setCurrentStep, weddingStyle } = useWeddingStore()
  const [formData, setFormData] = useState(leadInfo)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!weddingStyle) {
      navigate('/style')
    }
  }, [weddingStyle, navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    if (!formData.weddingDate) {
      setError('Please select your wedding date')
      return
    }

    setIsSubmitting(true)

    // Store lead info in state
    setLeadInfo(formData)

    // Get webhook URL from environment variable
    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || ''

    if (webhookUrl) {
      try {
        // Send data to webhook
        const store = useWeddingStore.getState()
        const webhookData = {
          name: formData.name,
          email: formData.email,
          weddingDate: formData.weddingDate,
          weddingStyle: store.weddingStyle,
          guestCount: store.guestCount,
          budgetTier: store.budgetTier,
          selectedCategories: store.selectedCategories,
          timestamp: new Date().toISOString(),
        }

        console.log('Sending webhook data:', webhookData)

        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
          mode: 'no-cors', // Zapier webhooks don't return CORS headers
        })

        console.log('Webhook sent successfully')
      } catch (webhookError) {
        // Log webhook error but don't block the user flow
        console.error('Webhook error (non-blocking):', webhookError)
      }
    }

    // Continue to results page regardless of webhook status
    setCurrentStep(5)
    navigate('/results')
  }

  const handleBack = () => {
    navigate('/categories')
  }

  return (
    <Layout showProgress={true} currentStep={5} totalSteps={5}>
      <div className="max-w-2xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            className="text-6xl mb-4"
            initial={{
              scale: 0,
              rotate: -180,
              y: -50
            }}
            animate={{
              scale: [0, 1.3, 0.9, 1.1, 1],
              rotate: [-180, 20, -10, 5, 0],
              y: [-50, 0, 0, 0, 0]
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
              times: [0, 0.4, 0.6, 0.8, 1]
            }}
          >
            🎉
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Your Estimate is Ready!
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Enter your details and we'll also send you our{' '}
            <span className="text-accent-gold font-semibold">
              Ultimate Seattle Wedding Checklist
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-gold focus:bg-white/15 transition-colors"
                placeholder="Your full name"
              />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-gold focus:bg-white/15 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Wedding Date field */}
            <div>
              <label htmlFor="weddingDate" className="block text-sm font-medium mb-2 text-gray-300">
                Wedding Date *
              </label>
              <input
                type="date"
                id="weddingDate"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:bg-white/15 transition-colors"
              />
            </div>

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg px-4 py-3 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Privacy note */}
            <div className="text-sm text-text-secondary text-center py-2">
              🔒 We respect your privacy. No spam, ever.
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-gold text-primary-bg font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'See My Estimate'}
            </button>

            {/* Skip button */}
            <button
              type="button"
              onClick={() => {
                setCurrentStep(5)
                navigate('/results')
              }}
              className="w-full mt-3 text-gray-400 hover:text-white transition-colors text-sm py-2"
            >
              Skip for now, just show me the estimate →
            </button>
          </form>

          {/* Why is this free link */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/why-this-tool')}
              className="text-sm text-gray-400 hover:text-accent-gold transition-colors underline"
            >
              Why is this free?
            </button>
          </div>
        </motion.div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-start mt-8"
        >
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-lg border border-gray-600 hover:border-accent-gold transition-colors"
          >
            ← Back
          </button>
        </motion.div>
      </div>
    </Layout>
  )
}

export default LeadCapture
