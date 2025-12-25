# Product Requirements Document
## 1712 Studios Wedding Budget Estimator

**Version:** 1.0  
**Date:** December 25, 2024  
**Product:** Seattle Wedding Budget Estimator  
**Client:** 1712 Studios

---

## 1. Executive Summary

The 1712 Studios Wedding Budget Estimator is a free, interactive web application designed to help Seattle-area couples estimate the total cost of their wedding. By guiding users through a series of questions about their wedding preferences, the tool generates a personalized budget breakdown.

This serves as a powerful lead magnet, capturing contact information from engaged couples who are actively planning their wedding—prime prospects for 1712 Studios' venue services.

---

## 2. Goals & Objectives

### 2.1 Business Goals

1. Generate qualified wedding leads for 1712 Studios venue bookings
2. Build an email list of engaged couples in the Seattle market
3. Position 1712 Studios as a helpful, value-first wedding resource
4. Subtly promote venue services without being overly salesy

### 2.2 User Goals

- Understand realistic wedding costs in Seattle
- Get a personalized budget breakdown by category
- Plan their wedding spending with confidence
- Receive a helpful wedding planning checklist

---

## 3. Target Audience

**Primary:** Engaged couples in the Seattle metro area actively planning their wedding

**Secondary:** Friends and family members helping with wedding planning

**Demographics:** Ages 25-40, household income $75K+, planning weddings within 6-18 months

---

## 4. Product Features

### 4.1 Wedding Style Selection

Users begin by selecting their wedding style, which determines the visual theme of the entire application and influences budget calculations:

| Style | Description | Typical Guest Count |
|-------|-------------|---------------------|
| **Intimate/Elopement** | Soft, romantic aesthetic with muted tones | 2-30 guests |
| **Classic/Traditional** | Elegant, timeless look with sophisticated typography | 50-150 guests |
| **Modern/Minimalist** | Clean lines, monochromatic palette, contemporary feel | 30-100 guests |
| **Bohemian/Rustic** | Earthy colors, organic textures, natural elements | 40-120 guests |
| **Grand/Luxury** | Opulent design with gold accents and rich colors | 100-250+ guests |

**Dynamic Theming:** Upon selection, the entire app UI transforms to match the chosen wedding style (colors, typography, imagery, animations).

### 4.2 Guest Count Input

A slider or input field allowing users to specify expected guest count. This number dynamically affects estimates for:

- Catering (per-person costs)
- Rentals (tables, chairs, linens)
- Invitations & stationery
- Favors & gifts
- Venue sizing recommendations

Suggested ranges based on wedding style will be provided as guidance.

### 4.3 Budget Tier Selection

Users select their preferred spending approach:

| Tier | Description | Multiplier |
|------|-------------|------------|
| **Essential** | Budget-conscious choices, prioritizing necessities | 0.7x base |
| **Balanced** | Mid-range options with quality and value | 1.0x base |
| **Premium** | High-end vendors and luxury experiences | 1.5x base |

### 4.4 Budget Categories

The estimator covers all major wedding expense categories. Users can toggle each on/off based on their needs:

| Category | Includes | Seattle Range (Balanced) |
|----------|----------|--------------------------|
| **Venue** | Ceremony & reception space, rentals | $3,000 - $15,000 |
| **Catering** | Food, beverages, service staff | $75 - $200/person |
| **Photography** | Photographer, hours of coverage, albums | $3,000 - $8,000 |
| **Videography** | Videographer, highlight reel, full edit | $2,000 - $6,000 |
| **Flowers & Decor** | Bouquets, centerpieces, installations | $2,000 - $10,000 |
| **Music/DJ** | DJ or live band, sound equipment | $1,200 - $5,000 |
| **Officiant** | Ceremony officiant, rehearsal | $300 - $800 |
| **Attire** | Wedding dress, suit, alterations | $2,000 - $8,000 |
| **Hair & Makeup** | Styling for wedding party | $500 - $2,000 |
| **Invitations** | Save-the-dates, invites, programs | $300 - $1,500 |
| **Transportation** | Limos, shuttles, valet | $500 - $2,000 |
| **Cake & Desserts** | Wedding cake, dessert bar | $500 - $1,500 |
| **Favors** | Guest gifts and favors | $2 - $10/person |
| **Rentals** | Extra chairs, linens, lighting | $1,000 - $5,000 |
| **Miscellaneous** | Tips, marriage license, extras | $1,000 - $3,000 |

