import { motion } from 'framer-motion'

const AppreciationCard = ({ emoji, title, description, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-pink-100 hover:border-pink-300 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)"
      }}
    >
      {/* Icon/Emoji */}
      <motion.div
        className="mb-4 text-5xl sm:text-6xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        {emoji}
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        {description}
      </p>

      {/* Decorative sparkle */}
      <motion.div
        className="absolute top-2 right-2 text-xl opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ✨
      </motion.div>
    </motion.div>
  )
}

export default AppreciationCard
