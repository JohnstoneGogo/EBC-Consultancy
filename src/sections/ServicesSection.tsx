// src/sections/ServicesSection.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaChartLine, FaHeartbeat, FaBuilding, FaHandshake, FaFileAlt, FaCommentDots, FaArrowRight } from 'react-icons/fa';

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const services = [
    {
      number: "01",
      icon: FaChartLine,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      title: "Economic Empowerment Programme Design",
      description: "Holistic, market-responsive programmes that create sustainable livelihoods for youth and women. Co-created with beneficiaries and grounded in local market reality.",
      tags: ["Market Assessments", "Livelihoods", "Entrepreneurship", "Microfinance"],
      tagColor: "bg-emerald-500/10 text-emerald-400"
    },
    {
      number: "02",
      icon: FaHeartbeat,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10",
      title: "Public Health Systems Strengthening",
      description: "Integrating economic empowerment into health service delivery to improve clinical outcomes and long-term well-being for adolescent girls and young women.",
      tags: ["Health Integration", "DREAMS", "AGYW", "PEPFAR"],
      tagColor: "bg-amber-500/10 text-amber-400"
    },
    {
      number: "03",
      icon: FaBuilding,
      iconColor: "text-rose-400",
      bgColor: "bg-rose-500/10",
      title: "Institutional Capacity Strengthening",
      description: "Building systems that last beyond donor cycles. We strengthen youth-led organizations, civil society, and government institutions for sustained impact.",
      tags: ["MEAL Systems", "Strategy", "Governance", "Sustainability"],
      tagColor: "bg-rose-500/10 text-rose-400"
    },
    {
      number: "04",
      icon: FaHandshake,
      iconColor: "text-sky-400",
      bgColor: "bg-sky-500/10",
      title: "Partnership & Stakeholder Engagement",
      description: "Building multi-sector partnerships that enable programmes to scale. Connecting governments, donors, NGOs, and communities into aligned ecosystems.",
      tags: ["Stakeholder Mapping", "MOU Development", "Convening", "Coalition Building"],
      tagColor: "bg-sky-500/10 text-sky-400"
    },
    {
      number: "05",
      icon: FaFileAlt,
      iconColor: "text-ebcGold",
      bgColor: "bg-ebcGold/10",
      title: "Policy Advisory & Evidence Generation",
      description: "Translating programme evidence into policy and practice. Supporting governments to scale successful interventions into national systems.",
      tags: ["Policy Dialogues", "Evidence Docs", "Investment Cases", "Advocacy"],
      tagColor: "bg-ebcGold/10 text-ebcGold"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-28 bg-gradient-to-br from-ebcNavy via-ebcNavy/95 to-ebcNavy relative overflow-hidden">
      {/* Simple Background Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-ebcGold/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-ebcEmerald/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ebcGold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/20 backdrop-blur-sm rounded-full mb-6 border border-ebcGold/30">
              <div className="w-2 h-2 bg-ebcGold rounded-full animate-pulse" />
              <span className="text-ebcGold font-semibold text-sm tracking-wider uppercase">What We Do</span>
            </div>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Five Interconnected{' '}
            <span className="relative inline-block">
              <span className="text-ebcGold">Practice Areas</span>
              <motion.span 
                className="absolute bottom-2 left-0 w-full h-2 bg-ebcGold/30 -z-10"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-white/80 leading-relaxed"
          >
            Every engagement is tailored to client context while drawing on EBC's deep expertise in the health-economic nexus 
            and proven implementation experience across Africa.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                variants={itemVariants}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-ebcGold/50 transition-all duration-500 overflow-hidden hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ebcGold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="p-8 relative">
                  {/* Service Number and Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-bold text-white/10 group-hover:text-ebcGold/20 transition-all duration-300">
                      {service.number}
                    </span>
                    <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10`}>
                      <Icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-ebcGold transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1.5 ${service.tagColor} text-xs rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-default backdrop-blur-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CTA Card - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-ebcGold/20 to-ebcEmerald/20 backdrop-blur-md rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-ebcGold/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ebcEmerald/20 rounded-full blur-2xl" />
            
            <div className="p-8 relative z-10 flex flex-col h-full">
              <div className="flex justify-end mb-8">
                <div className="w-16 h-16 bg-ebcGold/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-ebcGold/30">
                  <FaCommentDots className="w-8 h-8 text-ebcGold" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  Ready to Create <br />Impact Together?
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Partner with EBC to design or scale impactful programmes across Africa. 
                  Whether you're a government, donor, NGO, or development partner — let's start a conversation.
                </p>
              </div>
              
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-ebcGold to-ebcEmerald text-white px-6 py-3.5 rounded-xl font-bold hover:from-ebcGold/90 hover:to-ebcEmerald/90 transition-all duration-300 shadow-lg w-fit group/btn"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start a Conversation</span>
                <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-sm uppercase tracking-wider text-white/50 mb-6">Trusted By Organizations Across Africa</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80">
            {["Government Agencies", "International NGOs", "Development Partners", "Private Sector", "Community Organizations"].map((type) => (
              <span key={type} className="text-white/60 text-sm font-medium hover:text-ebcGold transition-colors cursor-default">
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};