---

## 5. User Flow

### 5.1 Flow Overview

```
[Landing] → [Wedding Style] → [Guest Count] → [Budget Tier] → [Categories] → [Lead Capture] → [Results]
```

### 5.2 Screen-by-Screen Flow

1. **Landing/Welcome Screen**
   - Headline: "What Will Your Seattle Wedding Really Cost?"
   - Subhead: "Get a personalized estimate in under 2 minutes"
   - CTA: "Start Planning" button
   - Trust indicators: "Free • No signup required to start • Seattle-specific pricing"

2. **Wedding Style Selection**
   - Visual cards for each wedding style (with imagery)
   - Clicking a style transforms the UI theme
   - Progress indicator: Step 1 of 5

3. **Guest Count**
   - Slider with numeric input (range: 2-300)
   - Suggested range based on selected wedding style
   - Visual feedback showing cost impact
   - Progress indicator: Step 2 of 5

4. **Budget Tier**
   - Three clear options with descriptions
   - Examples of what each tier means
   - Progress indicator: Step 3 of 5

5. **Category Selection**
   - Grid of toggleable category cards
   - All categories ON by default
   - Users can turn off categories they're skipping (e.g., "We already have a photographer")
   - Progress indicator: Step 4 of 5

6. **Lead Capture (Gate)**
   - Headline: "Your personalized estimate is ready!"
   - Subhead: "Enter your details and we'll also send you our Ultimate Seattle Wedding Checklist"
   - Form fields:
     - Name (required)
     - Email (required)
     - Wedding Date (required, date picker)
   - Privacy note: "We respect your privacy. No spam, ever."
   - CTA: "See My Estimate"

7. **Results Page**
   - **Total Estimate** displayed prominently
   - **Category Breakdown** with visual chart (pie or bar)
   - **Detailed List** showing each category's estimate
   - **1712 Studios Soft Pitch** (see Section 6)
   - **CTA: Schedule a Tour** button
   - Option to adjust inputs and recalculate
   - Share/Save functionality

---

## 6. 1712 Studios Integration

### 6.1 Subtle Venue Promotion

On the results page, include a tasteful section:

> **"Looking for a venue that fits your budget?"**
>
> 1712 Studios offers transparent pricing starting at $3,600 for an 8-hour wedding package—including tables, chairs, sound system, and more.
>
> [Schedule a Free Tour]

### 6.2 Venue Comparison

When displaying the "Venue" category estimate, show a comparison:

