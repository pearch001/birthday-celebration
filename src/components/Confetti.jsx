import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState([])

  useEffect(() => {
    // Reduce confetti count on mobile for better performance
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 30 : 50

    const pieces = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      color: ['#ff6b9d', '#ffd93d', '#6bcf7f', '#a78bfa', '#f472b6', '#fbbf24'][Math.floor(Math.random() * 6)],
      size: Math.random() * 8 + 4,
      rotate: Math.random() * 360,
    }))
    setConfettiPieces(pieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: '-10%',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, (Math.random() - 0.5) * 100],
            rotate: [piece.rotate, piece.rotate + 360 * 3],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
