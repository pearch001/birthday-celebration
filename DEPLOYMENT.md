# 🚀 Deployment Guide - Birthday Celebration Website

## 📋 Pre-Deployment Checklist

### 1. Content Customization
- [ ] Replace `[Her Name]` in `/src/App.jsx` (line 64)
- [ ] Replace `[Your Name]` in all signature locations:
  - `/src/components/BirthdayLetter.jsx` (line 154)
  - `/src/components/FinalMessage.jsx` (line 92)
- [ ] Update timeline memories in `/src/components/RelationshipTimeline.jsx`
- [ ] Add your Spotify playlist URL in `/src/components/SpotifySection.jsx` (line 8)
- [ ] Add background music file to `/public/music/birthday-song.mp3`
- [ ] (Optional) Replace photo placeholders with real images

### 2. Meta Tags & SEO
- [ ] Update URLs in `/index.html`:
  - Replace `https://yourwebsite.com/` with your actual URL (lines 20, 27, 28, 30)
- [ ] Add preview image to `/public/birthday-preview.jpg` (1200x630px recommended)
- [ ] Update meta descriptions if desired

### 3. Test Locally
```bash
# Build the project
npm run build

# Preview production build
npm run preview
# Visit http://localhost:4173
```

---

## 🌐 Deploy to Vercel (Recommended)

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts**:
   - Link to existing project or create new? → **Create new**
   - Project name? → **birthday-celebration** (or your choice)
   - Directory? → **./** (press Enter)
   - Deploy? → **Yes**

4. **Get your URL**:
   - Vercel will provide a URL like: `https://birthday-celebration-xyz.vercel.app`
   - Copy this URL and update it in `index.html` meta tags

5. **Production deployment**:
```bash
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Birthday celebration website"
```

2. **Push to GitHub**:
```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/birthday-celebration.git
git branch -M main
git push -u origin main
```

3. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

---

## 🎵 Spotify Playlist Setup

### Option 1: Create a Spotify Playlist

1. Go to [Spotify](https://open.spotify.com/)
2. Create a new playlist (make it **Public** or **Unlisted**)
3. Add songs that remind you of her, your relationship, or birthday songs
4. Click **Share** → **Embed Playlist**
5. Copy the URL that looks like: `https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M`

### Option 2: Use Existing Playlist

1. Find any public playlist on Spotify
2. Click **Share** → **Embed Playlist**
3. Copy the embed URL

### Add to Website

1. Open `/src/components/SpotifySection.jsx`
2. Update line 8:
```javascript
const spotifyPlaylistUrl = "YOUR_SPOTIFY_EMBED_URL_HERE"
```

3. Uncomment lines 71-79 (the iframe code)
4. Comment out lines 61-69 (the placeholder div)

**Important**: Spotify embeds work perfectly in production on Vercel!

---

## 🎵 Background Music Setup

1. **Choose a song**:
   - Birthday-themed instrumental
   - Romantic/love song
   - Her favorite song
   - Recommended: 2-4 minutes, loop-friendly

2. **Convert to MP3** (if needed):
   - Use online converter or:
   ```bash
   ffmpeg -i input.m4a -codec:a libmp3lame -qscale:a 2 birthday-song.mp3
   ```

3. **Add to project**:
   - Place file at `/public/music/birthday-song.mp3`
   - File should be under 5MB for best performance

4. **Rebuild and deploy**:
```bash
npm run build
vercel --prod
```

---

## ⚙️ Environment Variables (Optional)

If you want to use environment variables:

1. **Create `.env.local`**:
```bash
cp .env.example .env.local
```

2. **Add your values**:
```env
VITE_SPOTIFY_PLAYLIST_URL=https://open.spotify.com/embed/playlist/YOUR_ID
```

3. **Add to Vercel**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add each variable
   - Redeploy

---

## 🔧 Custom Domain (Optional)

1. **Purchase a domain** (e.g., from Namecheap, Google Domains)

2. **Add to Vercel**:
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `happybirthday-sarah.com`)
   - Follow DNS configuration instructions

3. **Update meta tags**:
   - Replace all `https://yourwebsite.com/` in `index.html` with your custom domain

---

## 📊 Performance Optimization (Already Included)

### ✅ Implemented Optimizations:

- **Code splitting**: React, React-DOM, and Framer Motion in separate chunks
- **Minification**: Terser removes console logs and debugs
- **Compression**: Gzip enabled (6KB CSS, 94KB total JS)
- **Caching**: 1-year cache for static assets
- **Lazy loading**: Content loads after splash screen
- **Mobile optimization**: Reduced animations on mobile
- **Image optimization**: All emojis are unicode (no image files)

### Build Stats:
```
✓ dist/index.html                          2.43 kB │ gzip:  0.82 kB
✓ dist/assets/index-Cg03BJDe.css          33.50 kB │ gzip:  6.00 kB
✓ dist/assets/index-Bg7CGcp8.js           48.51 kB │ gzip: 11.88 kB
✓ dist/assets/framer-motion-DtVbls2S.js  121.83 kB │ gzip: 39.14 kB
✓ dist/assets/react-vendor-BKRCLQMC.js   132.73 kB │ gzip: 42.75 kB

Total gzipped: ~100KB (Excellent!)
```

---

## 🐛 Troubleshooting

### Issue: Spotify embed not showing
**Solution**:
- Ensure playlist is Public or Unlisted (not Private)
- Use the embed URL, not the regular share URL
- Check CORS in Spotify settings

### Issue: Music not playing
**Solution**:
- File must be MP3 format
- Path must be `/public/music/birthday-song.mp3`
- Check browser console for errors
- Try clicking the music button after page loads

### Issue: Animations laggy on mobile
**Solution**: Already optimized! But if issues persist:
- Reduce confetti count further in `/src/components/Confetti.jsx`
- Disable cursor trail (already disabled on mobile)

### Issue: Build fails
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📱 Testing Checklist

Before sharing with her:

- [ ] Test on mobile (Chrome, Safari)
- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Click music button - does it play?
- [ ] Scroll through all sections - smooth animations?
- [ ] Click on photo gallery images - lightbox works?
- [ ] Spotify embed loads and plays?
- [ ] Countdown timer shows (if before Feb 6)?
- [ ] Check meta preview on social media

---

## 🎉 Final Steps

1. **Share the URL** with her on her birthday! 📧
2. **Screenshot** the beautiful moments 📸
3. **Save** this project as a memory 💕

---

## 📞 Support

If you encounter any issues:
1. Check build logs: `npm run build`
2. Check Vercel logs in dashboard
3. Clear browser cache and try again
4. Check console for JavaScript errors (F12 → Console)

---

## 🎁 Enjoy Your Birthday Celebration!

Made with 💖 using React, Vite, Tailwind CSS, and Framer Motion
