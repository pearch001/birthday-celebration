import { motion } from 'framer-motion'

const BirthdayLetter = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #f9a8d4 0, #f9a8d4 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Letter Container */}
          <div className="bg-gradient-to-br from-white via-rose-50/30 to-amber-50/30 rounded-3xl shadow-2xl border-8 border-double border-pink-200 overflow-hidden">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-pink-200 via-rose-200 to-amber-200 py-8 px-6 sm:px-10 relative">
              <motion.div
                className="absolute top-4 left-4 text-3xl"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎀
              </motion.div>
              <motion.div
                className="absolute top-4 right-4 text-3xl"
                animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                🎀
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-playfair text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-rose-700">
                A Birthday Letter to You
              </h2>
              <p className="text-center mt-2 text-pink-700/70 font-lora italic text-lg">
                On this special day, February 6th, 2026
              </p>
            </div>

            {/* Letter Content */}
            <div className="p-8 sm:p-12 lg:p-16">
              {/* Image placeholder */}
              <motion.div
                className="float-right ml-6 mb-6 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <img
                  src="/MonCheriLL.jpg"
                  alt="Mon Cheri"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="font-lora text-gray-800 space-y-6 text-base sm:text-lg leading-relaxed">
                {/* Paragraph 1 - Birthday Wishes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-pink-600 first-letter:float-left first-letter:mr-3 first-letter:font-playfair">
                    Happy birthday to the most incredible person I know! Today isn't just another day on the calendar - it's a celebration of you, of everything you are, and everything you bring into this world. As I write this, my heart is full of joy knowing that I get to be part of your life and witness the beautiful person you continue to become. You deserve all the happiness, love, and magic that this special day brings.
                  </p>
                </motion.div>

                {/* Paragraph 2 - What Makes Her Special */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p>
                    What makes you so incredibly wholesome and amazing is the way you exist in this world with such genuine authenticity. Your kindness isn't forced - it flows naturally from who you are. Your smile doesn't just light up a room; it creates warmth that stays with people long after you've gone. The way you care for others, the thoughtfulness in your actions, and the pure joy you find in life's simple moments - these are the qualities that make you extraordinary. You have this rare ability to make everyone around you feel valued, seen, and loved.
                  </p>
                </motion.div>

                {/* Paragraph 3 - Birthday Hopes and Dreams */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p>
                    As you step into this new year of your life, my wish for you is that every dream you hold in your heart comes true. I hope this year brings you countless moments of joy, adventures that take your breath away, and opportunities that allow you to shine even brighter. May you continue to grow, learn, and discover new passions. May you always know your worth and never settle for anything less than the incredible things you deserve. And may every day ahead be filled with the same light and love that you so generously share with the world.
                  </p>
                </motion.div>

                {/* Paragraph 4 - Gratitude */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p>
                    I am so incredibly grateful to be here celebrating this special day with you. These past four months since October 11th, 2025, have been nothing short of magical. Getting to know you, sharing moments both big and small, laughing until our sides hurt, and building these memories together - it's all been such a beautiful gift. Thank you for letting me be part of your journey, for trusting me with your heart, and for making every single day brighter just by being you.
                  </p>
                </motion.div>

                {/* Paragraph 5 - Her Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <p>
                    You've changed my life in ways I never expected. You've taught me to see beauty in the everyday, to laugh more freely, to care more deeply. Your presence has brought a sense of peace and joy that I didn't know was possible. You inspire me to be better, to dream bigger, and to love more openly. The way you navigate life with such grace, strength, and optimism has shown me what it truly means to live fully. You are, without a doubt, one of the most precious people in my life, and I am forever grateful for you.
                  </p>
                </motion.div>

                {/* Signature */}
                <motion.div
                  className="mt-12 text-right"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <p className="text-gray-700 mb-3">
                    With all my love and the warmest birthday wishes,
                  </p>
                  <p className="font-dancing text-3xl sm:text-4xl text-pink-700 font-bold">
                    Your Baby
                  </p>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    February 6th, 2026
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Decorative Footer */}
            <div className="bg-gradient-to-r from-pink-200 via-rose-200 to-amber-200 py-6 px-6 flex justify-center gap-4 text-3xl">
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                💐
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                🎂
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                💝
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
              >
                🎉
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BirthdayLetter
