// src/sections/AboutSection.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedin, FaEnvelope, FaGlobe, FaAward, FaUsers, FaChartLine } from 'react-icons/fa';

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
        {/* Founder Section - Picture and Andrew's Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          
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
          
          {/* Right Column - Andrew's Details */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Section Label */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/10 rounded-full">
                <div className="w-2 h-2 bg-ebcGold rounded-full" />
                <span className="text-ebcGold font-semibold text-sm tracking-wider">FOUNDER & PRINCIPAL CONSULTANT</span>
              </div>
            </motion.div>
            
            {/* Name */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-ebcNavy leading-tight"
            >
              Andrew Wanjala Wafula
            </motion.h2>
            
            {/* Role */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-ebcGold font-semibold"
            >
              MDS · Development Specialist
            </motion.p>
            
            {/* Bio */}
            <motion.p 
              variants={itemVariants}
              className="text-ebcGray/80 leading-relaxed"
            >
              Andrew is a development, advocacy, and partnerships specialist with over 10 years of progressive experience across Africa. He specializes in translating innovation into policy and practice within complex government systems, working at the intersection of economic empowerment, public health, and youth development.
            </motion.p>
            
            {/* Experience Highlights */}
            <motion.div 
              variants={itemVariants}
              className="space-y-3 pt-2"
            >
              <div className="flex items-start gap-3">
                <FaUsers className="text-ebcGold mt-1 flex-shrink-0" size={16} />
                <p className="text-sm text-ebcGray/70">
                  Led multi-county programmes reaching <strong className="text-ebcNavy">over 100,000 adolescents and young people</strong> at LVCT Health (2017–2025)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaChartLine className="text-ebcGold mt-1 flex-shrink-0" size={16} />
                <p className="text-sm text-ebcGray/70">
                  Designed and operationalized the <strong className="text-ebcNavy">Vukisha Economic Empowerment Model (VEEM)</strong>, reaching over 40,000 young women across four counties
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaGlobe className="text-ebcGold mt-1 flex-shrink-0" size={16} />
                <p className="text-sm text-ebcGray/70">
                  Represented Kenya at international scientific conferences on <strong className="text-ebcNavy">three continents</strong> (Canada, Sweden, USA)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaAward className="text-ebcGold mt-1 flex-shrink-0" size={16} />
                <p className="text-sm text-ebcGray/70">
                  Contributed to national policy dialogues on <strong className="text-ebcNavy">adolescent health, economic empowerment, and social protection</strong>
                </p>
              </div>
            </motion.div>
            
            {/* Quote */}
            <motion.div 
              variants={itemVariants}
              className="bg-teal-50 rounded-xl p-5 border-l-4 border-ebcGold mt-4"
            >
              <div className="text-2xl text-ebcGold mb-1">"</div>
              <p className="text-ebcNavy text-sm italic leading-relaxed">
                Sustainable development happens at the intersection — where economic opportunity meets health systems, where community knowledge meets government policy, and where evidence meets action. Empowering Bridge Consulting exists to build those connections.
              </p>
              <p className="text-xs font-semibold text-ebcGold mt-3">
                — Andrew Wanjala Wafula
              </p>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-3 pt-2"
            >
              <a 
                href="https://www.linkedin.com/in/andrew-wafula-4b2228194/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-ebcNavy/5 text-ebcNavy rounded-lg text-sm font-medium hover:bg-ebcGold hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:andrew@empoweringbridge.co.ke"
                className="inline-flex items-center gap-2 px-4 py-2 bg-ebcNavy/5 text-ebcNavy rounded-lg text-sm font-medium hover:bg-ebcGold hover:text-white transition-all duration-300"
              >
                <FaEnvelope size={14} />
                <span>Email Andrew</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Consultancy Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-gray-200 pt-16 mt-8"
        >
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/10 rounded-full mb-4">
              <div className="w-2 h-2 bg-ebcGold rounded-full" />
              <span className="text-ebcGold font-semibold text-sm tracking-wider">THE CONSULTANCY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ebcNavy mb-4">
              A Consulting Division Driving <span className="text-ebcGold">Real-World Impact</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-ebcGray/80 leading-relaxed">
                Empowering Bridge Consulting (EBC) is a consulting division of Favoured Classic Limited, a Kenya-registered company. 
                We specialize in designing integrated solutions that address the link between economic vulnerability and health outcomes, 
                particularly among youth and women.
              </p>
              <p className="text-ebcGray/70 leading-relaxed">
                Our team brings field-tested knowledge from programmes across four Kenyan counties, reaching over 100,000 young people. 
                We don't just advise — we've done it. Every framework we recommend, we have tested. Every model we propose, we have iterated in the field.
              </p>
            </div>
            
            {/* Right Column - Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6">
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
            </div>
          </div>
          
          {/* Three Pillars */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 mt-8 border-t border-gray-100"
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
                className={`bg-gradient-to-br ${pillar.color} p-5 rounded-xl border ${pillar.border} hover:scale-105 transition-all duration-300 text-center`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-bold text-ebcNavy mb-2">{pillar.title}</h4>
                <p className="text-ebcGray/60 text-xs leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};