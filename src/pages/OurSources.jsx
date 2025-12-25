import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const OurSources = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our Sources & Methodology
          </h1>

          <p className="text-2xl text-accent-gold font-display mb-8">
            "Real numbers from real sources."
          </p>

          <div className="space-y-8">
            {/* Data Sources */}
            <div className="bg-primary-bgSecondary rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-display font-bold mb-6 text-accent-gold">
                Data Sources
              </h2>
              <p className="text-lg mb-6">
                We didn't make these numbers up. Here's exactly how we built this
                calculator:
              </p>

              <p className="text-lg mb-4">
                Our Seattle wedding cost estimates are compiled from:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">•</span>
                  <div>
                    <strong>The Knot Real Weddings Study (2023-2024)</strong> — Annual
                    survey of 12,000+ couples, filtered for Seattle/Puget Sound region
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">•</span>
                  <div>
                    <strong>WeddingWire Cost Guide</strong> — Crowdsourced pricing data
                    from verified vendor profiles
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">•</span>
                  <div>
                    <strong>Thumbtack & Bark Local Pricing</strong> — Real quotes from
                    Seattle-area vendors
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">•</span>
                  <div>
                    <strong>1712 Studios Vendor Network</strong> — Direct pricing from
                    our preferred photographers, caterers, florists, and DJs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">•</span>
                  <div>
                    <strong>Local Vendor Website Research</strong> — We reviewed 50+
                    Seattle vendor sites for published pricing
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold text-xl">•</span>
                  <div>
                    <strong>Couples We've Worked With</strong> — Anonymous budget data
                    from 100+ weddings hosted at 1712
                  </div>
                </li>
              </ul>
            </div>

            {/* Methodology */}
            <div className="bg-primary-bgSecondary rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-display font-bold mb-6 text-accent-gold">
                Methodology
              </h2>
              <p className="text-lg mb-4 font-semibold">
                How we calculate your estimate:
              </p>

              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-lg">
                  <strong>Base Costs:</strong> Each category has a Seattle-specific base
                  range (low to high)
                </li>
                <li className="text-lg">
                  <strong>Guest Count Scaling:</strong> Per-person categories (catering,
                  favors, rentals) multiply by your guest count
                </li>
                <li className="text-lg">
                  <strong>Budget Tier Adjustment:</strong> Essential (0.7x), Balanced
                  (1.0x), Premium (1.5x) multipliers applied
                </li>
                <li className="text-lg">
                  <strong>Wedding Style Influence:</strong> Some styles trend
                  higher/lower (e.g., Grand/Luxury adds 10-20%)
                </li>
                <li className="text-lg">
                  <strong>Range Display:</strong> We show a realistic range, not a
                  single number—because every wedding is different
                </li>
              </ol>
            </div>

            {/* Disclaimers */}
            <div className="bg-primary-bgSecondary rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-display font-bold mb-6 text-accent-gold">
                Important Disclaimers
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold">•</span>
                  <div>
                    These are <strong>estimates</strong>, not quotes. Actual costs vary
                    based on specific vendors, dates, and choices.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold">•</span>
                  <div>
                    Prices reflect <strong>2024-2025 Seattle market rates</strong> and
                    are updated periodically.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold">•</span>
                  <div>
                    Peak season (May-October) and Saturday weddings typically cost 10-20%
                    more.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold">•</span>
                  <div>
                    This tool does not include costs for: honeymoon, engagement ring,
                    rehearsal dinner, or pre-wedding events.
                  </div>
                </li>
              </ul>
            </div>

            {/* Last Updated */}
            <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-xl p-6 text-center">
              <p className="text-lg">
                <strong>Data last updated:</strong> December 2025
              </p>
              <p className="text-sm text-text-secondary mt-2">
                We review and update our pricing data quarterly to ensure accuracy.
              </p>
            </div>

            <div className="text-center">
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

export default OurSources
