// src/sections/ContactSection.tsx
import { motion } from 'framer-motion';

export const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-ebcNavy to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/20 rounded-full mb-6 mx-auto"
          >
            <div className="w-2 h-2 bg-ebcGold rounded-full animate-pulse" />
            <span className="text-ebcGold font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-ebcGold/70 bg-clip-text text-transparent"
          >
            Let's Build Something <span className="text-ebcGold">Transformative</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-16"
          >
            Partner with EBC to design and deliver evidence-based solutions that create sustainable impact.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Start the Conversation</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-white/50 focus:border-ebcGold focus:outline-none focus:ring-2 focus:ring-ebcGold/50 transition-all" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-white/50 focus:border-ebcGold focus:outline-none focus:ring-2 focus:ring-ebcGold/50 transition-all" placeholder="your.email@example.com" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Organization</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-white/50 focus:border-ebcGold focus:outline-none focus:ring-2 focus:ring-ebcGold/50 transition-all" placeholder="Your organization" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input type="tel" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-white/50 focus:border-ebcGold focus:outline-none focus:ring-2 focus:ring-ebcGold/50 transition-all" placeholder="+254..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-white/50 focus:border-ebcGold focus:outline-none focus:ring-2 focus:ring-ebcGold/50 transition-all resize-vertical" placeholder="Tell us about your project..." />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-ebcGold text-ebcNavy px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Reach Out Directly</h3>
              <p className="text-white/80 mb-8 leading-relaxed">Ready to discuss your project? Connect with our Principal Consultant.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-ebcGold/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ebcGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:andrew@empoweringbridge.com" className="text-ebcGold hover:text-white transition-colors text-lg font-medium block group-hover:underline">andrew@empoweringbridge.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-ebcEmerald/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ebcEmerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 01 1.21-.502l4.493 1.498a1 1 0 01.684 .948V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+254722123456" className="text-ebcEmerald hover:text-white transition-colors text-lg font-medium block group-hover:underline">+254 722 123 456</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-ebcGold/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ebcGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a1.799 1.799 0 00-2.727 2.727l4.243 4.243a1.799 1.799 0 002.727-2.727zM5.105 6.375nM17.657 16.657L13.414 12.414a1.799 1.799 0 00-2.727 2.727l4.243 4.243a1.799 1.799 0 002.727-2.727z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a href="#" className="text-ebcGold hover:text-white transition-colors text-lg font-medium block group-hover:underline">Andrew Wafula</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-ebcGold text-ebcNavy px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            ↑ Back to Top
          </motion.button>
        </div>
      </div>
    </section>
  );
};