> Your Estimated Venue Cost: **$8,500**
>
> At 1712 Studios: **$3,600 - $5,000** (with more included)
>
> [See What's Included]

### 6.3 Email Follow-up Sequence

After lead capture:
1. **Immediate:** Send the wedding checklist PDF
2. **Day 2:** "Here's how Seattle couples are saving on venues"
3. **Day 5:** "Your personalized budget breakdown" (recap + 1712 CTA)
4. **Day 10:** "Questions about planning? We're here to help" + Tour invite

---

## 7. Design Requirements

### 7.1 Branding Alignment

The app must align with 1712 Studios' existing wedding brand:

**From weddings.1712studios.com:**
- Dark, elegant aesthetic
- Industrial-romantic vibes
- Clean, modern typography
- Emphasis on transparency and value
- Warm, inviting imagery

### 7.2 Color Palette

| Element | Color |
|---------|-------|
| Primary Background | #0a0a0a (near black) |
| Secondary Background | #1a1a1a (dark gray) |
| Accent | #d4a574 (warm gold) |
| Text Primary | #ffffff (white) |
| Text Secondary | #a0a0a0 (gray) |
| Success/CTA | #d4a574 (gold) |

### 7.3 Typography

- **Headlines:** Elegant serif or modern sans-serif (e.g., Playfair Display or Inter)
- **Body:** Clean sans-serif (e.g., Inter, system fonts)
- **Hierarchy:** Clear distinction between headings and body text

### 7.4 Dynamic Theming by Wedding Style

Each wedding style selection transforms the UI:

| Style | Color Shift | Typography | Imagery Style |
|-------|-------------|------------|---------------|
| Intimate/Elopement | Soft blush, sage | Delicate serif | Dreamy, close-up |
| Classic/Traditional | Ivory, navy, gold | Elegant serif | Formal, grand |
| Modern/Minimalist | Black, white, gray | Clean sans-serif | Geometric, simple |
| Bohemian/Rustic | Terracotta, olive | Handwritten accents | Natural, outdoor |
| Grand/Luxury | Black, gold, cream | Bold serif | Opulent, detailed |

### 7.5 Mobile-First Design

- **Primary:** Mobile experience (60%+ of wedding planning happens on mobile)
- **Responsive:** Scales beautifully to tablet and desktop
- **Touch-friendly:** Large tap targets, swipe gestures where appropriate
- **Fast:** Optimized images, minimal load times

---

## 8. Technical Requirements

### 8.1 Technology Stack

- **Framework:** React (with hooks, functional components)
- **Styling:** Tailwind CSS for rapid, consistent styling
- **State Management:** React Context or Zustand (lightweight)
- **Animations:** Framer Motion for smooth transitions
- **Hosting:** TBD (Vercel, Netlify, or embedded on 1712 site)

### 8.2 Lead Data Handling

- **Form Submission:** Secure HTTPS POST
- **Data Storage:** TBD (email service integration, CRM, or Google Sheets)
- **Email Delivery:** TBD (SendGrid, Mailchimp, or native CRM)
- **Privacy:** GDPR/CCPA compliant, clear privacy policy

### 8.3 Performance Targets

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices)

### 8.4 Browser Support

- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Chrome for Android (latest 2 versions)

---

## 9. Success Metrics

### 9.1 Key Performance Indicators

| Metric | Target |
|--------|--------|
| Completion Rate | 60%+ (start to lead capture) |
| Lead Capture Rate | 80%+ (of those who reach gate) |
| Tour Booking Rate | 10%+ (of leads) |
| Monthly Leads | 50+ (after 3 months) |

### 9.2 Tracking Requirements

- Google Analytics 4 integration
- Event tracking for each step completion
- Funnel visualization
- A/B testing capability for headlines/CTAs

---

## 10. Credibility Pages

### 10.1 "Why We Created This" Page

**Purpose:** Build trust and emotional connection by explaining 1712's motivation for creating a free tool.

**Placement:** Accessible via footer link and/or a subtle "Why is this free?" link on the lead capture screen.

**Content Direction:**

---

**Page Title:** Why We Built This Tool

**Headline:** "Because wedding planning shouldn't start with sticker shock."

**Body Copy:**

> When couples walk into 1712 Studios for a venue tour, the first question is almost always the same: *"What should we actually budget for our wedding?"*
>
> The truth is, most Seattle couples underestimate wedding costs by 30-50%. They start planning with Pinterest dreams and end up stressed when reality hits. We've seen it too many times.
>
> So we built this tool—not to sell you anything, but to give you a real, honest starting point.
>
> **Here's what makes this different:**
>
> - **Seattle-specific:** National averages don't apply here. Our numbers reflect what Seattle vendors actually charge.
> - **No hidden agenda:** We're a venue, not a wedding planning platform. We don't make money recommending vendors.
> - **Real data:** We surveyed local vendors and cross-referenced industry reports (see Our Sources).
> - **Actually free:** No paywalls, no "premium estimates," no bait-and-switch.
>
> Yes, we'd love for you to consider 1712 for your venue. But even if you don't, we hope this tool helps you plan a wedding you can actually afford—and enjoy.
>
> **— The 1712 Studios Team**

**Design Notes:**
- Warm, personal tone
- Include a photo of the 1712 team or venue
- Keep it scannable but heartfelt
- End with subtle CTA: "Ready to start? [Get Your Estimate]"

---

### 10.2 "Our Sources" Page

**Purpose:** Establish credibility by showing the research and data behind the estimates.

**Placement:** Accessible via footer link and a "How did we calculate this?" link on the results page.

**Content Direction:**

---

**Page Title:** Our Sources & Methodology

