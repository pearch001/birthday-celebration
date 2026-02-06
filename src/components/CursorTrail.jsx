import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CursorTrail = () => {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    // Only add trail on desktop (not mobile)
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    let trailId = 0

    const handleMouseMove = (e) => {
      const newTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
        emoji: ['✨', '💖', '🌟', '💕', '⭐'][Math.floor(Math.random() * 5)]
      }

      setTrails(prev => [...prev, newTrail])

      // Remove trail after animation
      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== newTrail.id))
      }, 1000)
    }

    // Throttle the mousemove event
    let lastTime = 0
    const throttledMouseMove = (e) => {
      const now = Date.now()
      if (now - lastTime > 50) { // Only create trail every 50ms
        handleMouseMove(e)
        lastTime = now
      }
    }

    window.addEventListener('mousemove', throttledMouseMove)

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {trails.map(trail => (
          <motion.div
            key={trail.id}
            className="absolute text-xl"
            initial={{
              x: trail.x,
              y: trail.y,
              opacity: 1,
              scale: 0
            }}
            animate={{
              y: trail.y - 50,
              opacity: 0,
              scale: 1
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              left: 0,
              top: 0,
              transform: `translate(${trail.x}px, ${trail.y}px)`
            }}
          >
            {trail.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default CursorTrail
