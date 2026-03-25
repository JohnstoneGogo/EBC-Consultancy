// src/sections/AboutSection.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Professional Picture */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-ebcNavy/10 to-ebcGold/10 p-2">
                  <img 
                    src="/src/assets/andrew.jpeg" 
                    alt="Andrew Wanjala Wafula - Founder"
                    className="w-full h-full object-cover rounded-xl"
                    loading="eager"
                  />
                </div>
                
                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-ebcGold/20 rounded-2xl pointer-events-none" />
              </div>
              
              {/* Floating Quote Card */}
              <motion.div
                className="absolute -bottom-8 -right-12 bg-white rounded-xl shadow-xl p-6 max-w-xs border-l-4 border-ebcGold z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="text-4xl text-ebcGold mb-2">"</div>
                <p className="text-ebcGray text-sm italic leading-relaxed">
                  I believe sustainable development happens at the intersection — where economic opportunity meets health systems.
                </p>
                <p className="text-xs font-semibold text-ebcNavy mt-3">
                  — Andrew Wanjala Wafula
                </p>
              </motion.div>
              
              {/* Experience Badge */}
              <motion.div
                className="absolute -top-4 -left-4 bg-ebcGold text-white rounded-lg p-4 shadow-lg z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs">Years in<br />Development</div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Column - Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/10 rounded-full">
                <div className="w-2 h-2 bg-ebcGold rounded-full" />
                <span className="text-ebcGold font-semibold text-sm tracking-wider">WHO WE ARE</span>
              </div>
            </motion.div>
            
            {/* Title */}
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-ebcNavy leading-tight"
            >
              A Consulting Division Driving <span className="text-ebcGold">Real-World Impact</span>
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-ebcGray/80 leading-relaxed"
            >
              Empowering Bridge Consulting (EBC) is a consulting division of Favoured Classic Limited, a Kenya-registered company. 
              We specialize in designing integrated solutions that address the link between economic vulnerability and health outcomes, 
              particularly among youth and women. Our team brings field-tested knowledge from programmes across four Kenyan counties, 
              reaching over 100,000 young people.
            </motion.p>
            
            {/* Vision & Mission Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-ebcNavy/5 to-transparent p-6 rounded-xl border border-ebcNavy/10 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-xl font-bold text-ebcNavy mb-2">Our Vision</h3>
                <p className="text-ebcGray/70 text-sm">
                  A world where sustainable livelihoods drive health, resilience, and opportunity for every young person and community.
                </p>
              </div>
              <div className="bg-gradient-to-br from-ebcGold/5 to-transparent p-6 rounded-xl border border-ebcGold/10 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-ebcNavy mb-2">Our Mission</h3>
                <p className="text-ebcGray/70 text-sm">
                  To empower youth- and women-focused organizations by providing strategic advisory that transforms innovative ideas into scalable solutions.
                </p>
              </div>
            </motion.div>
            
            {/* Three Pillars */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
            >
              {[
                {
                  title: "Empowering",
                  desc: "Building agency, confidence, and decision-making power among individuals and institutions at every level.",
                  color: "from-ebcGold/20 to-transparent",
                  border: "border-ebcGold/30"
                },
                {
                  title: "Bridge",
                  desc: "Connecting innovation & policy · communities & government · health systems & livelihoods.",
                  color: "from-ebcNavy/20 to-transparent",
                  border: "border-ebcNavy/30"
                },
                {
                  title: "Consulting",
                  desc: "Providing strategic advisory, technical expertise, and capacity strengthening for sustainable impact.",
                  color: "from-ebcEmerald/20 to-transparent",
                  border: "border-ebcEmerald/30"
                }
              ].map((pillar) => (
                <motion.div
                  key={pillar.title}
                  className={`bg-gradient-to-br ${pillar.color} p-4 rounded-xl border ${pillar.border} hover:scale-105 transition-all duration-300`}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="text-lg font-bold text-ebcNavy mb-2">{pillar.title}</h4>
                  <p className="text-ebcGray/60 text-xs leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};