import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const audioRef = useRef(null)

  // Replace with your music file path
  const musicUrl = "/music/birthday-song.mp3" // Add your music file to public/music/

  useEffect(() => {
    // Hide tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(err => {
          console.log("Audio play failed:", err)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src={musicUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music toggle button */}
      <motion.div
        className="fixed bottom-6 right-6 z-[90]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              🎵 Play some music?
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={toggleMusic}
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isPlaying ? {
            boxShadow: [
              "0 0 20px rgba(236, 72, 153, 0.5)",
              "0 0 40px rgba(236, 72, 153, 0.8)",
              "0 0 20px rgba(236, 72, 153, 0.5)"
            ]
          } : {}}
          transition={isPlaying ? { duration: 2, repeat: Infinity } : {}}
        >
          {/* Background animation when playing */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-600"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* Icon */}
          <span className="relative z-10">
            {isPlaying ? '🎵' : '🎶'}
          </span>

          {/* Ripple effect when playing */}
          {isPlaying && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-pink-300"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-rose-300"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
              />
            </>
          )}
        </motion.button>

        {/* Playing indicator */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default MusicToggle
