# Quick Start Guide

## Run Locally

1. **Install dependencies** (first time only):
   ```bash
   cd "/Users/bokox/Programs - Boko X/1712 Wedding Budget Estimator"
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```

## Set Up Webhook (Optional for local testing)

1. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Add your webhook URL:
   ```
   VITE_WEBHOOK_URL=your_gohighlevel_webhook_url
   ```

## Project Structure

```
📦 1712 Wedding Budget Estimator
├── 📁 public/images/          # All wedding images and logo
├── 📁 src/
│   ├── 📁 components/         # Layout component
│   ├── 📁 data/              # Budget data & wedding styles
│   │   └── budgetData.js     # ⭐ Edit pricing here
│   ├── 📁 pages/             # All page components
│   ├── 📁 store/             # Zustand state management
│   ├── 📁 utils/             # Budget calculator
│   └── App.jsx               # Main routing
├── package.json
├── tailwind.config.js         # Theme colors
└── vercel.json               # Deployment config
```

## Key Files to Customize

### Update Budget Data
**File:** `src/data/budgetData.js`

- Category pricing ranges
- Budget tier multipliers (Essential 0.7x, Balanced 1.0x, Premium 1.5x)
- Wedding style configurations
- Guest count suggestions

### Update Colors
**File:** `tailwind.config.js`

- Primary background colors
- Accent gold color
- Wedding style theme colors

### Update Content
- **Landing page:** `src/pages/Landing.jsx`
- **Why This Tool:** `src/pages/WhyThisTool.jsx`
- **Our Sources:** `src/pages/OurSources.jsx`

## User Flow

```
Landing → Style Selection → Guest Count → Budget Tier →
Categories → Lead Capture → Results
```

## Features Implemented

✅ 5 Dynamic Wedding Styles with theming
✅ Guest count slider with suggested ranges
✅ 3 Budget tiers (Essential/Balanced/Premium)
✅ 15 Toggleable budget categories
✅ Lead capture with webhook integration
✅ Results page with breakdown & 1712 promotion
✅ "Why This Tool" & "Our Sources" pages
✅ Framer Motion animations
✅ Mobile-first responsive design
✅ Progress indicator
✅ Vercel deployment ready

## Wedding Styles

1. **Intimate/Elopement** - Soft, romantic (2-30 guests)
2. **Classic/Traditional** - Elegant, timeless (50-150 guests)
3. **Modern/Minimalist** - Clean, contemporary (30-100 guests)
4. **Bohemian/Rustic** - Earthy, organic (40-120 guests)
5. **Grand/Luxury** - Opulent, high-end (100-250+ guests)

## Budget Categories (15 total)

- Venue
- Catering (per person)
- Photography
- Videography
- Flowers & Decor
- Music/DJ
- Officiant
- Attire
- Hair & Makeup
- Invitations
- Transportation
- Cake & Desserts
- Favors (per person)
- Rentals
- Miscellaneous

## Webhook Data Structure

When a lead is captured, this data is sent to your GoHighLevel webhook:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "weddingDate": "2025-06-15",
  "weddingStyle": "classic",
  "guestCount": 100,
  "budgetTier": "balanced",
  "selectedCategories": {
    "venue": true,
    "catering": true,
    ...
  },
  "timestamp": "2024-12-25T12:00:00.000Z"
}
```

## Next Steps

1. **Test locally**: Run `npm run dev` and test the full flow
2. **Set up webhook**: Get your GoHighLevel webhook URL
3. **Deploy to Vercel**: Follow [DEPLOYMENT.md](DEPLOYMENT.md)
4. **Test production**: Verify everything works on the live site

## Need Help?

- 📖 Full details: [README.md](README.md)
- 🚀 Deployment: [DEPLOYMENT.md](DEPLOYMENT.md)
- 📋 Original PRD: `1712 Wedding Budget Estimator.md`

---

**You're all set!** The wedding budget estimator is ready to generate leads for 1712 Studios. 🎉
