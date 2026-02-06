import { motion } from 'framer-motion'

const FinalMessage = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {['❤️', '💕', '💖', '💝', '💗'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Main Message Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border-4 border-pink-200">
            {/* Decorative top elements */}
            <div className="flex justify-center gap-4 mb-8">
              <motion.span
                className="text-5xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                🎂
              </motion.span>
              <motion.span
                className="text-5xl"
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
              >
                🎉
              </motion.span>
              <motion.span
                className="text-5xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                🎈
              </motion.span>
            </div>

            {/* Main heading */}
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 mb-6 font-playfair leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Happy Birthday Again,
              <br />
              My Love ❤️
            </motion.h2>

            {/* Closing message */}
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-lora leading-relaxed">
                Today we celebrate you, and I couldn't be more grateful
                to share this special moment with you.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-lora leading-relaxed">
                Here's to celebrating many more birthdays together,
                making countless more memories, and growing even closer
                with each passing day.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 font-bold font-playfair">
                You make every day feel like a celebration 💕
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              className="border-t-2 border-pink-200 pt-8 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-700 text-lg mb-3">
                Forever yours,
              </p>
              <p className="font-dancing text-4xl sm:text-5xl text-pink-700 font-bold">
                Your Baby
              </p>
            </motion.div>

            {/* Decorative bottom elements */}
            <div className="flex justify-center gap-3 mt-8 text-3xl">
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                ✨
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                💝
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                ✨
              </motion.span>
            </div>
          </div>

          {/* Fade out effect at bottom */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <p className="text-gray-600 text-lg font-lora italic">
              February 6th, 2026 • A day to remember forever
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient fade overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-100 to-transparent pointer-events-none"></div>
    </section>
  )
}

export default FinalMessage
