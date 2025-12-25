# 1712 Wedding Budget Estimator

A modern, interactive wedding budget calculator specifically designed for Seattle-area weddings. Built for 1712 Studios to help couples get realistic cost estimates for their wedding planning.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.3-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-cyan)
![License](https://img.shields.io/badge/License-Proprietary-red)

## 🎯 Project Overview

This web application provides personalized wedding budget estimates based on:
- Wedding style (Intimate, Classic, Modern, Bohemian, Luxury)
- Guest count (2-300)
- Budget tier (Essential, Balanced, Premium)
- Selected wedding categories (15 customizable categories)

**Key Features:**
- ✅ Seattle-specific pricing data
- ✅ Interactive multi-step flow
- ✅ Dynamic theming per wedding style
- ✅ Print/PDF-ready results
- ✅ Lead capture with webhook integration
- ✅ Mobile-optimized design
- ✅ Smooth animations throughout

## ✨ Features

### Core Functionality
- **Multi-step Interactive Flow**: 5-step process from style selection to results
- **Dynamic Theming**: Background colors change based on selected wedding style
- **Real-time Calculations**: Seattle-specific pricing data with realistic ranges
- **Lead Capture**: Webhook integration for GoHighLevel CRM
- **PDF/Print Export**: Professional print-friendly results page
- **Modal Overlays**: "Our Sources & Methodology" in popup modal
- **Skip Option**: View estimates without providing email

### User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion for all transitions
- **Adaptive Logo**: Black/white logo switching based on background
- **Image Carousel**: Infinite scrolling wedding imagery on landing page
- **High-Contrast UI**: Readable on all theme backgrounds
- **Glass-morphism**: Modern backdrop blur effects

### Technical Features
- **State Management**: Zustand for lightweight global state
- **Type Safety**: Proper data validation
- **Performance**: Code splitting and lazy loading
- **SEO-Friendly**: Meta tags and semantic HTML
- **Print Optimization**: Page break controls, clean layout

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3.1 | UI Framework |
| Vite | 6.0.3 | Build Tool |
| Tailwind CSS | 3.4.1 | Styling |
| Zustand | 4.5.0 | State Management |
| Framer Motion | 11.0.0 | Animations |
| React Router | 6.22.0 | Navigation |

## 📁 Project Structure

```
1712-wedding-budget-estimator/
├── public/
│   └── images/                    # Wedding photos and logos
│       ├── 1712 Logo white.png    # White logo for dark backgrounds
│       ├── 1712 Logo black.png    # Black logo for light backgrounds
│       └── [10 wedding images]
│
├── src/
│   ├── components/
│   │   ├── Layout.jsx             # Main layout with adaptive logo
│   │   ├── Modal.jsx              # Reusable modal component
│   │   └── SourcesModalContent.jsx # Methodology content
│   │
│   ├── pages/
│   │   ├── Landing.jsx            # Landing page with carousel
│   │   ├── WeddingStyle.jsx       # 5 wedding style options
│   │   ├── GuestCount.jsx         # Guest count slider (2-300)
│   │   ├── BudgetTier.jsx         # 3 budget tiers
│   │   ├── CategorySelection.jsx   # 15 budget categories
│   │   ├── LeadCapture.jsx        # Email capture + skip option
│   │   ├── Results.jsx            # Budget breakdown + 1712 promo
│   │   ├── WhyThisTool.jsx        # About page
│   │   └── OurSources.jsx         # Methodology page
│   │
│   ├── store/
│   │   └── weddingStore.js        # Zustand global state
│   │
│   ├── data/
│   │   └── budgetData.js          # Pricing data + configurations
│   │
│   ├── utils/
│   │   └── budgetCalculator.js    # Budget calculation logic
│   │
│   ├── App.jsx                    # Router configuration
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles + print CSS
│
├── documentation/
│   ├── LOGO_IMPLEMENTATION.md     # Adaptive logo system
│   ├── PRINT_IMPROVEMENTS.md      # Print/PDF optimizations
│   ├── MODAL_IMPLEMENTATION.md    # Modal component details
│   ├── CAROUSEL_IMPLEMENTATION.md # Carousel animation
│   └── CONTRAST_FIXES.md          # High-contrast design system
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                    # Vercel deployment config
└── README.md
```

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/1712-wedding-budget-estimator.git
cd 1712-wedding-budget-estimator
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file** (optional)
```bash
cp .env.example .env
```

Add your webhook URL in `.env`:
```env
VITE_WEBHOOK_URL=https://your-gohighlevel-webhook-url.com
```

4. **Start development server**
```bash
npm run dev
```
App opens at `http://localhost:5173`

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

## 🎨 Wedding Styles & Themes

The app features 5 distinct wedding styles with unique color palettes:

| Style | Background | Accent | Text | Logo | Description |
|-------|-----------|--------|------|------|-------------|
| **Intimate/Elopement** | Blush (#f5e6e8), Sage (#8b9a8c) | Rose (#d4a5a5) | Dark | Black | Small, personal ceremonies |
| **Classic/Traditional** | Ivory (#faf8f3), Beige (#e8dfd0) | Gold (#d4a574) | Dark | Black | Timeless elegance |
| **Modern/Minimalist** | White (#ffffff) | Charcoal (#4a5568) | Dark | Black | Clean, contemporary |
| **Bohemian/Rustic** | Cream (#f5f3ed), Earth (#d4c5a9) | Terracotta (#c87855) | Dark | Black | Natural, relaxed |
| **Grand/Luxury** | Black (#0a0a0a) | Gold (#d4a574) | Light | White | High-end, opulent |

## 💰 Budget Calculation System

### Budget Tiers

| Tier | Multiplier | Description |
|------|-----------|-------------|
| **Essential** | 0.7x | Budget-friendly choices, DIY options, off-peak dates |
| **Balanced** | 1.0x | Mid-range quality, professional vendors, good value |
| **Premium** | 1.5x | High-end vendors, luxury experiences, peak season |

### Categories (15 total)

1. **Venue** - Ceremony & reception space, rentals
2. **Catering** - Food, beverages, service staff (per person)
3. **Photography** - Photographer, hours of coverage, albums
4. **Videography** - Videographer, highlight reel, full edit
5. **Flowers & Decor** - Bouquets, centerpieces, installations
6. **Music/Entertainment** - DJ, live band, ceremony music
7. **Wedding Attire** - Dress, suit/tux, alterations, accessories
8. **Hair & Makeup** - Bridal party styling
9. **Invitations & Stationery** - Save-the-dates, invites, programs
10. **Favors & Gifts** - Guest favors, welcome bags (per person)
11. **Transportation** - Limos, shuttles, parking
12. **Cake & Desserts** - Wedding cake, dessert bar
13. **Rentals** - Chairs, linens, glassware, decor
14. **Coordinator/Planner** - Day-of or full planning services
15. **Miscellaneous** - Marriage license, tips, contingency

### Calculation Logic

```javascript
// Budget formula
const categoryEstimate = basePrice × guestCount × budgetTierMultiplier × styleAdjustment

// Example: Catering for 100 guests, Balanced tier, Bohemian style
const catering = 120 × 100 × 1.0 × 1.0 = $12,000
```

Each category has:
- **Base minimum** and **base maximum** prices
- **Per-person flag** (for categories like catering, favors)
- Range display (e.g., "$10,000 - $15,000")

## 📊 Data Sources

Pricing data compiled from:
- **The Knot Real Weddings Study** (2023-2024) - 12,000+ couples surveyed
- **WeddingWire Cost Guide** - Verified vendor profiles
- **Thumbtack & Bark** - Real Seattle vendor quotes
- **1712 Studios Vendor Network** - Direct pricing
- **Local Vendor Research** - 50+ Seattle vendor websites
- **Client Data** - 100+ weddings hosted at 1712

**Data Accuracy**: Updated quarterly
**Last Updated**: December 2025
**Regional Focus**: Seattle/Puget Sound area

## 🔗 Webhook Integration

### Lead Data Structure

When users submit the lead capture form, data is sent to GoHighLevel:

```javascript
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "weddingDate": "2026-06-15",
  "weddingStyle": "bohemian",
  "guestCount": 150,
  "budgetTier": "balanced",
  "selectedCategories": {
    "venue": true,
    "catering": true,
    "photography": true,
    // ... all 15 categories
  },
  "timestamp": "2025-12-25T12:00:00.000Z"
}
```

### Setup

1. Get your webhook URL from GoHighLevel
2. Add to `.env` file:
```env
VITE_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
```
3. For Vercel deployment, add as environment variable in dashboard

## 🖨 Print/PDF Features

The Results page is fully optimized for print and PDF export:

### Print Optimizations
- ✅ Page break controls prevent content splitting
- ✅ Black logo automatically used (high contrast on white paper)
- ✅ White background with black text
- ✅ Gold accent color preserved for branding
- ✅ Navigation and footer hidden
- ✅ 0.5-inch margins on all sides
- ✅ No shadows or blur effects
- ✅ Orphan/widow control for typography

### Print CSS Implementation
Located in `src/index.css`:
```css
@media print {
  /* Comprehensive print styles */
  .no-page-break { page-break-inside: avoid; }
  header img[alt="1712 Studios"] {
    content: url("/images/1712 Logo black.png") !important;
  }
  @page { margin: 0.5in; }
}
```

## 📱 Mobile Optimization

### Mobile-Specific Features
- Compact hero section (`py-8` vs `md:py-24`)
- Smaller typography (`text-4xl` vs `md:text-7xl`)
- Taller carousel images (320px height mobile, 256px desktop)
- Touch-optimized buttons (larger tap targets)
- Responsive grids (1 col → 2 cols → 3 cols)
- Optimized for viewport fit (carousel visible without scrolling)

### Breakpoints
```javascript
// Tailwind breakpoints
sm: '640px'   // Small devices
md: '768px'   // Tablets
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
```

## 🎭 Animations & Interactions

### Landing Page Carousel
- **Type**: Infinite horizontal scroll
- **Duration**: 30 seconds per loop
- **Images**: 10 unique images × 2 (duplicated for seamless loop)
- **Mobile Size**: 256×320px (portrait)
- **Desktop Size**: 256×256px (square)

### Celebration Emoji
Entrance animation on Lead Capture page:
```javascript
initial: { scale: 0, rotate: -180, y: -50 }
animate: {
  scale: [0, 1.3, 0.9, 1.1, 1],
  rotate: [-180, 20, -10, 5, 0],
  y: [-50, 0, 0, 0, 0]
}
// Bouncy, spinning drop-in effect
```

### Other Animations
- **Page Transitions**: Fade + slide (Framer Motion)
- **Card Hovers**: Scale 1.05 on desktop
- **Modal**: Backdrop fade + content scale
- **Progress Bar**: Width animation
- **Button Taps**: Scale 0.95 feedback

## 🎨 Design System

### High-Contrast Cards
All interactive cards use consistent styling:
```javascript
// Selected state
bg-black/95 border-accent-gold backdrop-blur-md

// Default state
bg-black/80 border-white/20 backdrop-blur-md

// Hover state
bg-black/90 border-white/40
```

### Typography
```javascript
// Fonts
Display: 'Playfair Display' (serif, elegant)
Body: 'Inter' (sans-serif, clean)

// Scales
Mobile: text-4xl (2.25rem)
Desktop: text-7xl (4.5rem)
```

### Colors
```javascript
{
  primary: {
    bg: '#0a0a0a',        // Dark background
    bgSecondary: '#1a1a1a' // Slightly lighter
  },
  accent: {
    gold: '#d4a574'        // Signature gold
  },
  text: {
    primary: '#ffffff',    // White
    secondary: '#9ca3af'   // Gray-400
  }
}
```

## 🚢 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import in Vercel**
- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repository
- Vercel auto-detects Vite configuration

3. **Add Environment Variables**
```
VITE_WEBHOOK_URL = your_webhook_url
```

4. **Deploy**
- Click "Deploy"
- Vercel builds and deploys automatically

### Build Configuration
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

### Custom Domain
Add your custom domain in Vercel dashboard:
- Example: `budget.1712studios.com`

## 🧪 Testing Checklist

Before deployment, verify:

**Functionality**
- [ ] All wedding styles display correctly with proper theming
- [ ] Logo switches between black/white based on background
- [ ] Budget calculations are accurate for all tiers
- [ ] Form validation works (name, email, date required)
- [ ] Webhook integration sends data successfully
- [ ] "Skip for now" option works without email

**Design & UX**
- [ ] Print/PDF export looks professional
- [ ] Modal opens and closes properly (ESC, click outside, X button)
- [ ] Carousel scrolls smoothly and loops seamlessly
- [ ] Celebration emoji animates on Lead Capture page
- [ ] All text is readable on light AND dark backgrounds
- [ ] Mobile responsive on all pages (iPhone, Android)

**Images & Assets**
- [ ] All wedding images load correctly
- [ ] Both logos (black/white) are in place
- [ ] Favicon displays correctly
- [ ] No broken image links

**Browser Compatibility**
- [ ] Chrome/Edge (Chromium)
- [ ] Safari (macOS & iOS)
- [ ] Firefox
- [ ] Mobile browsers

## 🐛 Known Issues

None currently. Report issues via GitHub Issues or contact development team.

## 📈 Future Enhancements

Potential improvements for v2:
- [ ] SVG logos for perfect scaling
- [ ] Save/share budget estimates (unique URL)
- [ ] PDF download button (vs print dialog)
- [ ] Comparison tool (compare multiple scenarios)
- [ ] Vendor recommendations based on budget
- [ ] Multi-language support (Spanish, Chinese)
- [ ] Real-time pricing updates via API
- [ ] Budget tracking dashboard
- [ ] Integration with 1712 booking system

## 📄 License

**Proprietary** - © 2025 1712 Studios. All rights reserved.

This software is proprietary to 1712 Studios. Unauthorized copying, distribution, or modification is prohibited.

## 🙏 Acknowledgments

- **Wedding Photography**: 1712 Studios
- **Pricing Data**: The Knot, WeddingWire, local vendors
- **Design Inspiration**: Modern wedding planning tools
- **Seattle Vendor Community**: For pricing transparency

## 📞 Contact & Support

**1712 Studios**
📍 Seattle, Washington
🌐 Website: [weddings.1712studios.com](https://weddings.1712studios.com)
📧 Email: info@1712studios.com

**Development Team**
For technical support or bug reports, contact the development team.

---

**Built with ❤️ for Seattle couples planning their perfect day**

*Last Updated: December 25, 2025*
