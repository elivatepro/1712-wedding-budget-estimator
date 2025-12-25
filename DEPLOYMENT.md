# Deployment Guide

## Quick Start

Your 1712 Wedding Budget Estimator is ready to deploy! Follow these steps to get it live on Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (free) - sign up at [vercel.com](https://vercel.com)
3. Your GoHighLevel webhook URL ready

## Step-by-Step Deployment

### 1. Push to GitHub

If you haven't already, initialize a git repository and push to GitHub:

```bash
cd "/Users/bokox/Programs - Boko X/1712 Wedding Budget Estimator"
git init
git add .
git commit -m "Initial commit: 1712 Wedding Budget Estimator"
```

Create a new repository on GitHub, then:

```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Via Vercel Dashboard (Recommended)**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect the settings (Vite framework)
5. **Add Environment Variable:**
   - Key: `VITE_WEBHOOK_URL`
   - Value: Your GoHighLevel webhook URL
6. Click "Deploy"

**Option B: Via Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel --prod
```

When prompted, add your environment variable.

### 3. Configure Your Webhook

1. Log in to GoHighLevel
2. Go to Settings → Webhooks
3. Create a new webhook for "Lead Capture"
4. Copy the webhook URL
5. Add it to Vercel:
   - Go to your project settings in Vercel
   - Navigate to "Environment Variables"
   - Add `VITE_WEBHOOK_URL` with your webhook URL
   - Redeploy the project

### 4. Test Your Deployment

1. Visit your Vercel URL (e.g., `your-project.vercel.app`)
2. Complete the wedding budget flow
3. Submit the lead capture form
4. Verify the data appears in GoHighLevel

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify mobile responsiveness
- [ ] Test lead capture form submission
- [ ] Check webhook data in GoHighLevel
- [ ] Test all 5 wedding style themes
- [ ] Verify budget calculations are accurate
- [ ] Test print/PDF functionality on results page

## Custom Domain (Optional)

To use a custom domain like `budget.1712studios.com`:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed by Vercel

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEBHOOK_URL` | GoHighLevel webhook URL for lead capture | Yes |

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Your update description"
git push
```

Vercel will automatically rebuild and deploy your changes.

## Troubleshooting

### Build Fails

- Check that all dependencies are listed in `package.json`
- Verify Node.js version is 18+
- Check build logs in Vercel dashboard

### Webhook Not Working

- Verify `VITE_WEBHOOK_URL` is set in Vercel environment variables
- Check GoHighLevel webhook settings
- Test the webhook URL with a tool like Postman

### Images Not Loading

- Ensure images are in the `public/images` folder
- Check image paths start with `/images/` (not `./images/`)
- Clear browser cache

### Routing Issues (404 on refresh)

- Verify `vercel.json` is in the root directory
- Check that rewrites are configured properly

## Performance Optimization

The site is already optimized, but for even better performance:

1. **Image Optimization**: Consider converting images to WebP format
2. **Lazy Loading**: Images are already optimized, but you can add lazy loading for below-the-fold images
3. **Analytics**: Add Google Analytics 4 if needed (mentioned in PRD but not required for V1)

## Monitoring

- Check Vercel Analytics for traffic and performance metrics
- Monitor GoHighLevel for lead conversion rates
- Set up alerts for failed webhook submissions

## Support

For issues or questions:
- Check the [README.md](README.md) for local development
- Review Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Contact your development team

---

**Congratulations!** Your wedding budget estimator is now live and ready to generate leads for 1712 Studios! 🎉
