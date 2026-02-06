# Birthday Celebration Website 🎉

A stunning, fully-animated birthday celebration website built with React, Vite, Tailwind CSS, and Framer Motion. Features a beautiful single-page design with multiple sections celebrating her special day.

## ✨ Features

### 🎨 Visual Design
- Beautiful romantic gradient backgrounds (pink, rose, amber)
- Elegant typography (Playfair Display, Lora, Dancing Script)
- Animated confetti and floating birthday elements
- Interactive cursor trail with sparkles (desktop)
- Loading splash screen with progress bar

### 💝 Content Sections
1. **Hero Section** - Stunning entrance with birthday message
2. **Appreciation Cards** - 6 cards highlighting her amazing qualities
3. **Birthday Letter** - Heartfelt letter in elegant card design
4. **Photo Gallery** - 9 photo placeholders with lightbox
5. **Relationship Timeline** - 4 months of memories together
6. **Spotify Integration** - Shared playlist for your soundtrack
7. **Final Message** - Beautiful closing with floating hearts

### 🎵 Interactive Features
- Background music toggle (pink floating button)
- Birthday countdown timer (auto-hides on Feb 6)
- Lightbox photo gallery
- Smooth scroll animations
- Hover effects throughout
- Mobile-optimized animations

### ⚡ Performance
- Optimized bundle: ~100KB gzipped
- Code splitting (React, Framer Motion chunked)
- Mobile-first responsive design
- Reduced animations on mobile
- 95+ Lighthouse score

### 📅 Dates
- 🎂 Birthday: February 6th, 2026
- 💕 Dating Anniversary: October 11th, 2025 (4 months)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Quick Deploy

See **[QUICKSTART.md](QUICKSTART.md)** for 5-minute deployment guide.

### TL;DR:
```bash
npm run build
vercel --prod
```

### Full Documentation:
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Complete deployment guide
- **[PERFORMANCE.md](PERFORMANCE.md)** - Performance analysis
- **[QUICKSTART.md](QUICKSTART.md)** - Fast deployment steps

## 📁 Project Structure

```
birthday/
├── public/
│   └── music/              # Background music files
├── src/
│   ├── components/
│   │   ├── AppreciationCard.jsx
│   │   ├── BirthdayLetter.jsx
│   │   ├── Confetti.jsx
│   │   ├── CountdownTimer.jsx
│   │   ├── CursorTrail.jsx
│   │   ├── FinalMessage.jsx
│   │   ├── FloatingElements.jsx
│   │   ├── Lightbox.jsx
│   │   ├── LoadingSplash.jsx
│   │   ├── MusicToggle.jsx
│   │   ├── PhotoGallery.jsx
│   │   ├── RelationshipTimeline.jsx
│   │   ├── ScrollIndicator.jsx
│   │   └── SpotifySection.jsx
│   ├── App.jsx              # Main application
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template with meta tags
├── vite.config.js           # Vite build configuration
├── tailwind.config.js       # Tailwind + custom fonts
├── vercel.json              # Vercel deployment config
├── DEPLOYMENT.md            # Full deployment guide
├── PERFORMANCE.md           # Performance report
└── QUICKSTART.md            # Quick start guide
```

## 🛠️ Technologies Used

- **React 18.3** - UI library
- **Vite 5.4** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 11** - Animation library
- **Terser** - JavaScript minification
- **Google Fonts** - Playfair Display, Lora, Dancing Script
- **Vercel** - Deployment platform

## 📝 Customization Checklist

Before deploying:
- [ ] Replace `[Her Name]` in `src/App.jsx`
- [ ] Replace `[Your Name]` in letter and final message
- [ ] Update Spotify playlist URL in `src/components/SpotifySection.jsx`
- [ ] Add background music to `public/music/birthday-song.mp3`
- [ ] Update timeline memories in `src/components/RelationshipTimeline.jsx`
- [ ] (Optional) Replace photo placeholders with real images
- [ ] Update meta tags URLs in `index.html`

## 🎯 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 📊 Bundle Size

| Asset | Size | Gzipped |
|-------|------|---------|
| HTML | 2.43 KB | 0.82 KB |
| CSS | 33.50 KB | 6.00 KB |
| JS (main) | 48.51 KB | 11.88 KB |
| JS (framer-motion) | 121.83 KB | 39.14 KB |
| JS (react-vendor) | 132.73 KB | 42.75 KB |
| **Total** | **336.57 KB** | **~100 KB** |

## 🤝 Contributing

This is a personal birthday project. Feel free to fork and customize for your own celebrations!

## 📄 License

Private project - all rights reserved

---

**Made with 💖 for a special birthday celebration**
