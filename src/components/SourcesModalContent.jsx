import React from 'react'

const SourcesModalContent = () => {
  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
        Our Sources & Methodology
      </h2>

      <p className="text-xl text-accent-gold font-display mb-8">
        "Real numbers from real sources."
      </p>

      <div className="space-y-8">
        {/* Data Sources */}
        <div>
          <h3 className="text-xl font-display font-bold mb-4 text-accent-gold">
            Data Sources
          </h3>
          <p className="text-gray-300 mb-4">
            We didn't make these numbers up. Here's exactly how we built this
            calculator:
          </p>

          <p className="text-gray-300 mb-4">
            Our Seattle wedding cost estimates are compiled from:
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent-gold text-xl">•</span>
              <div className="text-gray-300">
                <strong className="text-white">The Knot Real Weddings Study (2023-2024)</strong> — Annual
                survey of 12,000+ couples, filtered for Seattle/Puget Sound region
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-gold text-xl">•</span>
              <div className="text-gray-300">
                <strong className="text-white">WeddingWire Cost Guide</strong> — Crowdsourced pricing data
                from verified vendor profiles
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-gold text-xl">•</span>
              <div className="text-gray-300">
                <strong className="text-white">Thumbtack & Bark Local Pricing</strong> — Real quotes from
                Seattle-area vendors
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-gold text-xl">•</span>
              <div className="text-gray-300">
                <strong className="text-white">1712 Studios Vendor Network</strong> — Direct pricing from
                our preferred photographers, caterers, florists, and DJs
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-gold text-xl">•</span>
              <div className="text-gray-300">
                <strong className="text-white">Local Vendor Website Research</strong> — We reviewed 50+
                Seattle vendor sites for published pricing
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-gold text-xl">•</span>
              <div className="text-gray-300">
                <strong className="text-white">Couples We've Worked With</strong> — Anonymous budget data
                from 100+ weddings hosted at 1712
              </div>
            </li>
          </ul>
        </div>

        {/* Methodology */}
        <div>
          <h3 className="text-xl font-display font-bold mb-4 text-accent-gold">
            Methodology
          </h3>
          <p className="text-gray-300 mb-4 font-semibold">
            How we calculate your estimate:
          </p>

          <ol className="space-y-3 list-decimal list-inside text-gray-300">
            <li>
              <strong className="text-white">Base Costs:</strong> Each category has a Seattle-specific base
              range (low to high)
            </li>
            <li>
              <strong className="text-white">Guest Count Scaling:</strong> Per-person categories (catering,
              favors, rentals) multiply by your guest count
            </li>
            <li>
              <strong className="text-white">Budget Tier Adjustment:</strong> Essential (0.7x), Balanced
              (1.0x), Premium (1.5x) multipliers applied
            </li>
            <li>
              <strong className="text-white">Wedding Style Influence:</strong> Some styles trend
              higher/lower (e.g., Grand/Luxury adds 10-20%)
            </li>
            <li>
              <strong className="text-white">Range Display:</strong> We show a realistic range, not a
              single number—because every wedding is different
            </li>
          </ol>
        </div>

        {/* Disclaimers */}
        <div>
          <h3 className="text-xl font-display font-bold mb-4 text-accent-gold">
            Important Disclaimers
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-accent-gold">•</span>
              <div>
                These are <strong className="text-white">estimates</strong>, not quotes. Actual costs vary
                based on specific vendors, dates, and choices.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-gold">•</span>
              <div>
                Prices reflect <strong className="text-white">2024-2025 Seattle market rates</strong> and
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
        <div className="bg-accent-gold/20 border border-accent-gold/30 rounded-xl p-6 text-center">
          <p className="text-white">
            <strong>Data last updated:</strong> December 2025
          </p>
          <p className="text-sm text-gray-300 mt-2">
            We review and update our pricing data quarterly to ensure accuracy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SourcesModalContent