**Headline:** "Real numbers from real sources."

**Body Copy:**

> We didn't make these numbers up. Here's exactly how we built this calculator:

**Section 1: Data Sources**

> Our Seattle wedding cost estimates are compiled from:
>
> - **The Knot Real Weddings Study (2023-2024)** — Annual survey of 12,000+ couples, filtered for Seattle/Puget Sound region
> - **WeddingWire Cost Guide** — Crowdsourced pricing data from verified vendor profiles
> - **Thumbtack & Bark Local Pricing** — Real quotes from Seattle-area vendors
> - **1712 Studios Vendor Network** — Direct pricing from our preferred photographers, caterers, florists, and DJs
> - **Local Vendor Website Research** — We reviewed 50+ Seattle vendor sites for published pricing
> - **Couples We've Worked With** — Anonymous budget data from 100+ weddings hosted at 1712

**Section 2: Methodology**

> **How we calculate your estimate:**
>
> 1. **Base Costs:** Each category has a Seattle-specific base range (low to high)
> 2. **Guest Count Scaling:** Per-person categories (catering, favors, rentals) multiply by your guest count
> 3. **Budget Tier Adjustment:** Essential (0.7x), Balanced (1.0x), Premium (1.5x) multipliers applied
> 4. **Wedding Style Influence:** Some styles trend higher/lower (e.g., Grand/Luxury adds 10-20%)
> 5. **Range Display:** We show a realistic range, not a single number—because every wedding is different

**Section 3: Important Disclaimers**

> - These are **estimates**, not quotes. Actual costs vary based on specific vendors, dates, and choices.
> - Prices reflect **2024-2025 Seattle market rates** and are updated periodically.
> - Peak season (May-October) and Saturday weddings typically cost 10-20% more.
> - This tool does not include costs for: honeymoon, engagement ring, rehearsal dinner, or pre-wedding events.

**Section 4: Last Updated**

> **Data last updated:** December 2024
>
> We review and update our pricing data quarterly to ensure accuracy.

**Design Notes:**
- Clean, factual presentation
- Use subtle iconography for each source type
- Include logos of credible sources (The Knot, WeddingWire) if permissions allow
- End with: "Questions about our methodology? [Contact Us]"

---

### 10.3 Integration Into User Flow

| Location | Element | Links To |
|----------|---------|----------|
| Footer (all pages) | "Why This Tool" | Why We Created This page |
| Footer (all pages) | "Our Sources" | Our Sources page |
| Lead Capture Screen | "Why is this free?" small link | Why We Created This page |
| Results Page | "How did we calculate this?" link | Our Sources page |
| Results Page (category breakdown) | Small "i" icon per category | Tooltip or modal with source note |

---

## 11. Out of Scope (V1)

The following features are not included in the initial release:

- User accounts / saved estimates
- Vendor recommendations / directory
- Interactive checklist within app
- Budget tracking over time
- Multi-language support
- Integration with wedding planning apps

---

## 12. Timeline & Phases

### Phase 1: Foundation (Week 1-2)
- Design system and theming
- Core flow implementation
- Mobile-responsive layout

### Phase 2: Calculator Logic (Week 2-3)
- Budget calculation engine
- Category management
- Dynamic theming per style

### Phase 3: Lead Capture & Results (Week 3-4)
- Lead capture form
- Results page with breakdown
- 1712 Studios integration

### Phase 4: Polish & Launch (Week 4-5)
- Animations and transitions
- Performance optimization
- Testing and QA
- Deployment

---

## 13. Appendix

### A. Seattle Wedding Cost Research Sources

Estimates should be based on:
- The Knot Real Weddings Study (Seattle market)
- WeddingWire Cost Guide
- Local vendor pricing research
- 1712 Studios internal data

### B. Checklist Content (For Email Delivery)

The wedding checklist PDF (already created by 1712) will be delivered via email after lead capture. It includes:
- "Ultimate Seattle Wedding Venue Checklist"
- "7 Questions 87% of Couples Forget to Ask"

### C. Competitor Reference

Similar tools for inspiration:
- The Knot Budget Calculator
- WeddingWire Budget Planner
- Zola Budget Tracker

---

*Document prepared for 1712 Studios*
