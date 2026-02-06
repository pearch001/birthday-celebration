import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isToday, setIsToday] = useState(false)

  // Set the birthday date: February 6, 2026
  const birthdayDate = new Date('2026-02-06T00:00:00')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = birthdayDate - now

      if (difference <= 0) {
        setIsToday(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Don't show countdown if it's already the birthday
  if (isToday) {
    return null
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
    <motion.div
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[80] max-w-full px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-pink-200 p-4 sm:p-6">
        {/* Title */}
        <p className="text-center text-sm sm:text-base text-gray-700 font-semibold mb-3">
          🎂 Countdown to the Special Day 🎂
        </p>

        {/* Timer Grid */}
        <div className="flex gap-2 sm:gap-4 justify-center">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
            >
              {/* Number Display */}
              <motion.div
                className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-xl p-2 sm:p-3 min-w-[50px] sm:min-w-[70px] shadow-lg"
                animate={{
                  scale: unit.label === 'Seconds' ? [1, 1.05, 1] : 1
                }}
                transition={{
                  duration: 1,
                  repeat: unit.label === 'Seconds' ? Infinity : 0
                }}
              >
                <span className="text-2xl sm:text-4xl font-bold block text-center">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </motion.div>

              {/* Label */}
              <span className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Decorative sparkles */}
        <div className="flex justify-center gap-2 mt-3 text-lg">
          <motion.span
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨
          </motion.span>
          <motion.span
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            💖
          </motion.span>
          <motion.span
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          >
            ✨
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

export default CountdownTimer
