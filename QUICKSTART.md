# 🚀 Quick Start - Deploy in 5 Minutes

## Prerequisites
- Node.js installed
- Content customized (names, dates, messages)
- (Optional) Spotify playlist ready
- (Optional) Background music file

---

## 📝 Step 1: Final Customizations (2 min)

### Required:
1. **Replace names**:
   ```bash
   # Search and replace in your editor:
   [Her Name] → Her actual name
   [Your Name] → Your name
   ```

2. **Verify dates**:
   - Birthday: February 6th, 2026 ✓
   - Dating anniversary: October 11th, 2025 ✓

### Optional:
3. **Add Spotify playlist** (1 min):
   - Get embed URL from Spotify
   - Update `src/components/SpotifySection.jsx` line 8
   - Uncomment iframe code (lines 71-79)

4. **Add background music**:
   - Place MP3 at `public/music/birthday-song.mp3`

---

## 🏗️ Step 2: Build (1 min)

```bash
npm run build
```

Expected output:
```
✓ dist/index.html                          2.43 kB │ gzip:  0.82 kB
✓ dist/assets/index-Cg03BJDe.css          33.50 kB │ gzip:  6.00 kB
✓ dist/assets/index-Bg7CGcp8.js           48.51 kB │ gzip: 11.88 kB
✓ dist/assets/framer-motion-DtVbls2S.js  121.83 kB │ gzip: 39.14 kB
✓ dist/assets/react-vendor-BKRCLQMC.js   132.73 kB │ gzip: 42.75 kB
✓ built in 5.65s
```

---

## 🌐 Step 3: Deploy to Vercel (2 min)

### Option A: Vercel CLI (Fastest)
```bash
# Install Vercel CLI if needed
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Option B: GitHub + Dashboard
```bash
# Initialize git
git init
git add .
git commit -m "Birthday celebration website"

# Push to GitHub
git remote add origin https://github.com/yourusername/birthday.git
git push -u origin main

# Then: Import on vercel.com
```

---

## ✅ Step 4: Final Checks (1 min)

Visit your deployed URL and check:
- [ ] Loading splash screen appears
- [ ] Confetti animation works
- [ ] All sections load smoothly
- [ ] Music button works (if added)
- [ ] Spotify embed loads (if added)
- [ ] Mobile view looks good
- [ ] Countdown timer shows (if before Feb 6)

---

## 🎉 Done!

Your URL: `https://your-project.vercel.app`

**Share with her on her birthday!** 💕

---

## 🆘 Need Help?

See detailed guides:
- **DEPLOYMENT.md** - Full deployment instructions
- **PERFORMANCE.md** - Performance analysis
- **README.md** - Project overview

Common issues:
- **Music not playing?** Check file path: `public/music/birthday-song.mp3`
- **Spotify not showing?** Ensure playlist is Public/Unlisted
- **Build fails?** Run: `rm -rf node_modules && npm install`
