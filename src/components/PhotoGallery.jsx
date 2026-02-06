import { motion } from 'framer-motion'
import { useState } from 'react'
import Lightbox from './Lightbox'

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const photos = [
    {
      id: 1,
      src: '/1.jpg',
      orientation: 'portrait',
      caption: 'Your radiant glow that lights up my world',
    },
    {
      id: 2,
      src: '/2.JPG',
      orientation: 'landscape',
      caption: 'Beautiful moments we share together',
    },
    {
      id: 3,
      src: '/3.JPG',
      orientation: 'portrait',
      caption: 'You bring color to every day',
    },
    {
      id: 4,
      src: '/4.JPG',
      orientation: 'landscape',
      caption: 'Making memories that last forever',
    },
    {
      id: 5,
      src: '/5.jpg',
      orientation: 'portrait',
      caption: 'Your elegance and grace',
    },
    {
      id: 7,
      src: '/7.jpg',
      orientation: 'landscape',
      caption: 'You shine brighter than any star',
    },
    {
      id: 6,
      src: '/8.jpg',
      orientation: 'portrait',
      caption: 'Every moment with you is precious',
    },
    {
      id: 8,
      src: '/6.jpg',
      orientation: 'landscape',
      caption: 'Celebrating the amazing person you are',
    },
    {
      id: 9,
      src: '/9.jpg',
      orientation: 'portrait',
      caption: 'Beautiful inside and out',
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">
        ✨
      </div>
      <div className="absolute top-32 right-16 text-5xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        💫
      </div>
      <div className="absolute bottom-20 left-1/4 text-5xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}>
        🌟
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 mb-4 font-playfair">
            Beautiful Moments
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 font-lora">
            Celebrating you through cherished memories 💝
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`relative group cursor-pointer ${
                photo.orientation === 'portrait' ? 'md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(photo)}
            >
              {/* Photo card with frame */}
              <div className="relative bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-pink-100">
                {/* Sparkle decoration */}
                <motion.div
                  className="absolute -top-2 -right-2 text-2xl z-10"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  ✨
                </motion.div>

                {/* Image container */}
                <div className="relative overflow-hidden rounded-xl">
                  <motion.div
                    className={`relative ${
                      photo.orientation === 'portrait'
                        ? 'aspect-[3/4]'
                        : 'aspect-[4/3]'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-rose-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4"
                    initial={false}
                  >
                    <div className="text-white text-center">
                      <p className="text-sm sm:text-base font-medium mb-2">
                        Click to view
                      </p>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🔍
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Caption */}
                <div className="mt-3 px-2">
                  <p className="text-sm sm:text-base text-gray-700 text-center font-lora italic line-clamp-2">
                    "{photo.caption}"
                  </p>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-pink-400 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-pink-400 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-pink-400 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-pink-400 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-block bg-gradient-to-r from-pink-100 via-rose-100 to-amber-100 rounded-full px-8 py-4 shadow-lg border-2 border-pink-200">
            <p className="text-lg sm:text-xl text-gray-800 font-medium">
              Every photo tells a story of how amazing you are 💕
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  )
}

export default PhotoGallery
