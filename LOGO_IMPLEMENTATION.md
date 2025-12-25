# Adaptive Logo Implementation

## Overview

Implemented smart logo switching to use the appropriate logo color (black or white) based on the wedding style theme background color.

## Logo Files

Two logo versions added to the project:

1. **White Logo** - `1712 Logo white.png` (18.5 KB)
   - Used on dark backgrounds
   - Default for main site (dark theme)

2. **Black Logo** - `1712 Logo black.png` (21.9 KB)
   - Used on light backgrounds
   - Used for print/PDF export

## Implementation

### Layout Component ([src/components/Layout.jsx](src/components/Layout.jsx#L17-L27))

Added logic to determine which logo to use based on wedding style:

```javascript
// Determine if background is light (use black logo) or dark (use white logo)
const isLightBackground = theme && (
  weddingStyle === 'intimate' ||
  weddingStyle === 'classic' ||
  weddingStyle === 'bohemian' ||
  weddingStyle === 'modern'
)

const logoSrc = isLightBackground
  ? "/images/1712 Logo black.png"
  : "/images/1712 Logo white.png"
```

### Wedding Style Logo Mapping

| Wedding Style | Background | Logo Used |
|--------------|------------|-----------|
| **Intimate/Elopement** | Light (blush, sage) | Black Logo |
| **Classic/Traditional** | Light (ivory, beige) | Black Logo |
| **Modern/Minimalist** | Light/White | Black Logo |
| **Bohemian/Rustic** | Light (cream, earth tones) | Black Logo |
| **Grand/Luxury** | Dark (black) | White Logo |
| **No style selected** | Dark (default) | White Logo |

### Print Styles ([src/index.css](src/index.css#L102-L105))

Added print-specific rule to always use black logo on white paper:

```css
/* Use black logo for print */
header img[alt="1712 Studios"] {
  content: url("/images/1712 Logo black.png") !important;
}
```

## Benefits

✅ **Better Readability**: Logo always contrasts with background
✅ **Professional Appearance**: Appropriate logo for each theme
✅ **Print Optimized**: Black logo on white paper for PDF export
✅ **Smooth Transitions**: Logo changes smoothly with theme transitions
✅ **Automatic**: No manual switching needed

## How It Works

### 1. On Page Load
- Default: White logo on dark background
- Component checks if wedding style is selected
- If no style: White logo (default dark theme)

### 2. After Style Selection
- User selects wedding style
- Theme changes to match style
- Logo automatically switches based on background brightness
- Transition is smooth (300ms)

### 3. During Print
- Regardless of current theme
- Always uses black logo
- Ensures good contrast on white paper

## Testing Checklist

When testing the adaptive logos:

- [ ] **Landing Page**: White logo on dark background
- [ ] **Intimate Style**: Black logo on light blush/sage background
- [ ] **Classic Style**: Black logo on ivory/beige background
- [ ] **Modern Style**: Black logo on white background
- [ ] **Bohemian Style**: Black logo on cream/earth background
- [ ] **Luxury Style**: White logo on black background
- [ ] **Print/PDF**: Black logo regardless of current theme
- [ ] **Logo transitions**: Smooth when switching between styles
- [ ] **Mobile responsive**: Logo displays correctly on all sizes

## Technical Details

### Logo File Locations
```
public/images/
├── 1712 Logo white.png  (18,576 bytes)
├── 1712 Logo black.png  (21,946 bytes)
└── 1712 Logo.png        (deprecated - old single logo)
```

### CSS Transition
```css
className="h-12 w-auto transition-opacity duration-300"
```

The logo has a smooth fade transition when switching between black and white versions.

## Future Enhancements (Optional)

Possible improvements:
- SVG versions for better scaling
- Automatic brightness detection instead of hardcoded styles
- Favicon that adapts to browser theme (dark/light mode)
- Animated logo transition effect

## Build Status

✅ Both logo files copied to public folder
✅ Layout component updated with adaptive logic
✅ Print styles include black logo override
✅ Build successful
✅ Ready for deployment

## File Changes

**New Files:**
- `public/images/1712 Logo white.png`
- `public/images/1712 Logo black.png`

**Modified Files:**
- `src/components/Layout.jsx` - Added adaptive logo logic
- `src/index.css` - Added print logo override
