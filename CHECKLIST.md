# Pre-Launch Checklist

## Before Deploying

### 1. Webhook Configuration
- [ ] Obtain GoHighLevel webhook URL
- [ ] Create `.env` file from `.env.example`
- [ ] Add webhook URL to `.env` file
- [ ] Test webhook locally (optional)

### 2. Content Review
- [ ] Review "Why This Tool" page content
- [ ] Review "Our Sources" page content
- [ ] Verify all budget ranges are accurate
- [ ] Check 1712 Studios venue pricing ($3,600-$5,000)
- [ ] Confirm contact information and links

### 3. Images & Branding
- [ ] All images are in `public/images/` folder
- [ ] Logo displays correctly
- [ ] Wedding style images match their themes
- [ ] Images are optimized for web (size/quality)

### 4. Local Testing
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and app loads
- [ ] Test complete user flow from landing to results
- [ ] Test all 5 wedding styles
- [ ] Test all 3 budget tiers
- [ ] Toggle categories on/off
- [ ] Submit lead capture form
- [ ] View results page
- [ ] Test "Back" buttons throughout flow
- [ ] Click all footer links
- [ ] Test mobile responsiveness (resize browser)

### 5. Build Verification
- [ ] Run `npm run build` without errors
- [ ] Check `dist` folder was created
- [ ] File sizes are reasonable (<500KB for JS)

## After Deploying to Vercel

### 6. Vercel Configuration
- [ ] Project imported to Vercel
- [ ] Environment variable `VITE_WEBHOOK_URL` added
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS is enabled (automatic)

### 7. Production Testing
- [ ] Visit deployed URL
- [ ] Test complete flow end-to-end
- [ ] Submit test lead and verify in GoHighLevel
- [ ] Test on mobile device (iPhone/Android)
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Test in multiple browsers:
  - [ ] Chrome
  - [ ] Safari
  - [ ] Firefox
  - [ ] Edge (if applicable)

### 8. Performance Check
- [ ] Page loads in under 3 seconds
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No console errors in browser DevTools
- [ ] Forms submit successfully

### 9. SEO & Meta Tags
- [ ] Page title is correct in browser tab
- [ ] Favicon (logo) displays
- [ ] Meta description is set (check `index.html`)

### 10. Analytics (Optional - V2)
- [ ] Google Analytics 4 setup (if needed)
- [ ] Event tracking configured (if needed)
- [ ] Conversion tracking in GoHighLevel

## Content Accuracy Checklist

### Budget Data Verification
Review `src/data/budgetData.js`:

- [ ] Venue: $3,000 - $15,000 ✓
- [ ] Catering: $75 - $200/person ✓
- [ ] Photography: $3,000 - $8,000 ✓
- [ ] Videography: $2,000 - $6,000 ✓
- [ ] Flowers: $2,000 - $10,000 ✓
- [ ] Music/DJ: $1,200 - $5,000 ✓
- [ ] Officiant: $300 - $800 ✓
- [ ] Attire: $2,000 - $8,000 ✓
- [ ] Hair & Makeup: $500 - $2,000 ✓
- [ ] Invitations: $300 - $1,500 ✓
- [ ] Transportation: $500 - $2,000 ✓
- [ ] Cake: $500 - $1,500 ✓
- [ ] Favors: $2 - $10/person ✓
- [ ] Rentals: $1,000 - $5,000 ✓
- [ ] Miscellaneous: $1,000 - $3,000 ✓

### Links Verification
- [ ] "Schedule a Free Tour" → weddings.1712studios.com
- [ ] "See What's Included" → weddings.1712studios.com
- [ ] Footer links work correctly
- [ ] All internal navigation works

## Post-Launch Monitoring

### Week 1
- [ ] Monitor webhook submissions in GoHighLevel
- [ ] Check for any error reports
- [ ] Review user completion rates (if analytics enabled)
- [ ] Gather initial user feedback

### Ongoing
- [ ] Update pricing data quarterly
- [ ] Review and respond to leads
- [ ] Track conversion rates
- [ ] Monitor page performance

## Troubleshooting

If issues arise:

1. **Check Vercel logs** for build/runtime errors
2. **Verify environment variables** are set correctly
3. **Test webhook** with a tool like Postman
4. **Clear browser cache** if updates don't appear
5. **Check GoHighLevel** webhook configuration

## Launch!

Once all items are checked:

🚀 **You're ready to go live!**

Share the URL with your team and start generating leads for 1712 Studios.

---

**Questions or Issues?**
- Review [README.md](README.md)
- Check [DEPLOYMENT.md](DEPLOYMENT.md)
- Review [QUICK_START.md](QUICK_START.md)
