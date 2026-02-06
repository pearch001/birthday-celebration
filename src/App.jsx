import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Confetti from './components/Confetti'
import ScrollIndicator from './components/ScrollIndicator'
import FloatingElements from './components/FloatingElements'
import AppreciationCard from './components/AppreciationCard'
import BirthdayLetter from './components/BirthdayLetter'
import PhotoGallery from './components/PhotoGallery'
import RelationshipTimeline from './components/RelationshipTimeline'
import SpotifySection from './components/SpotifySection'
import FinalMessage from './components/FinalMessage'
import CursorTrail from './components/CursorTrail'
import MusicToggle from './components/MusicToggle'
import CountdownTimer from './components/CountdownTimer'
import LoadingSplash from './components/LoadingSplash'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsLoaded(true)
    }
  }, [])

  const handleLoadComplete = () => {
    setIsLoaded(true)
    // Show confetti after load
    setTimeout(() => setShowConfetti(true), 500)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <>
      {/* Loading Splash Screen */}
      <LoadingSplash onLoadComplete={handleLoadComplete} />

      {/* Main Content */}
      {isLoaded && (
        <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 via-amber-50 to-yellow-100">
          {/* Interactive Elements */}
          <CursorTrail />
          <MusicToggle />
          <CountdownTimer />

          {/* Confetti - only show after load */}
          {showConfetti && <Confetti />}
          <FloatingElements />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Date Display */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-amber-600/80">
              February 6th, 2026
            </p>
          </motion.div>

          {/* Main Birthday Message */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 mb-4 leading-tight"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Happy Birthday, Mon Cheri! 🎉
            </motion.h1>
          </motion.div>

          {/* Circular Image Placeholder */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mb-8 flex justify-center"
          >
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/MonCheri.jpg"
                alt="Mon Cheri"
                className="w-full h-full object-cover"
              />
              {/* Sparkle effects around image */}
              <motion.div
                className="absolute -top-2 -right-2 text-3xl"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 text-3xl"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ✨
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600 mb-4">
              To the most amazing person in my life
            </p>
          </motion.div>

          {/* Birthday Cake Animation */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="mb-12"
          >
            <motion.div
              className="text-6xl sm:text-7xl md:text-8xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              🎂
            </motion.div>
            <motion.div
              className="flex justify-center items-center gap-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-2xl inline-block"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  🕯️
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>

        <ScrollIndicator />
      </section>

      {/* Message Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border-4 border-white">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
              Today marks a special day - your birthday! 🎂
              <br />
              <br />
              On this beautiful day, I want to celebrate everything that makes you amazing.
              Your smile brightens every moment, and being with you has brought so much joy into my life.
            </p>
          </div>

          <motion.div
            className="bg-gradient-to-br from-pink-200/80 via-rose-200/80 to-amber-200/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border-4 border-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed text-center font-medium">
              💕 4 Months Together 💕
              <br />
              <br />
              Since October 11th, 2025, every day with you has been a gift.
              <br />
              Here's to many more beautiful moments, laughter, and memories together.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-5xl sm:text-6xl md:text-7xl pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.15, 1, 1.15, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              🎈
            </motion.span>
            <motion.span
              animate={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.15, 1, 1.15, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0.2
              }}
            >
              🎁
            </motion.span>
            <motion.span
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0.4
              }}
            >
              💖
            </motion.span>
            <motion.span
              animate={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.15, 1, 1.15, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0.6
              }}
            >
              💝
            </motion.span>
          </motion.div>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600">
              Wishing you the most wonderful birthday! 🌟
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Appreciation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 mb-4">
              Why You're So Special
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto">
              Celebrating all the amazing qualities that make you uniquely wonderful
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AppreciationCard
              emoji="😊"
              title="Your Smile"
              description="Your smile lights up every room you enter. It's contagious, genuine, and has the power to turn any bad day into a beautiful one. The way your eyes sparkle when you laugh is my favorite thing in the world."
              delay={0}
            />

            <AppreciationCard
              emoji="💝"
              title="Your Kindness"
              description="Your compassionate heart and gentle nature make everyone around you feel valued and loved. You have this incredible ability to see the good in people and situations, always spreading warmth wherever you go."
              delay={0.15}
            />

            <AppreciationCard
              emoji="✨"
              title="Your Energy"
              description="Your positive energy is absolutely magnetic. You bring life, excitement, and joy to every moment we share. Being around you feels like being wrapped in sunshine your so warm, bright, and endlessly uplifting."
              delay={0.3}
            />

            <AppreciationCard
              emoji="🌟"
              title="Your Authenticity"
              description="You're genuinely yourself, and that's such a rare and beautiful gift. Your authenticity, your quirks, your unique perspective on life. Everything about you is wonderfully, perfectly you."
              delay={0.45}
            />

            <AppreciationCard
              emoji="💖"
              title="Your Support"
              description="You're always there with encouragement, understanding, and unwavering support. You believe in me even when I doubt myself, and your faith gives me strength. Having you by my side makes everything better."
              delay={0.6}
            />

            <AppreciationCard
              emoji="🎨"
              title="Your Uniqueness"
              description="Everything about you is soo special  the way you think, the things you love, the dreams you chase. You bring color and beauty into the world simply by being who you are, and I'm so grateful to witness it."
              delay={0.75}
            />
          </div>

          {/* Closing Message */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-pink-200/60 via-rose-200/60 to-amber-200/60 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-white max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                These are just a few of the countless reasons why you're so incredibly special to me.
                <br />
                <br />
                Every day with you is a gift, and today we celebrate the amazing person you are! 🎉💕
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Birthday Letter Section */}
      <BirthdayLetter />

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Relationship Timeline Section */}
      <RelationshipTimeline />

      {/* Spotify Section */}
      <SpotifySection />

      {/* Final Message Section */}
      <FinalMessage />

      {/* Footer */}
      <footer className="py-12 text-center bg-gradient-to-br from-pink-50 to-rose-50 border-t-2 border-pink-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <p className="text-gray-700 text-base font-lora">
            Made with 💖 for your special day
          </p>
          <p className="text-gray-600 text-sm">
            February 6th, 2026
          </p>
          <motion.div
            className="flex justify-center gap-2 text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ❤️
          </motion.div>
        </motion.div>
      </footer>
        </div>
      )}
    </>
  )
}

export default App
