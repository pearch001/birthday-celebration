import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingSplash = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            if (onLoadComplete) onLoadComplete()
          }, 500)
          return 100
        }
        return prev + 10
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-amber-200"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {['🎈', '🎉', '🎂', '💕', '✨'][i % 5]}
              </motion.div>
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center px-4">
            {/* Birthday cake animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.div
                className="text-8xl sm:text-9xl mb-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                🎂
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 mb-4 font-playfair"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Happy Birthday! 🎉
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl sm:text-2xl text-gray-700 mb-8 font-lora"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Preparing your special celebration...
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-white/50 rounded-full h-3 overflow-hidden shadow-lg border-2 border-pink-200">
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-medium">
                {progress}%
              </p>
            </motion.div>

            {/* Floating hearts */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 text-3xl">
              <motion.span
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                💕
              </motion.span>
              <motion.span
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                💖
              </motion.span>
              <motion.span
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                💝
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingSplash
