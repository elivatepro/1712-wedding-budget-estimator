import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import StyleSelection from './pages/StyleSelection'
import GuestCount from './pages/GuestCount'
import BudgetTier from './pages/BudgetTier'
import CategorySelection from './pages/CategorySelection'
import LeadCapture from './pages/LeadCapture'
import Results from './pages/Results'
import WhyThisTool from './pages/WhyThisTool'
import OurSources from './pages/OurSources'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/style" element={<StyleSelection />} />
      <Route path="/guest-count" element={<GuestCount />} />
      <Route path="/budget-tier" element={<BudgetTier />} />
      <Route path="/categories" element={<CategorySelection />} />
      <Route path="/lead-capture" element={<LeadCapture />} />
      <Route path="/results" element={<Results />} />
      <Route path="/why-this-tool" element={<WhyThisTool />} />
      <Route path="/our-sources" element={<OurSources />} />
    </Routes>
  )
}

export default App
