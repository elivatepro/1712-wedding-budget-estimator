import { budgetCategories, budgetTiers, weddingStyles } from '../data/budgetData'

export const calculateCategoryBudget = (
  categoryKey,
  guestCount,
  budgetTier,
  weddingStyle
) => {
  const category = budgetCategories[categoryKey]
  if (!category) return { min: 0, max: 0, estimate: 0 }

  const tierMultiplier = budgetTiers[budgetTier]?.multiplier || 1.0
  const styleAdjustment = weddingStyles[weddingStyle]?.priceAdjustment || 1.0

  let baseMin = category.baseMin
  let baseMax = category.baseMax

  // Apply per-person calculation if applicable
  if (category.perPerson) {
    baseMin = baseMin * guestCount
    baseMax = baseMax * guestCount
  }

  // Apply tier multiplier
  baseMin = baseMin * tierMultiplier
  baseMax = baseMax * tierMultiplier

  // Apply wedding style adjustment
  baseMin = baseMin * styleAdjustment
  baseMax = baseMax * styleAdjustment

  // Calculate estimate (average of min and max)
  const estimate = (baseMin + baseMax) / 2

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax),
    estimate: Math.round(estimate),
  }
}

export const calculateTotalBudget = (
  selectedCategories,
  guestCount,
  budgetTier,
  weddingStyle
) => {
  let totalMin = 0
  let totalMax = 0
  let totalEstimate = 0
  const breakdown = {}

  Object.keys(selectedCategories).forEach((categoryKey) => {
    if (selectedCategories[categoryKey]) {
      const result = calculateCategoryBudget(
        categoryKey,
        guestCount,
        budgetTier,
        weddingStyle
      )
      breakdown[categoryKey] = result
      totalMin += result.min
      totalMax += result.max
      totalEstimate += result.estimate
    }
  })

  return {
    totalMin: Math.round(totalMin),
    totalMax: Math.round(totalMax),
    totalEstimate: Math.round(totalEstimate),
    breakdown,
  }
}

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
