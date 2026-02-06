import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden'

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  if (!image) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-4xl font-light hover:scale-110 transition-transform z-10 w-12 h-12 flex items-center justify-center"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* Image container */}
        <motion.div
          className="relative max-w-6xl max-h-[90vh] w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative sparkles */}
          <motion.div
            className="absolute -top-8 -left-8 text-4xl"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute -bottom-8 -right-8 text-4xl"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            ✨
          </motion.div>

          <div className="bg-white rounded-2xl p-4 shadow-2xl">
            <div className={`${image.bgColor} rounded-xl overflow-hidden flex items-center justify-center`} style={{ aspectRatio: image.orientation === 'portrait' ? '3/4' : '4/3' }}>
              <span className="text-8xl md:text-9xl">{image.placeholder}</span>
            </div>

            {image.caption && (
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-800 text-lg md:text-xl font-lora italic">
                  "{image.caption}"
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Lightbox
