import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const FloatingElements = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Reduce elements on mobile for better performance
  const allElements = [
    { emoji: '🎈', x: '10%', delay: 0 },
    { emoji: '🎉', x: '20%', delay: 0.5 },
    { emoji: '✨', x: '80%', delay: 1 },
    { emoji: '🎂', x: '90%', delay: 1.5 },
    { emoji: '💖', x: '15%', delay: 2 },
    { emoji: '🎁', x: '85%', delay: 2.5 },
    { emoji: '🌟', x: '5%', delay: 3 },
    { emoji: '🎊', x: '95%', delay: 3.5 },
  ]

  const elements = isMobile ? allElements.slice(0, 4) : allElements

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl sm:text-4xl md:text-5xl opacity-30"
          style={{ left: element.x }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: ['-10vh', '-10vh'],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'linear',
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements
