import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const WhyThisTool = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Why We Built This Tool
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl text-accent-gold font-display mb-8">
              "Because wedding planning shouldn't start with sticker shock."
            </p>

            <div className="bg-primary-bgSecondary rounded-2xl p-8 md:p-10 space-y-6">
              <p className="text-lg">
                When couples walk into 1712 Studios for a venue tour, the first question
                is almost always the same: <em>"What should we actually budget for our wedding?"</em>
              </p>

              <p className="text-lg">
                The truth is, most Seattle couples underestimate wedding costs by 30-50%.
                They start planning with Pinterest dreams and end up stressed when
                reality hits. We've seen it too many times.
              </p>

              <p className="text-lg">
                So we built this tool—not to sell you anything, but to give you a real,
                honest starting point.
              </p>

              <div className="my-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-accent-gold">
                  Here's what makes this different:
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold text-2xl">✓</span>
                    <div>
                      <strong>Seattle-specific:</strong> National averages don't apply
                      here. Our numbers reflect what Seattle vendors actually charge.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold text-2xl">✓</span>
                    <div>
                      <strong>No hidden agenda:</strong> We're a venue, not a wedding
                      planning platform. We don't make money recommending vendors.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold text-2xl">✓</span>
                    <div>
                      <strong>Real data:</strong> We surveyed local vendors and
                      cross-referenced industry reports (see{' '}
                      <Link to="/our-sources" className="text-accent-gold hover:underline">
                        Our Sources
                      </Link>
                      ).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold text-2xl">✓</span>
                    <div>
                      <strong>Actually free:</strong> No paywalls, no "premium
                      estimates," no bait-and-switch.
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-lg">
                Yes, we'd love for you to consider 1712 for your venue. But even if you
                don't, we hope this tool helps you plan a wedding you can actually
                afford—and enjoy.
              </p>

              <p className="text-lg font-display text-accent-gold">
                — The 1712 Studios Team
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/"
                className="inline-block bg-accent-gold text-primary-bg font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Your Estimate
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default WhyThisTool
