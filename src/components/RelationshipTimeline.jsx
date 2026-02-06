import { motion } from 'framer-motion'

const RelationshipTimeline = () => {
  const moments = [
    {
      id: 1,
      emoji: '💕',
      title: 'Our Beginning',
      date: 'October 11th, 2025',
      caption: 'The day our journey together began',
      bgColor: 'bg-gradient-to-br from-pink-200 to-rose-300'
    },
    {
      id: 2,
      src: '/firstMemory.JPG',
      title: 'First Memory',
      date: 'August 23rd, 2025',
      caption: 'Our first date to the arcade. Where it all began with games, laughter, and endless fun',
    },
    {
      id: 3,
      src: '/specialMemory.JPG',
      title: 'Special Memory',
      date: 'August 23rd, 2025',
      caption: 'Singing karaoke together and discovering you have the most amazing voice *laughs*',
    },
    {
      id: 4,
      emoji: '🎂',
      title: 'Your Birthday',
      date: 'February 6th, 2026',
      caption: 'Celebrating you and all our beautiful moments together',
      bgColor: 'bg-gradient-to-br from-pink-300 to-rose-300'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50/50 via-pink-50/50 to-amber-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-3 font-playfair">
            4 Months of Magic
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-lora italic">
            Our story, leading to your special day
          </p>
        </motion.div>

        {/* Timeline - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="relative">
          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-6">
            {moments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <TimelineCard moment={moment} index={index} total={moments.length} />
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {moments.map((moment, index) => (
                <motion.div
                  key={moment.id}
                  className="w-[280px] flex-shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <TimelineCard moment={moment} index={index} total={moments.length} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connection Line (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 opacity-30 -z-10"></div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-base sm:text-lg text-gray-600 font-lora italic">
            Four months down, forever to go 💕
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

// Timeline Card Component
const TimelineCard = ({ moment, index, total }) => {
  return (
    <div className="relative">
      {/* Timeline Dot (Desktop) */}
      <motion.div
        className="hidden md:flex absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full items-center justify-center shadow-lg z-10 border-4 border-white"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
      >
        <span className="text-white text-xl font-bold">{index + 1}</span>
      </motion.div>

      {/* Card */}
      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300 h-full"
        whileHover={{ y: -5 }}
      >
        {/* Image Placeholder */}
        <div className={`${moment.bgColor || 'bg-gradient-to-br from-rose-200 to-amber-200'} rounded-xl aspect-square flex items-center justify-center mb-4 overflow-hidden`}>
          {moment.src ? (
            <img
              src={moment.src}
              alt={moment.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.span
              className="text-5xl sm:text-6xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              {moment.emoji}
            </motion.span>
          )}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-800 font-playfair">
            {moment.title}
          </h3>
          <p className="text-sm text-pink-600 font-medium">
            {moment.date}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed font-lora">
            {moment.caption}
          </p>
        </div>

        {/* Decorative element */}
        <motion.div
          className="absolute top-3 right-3 text-xl opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          ✨
        </motion.div>
      </motion.div>

      {/* Arrow connector (Desktop) */}
      {index < total - 1 && (
        <div className="hidden md:block absolute top-24 -right-3 text-2xl text-pink-300 z-20">
          →
        </div>
      )}
    </div>
  )
}

export default RelationshipTimeline
