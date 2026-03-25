// src/sections/ServicesSection.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaChartLine, FaHeartbeat, FaBuilding, FaHandshake, FaFileAlt, FaCommentDots } from 'react-icons/fa';

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const services = [
    {
      number: "01",
      icon: FaChartLine,
      iconColor: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      title: "Economic Empowerment Programme Design",
      description: "We design holistic, market-responsive economic empowerment programmes that create sustainable livelihoods for youth and women. Every design begins with a deep market assessment and is co-created with beneficiaries — grounded in local market reality, built for scale from day one.",
      tags: ["Market Assessments", "Livelihoods", "Entrepreneurship", "Microfinance"],
      tagColor: "bg-teal-50 text-teal-700"
    },
    {
      number: "02",
      icon: FaHeartbeat,
      iconColor: "text-ebcGold",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      title: "Public Health Systems Strengthening",
      description: "We help health programmes recognize that economic vulnerability is a health issue — integrating empowerment into health service delivery to improve clinical outcomes and long-term well-being, particularly for adolescent girls and young women.",
      tags: ["Health Integration", "DREAMS", "AGYW", "PEPFAR"],
      tagColor: "bg-amber-50 text-amber-700"
    },
    {
      number: "03",
      icon: FaBuilding,
      iconColor: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      title: "Institutional Capacity Strengthening",
      description: "We partner with youth-led organizations, civil society, and government institutions to strengthen their capacity for sustained impact — building systems that last beyond donor cycles. When we leave, organizations are more capable, not more dependent.",
      tags: ["MEAL Systems", "Strategy", "Governance", "Sustainability"],
      tagColor: "bg-rose-50 text-rose-700"
    },
    {
      number: "04",
      icon: FaHandshake,
      iconColor: "text-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      title: "Partnership & Stakeholder Engagement",
      description: "EBC specializes in building multi-sector partnerships that enable programmes to scale — connecting governments, donors, NGOs, private sector, and communities into aligned ecosystems with the coordination frameworks that hold them together.",
      tags: ["Stakeholder Mapping", "MOU Development", "Convening", "Coalition Building"],
      tagColor: "bg-sky-50 text-sky-700"
    },
    {
      number: "05",
      icon: FaFileAlt,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      title: "Policy Advisory & Evidence Generation",
      description: "We support governments and partners to translate programme evidence into policy and practice — ensuring successful interventions don't remain isolated projects but become scalable national systems. We produce investment cases, policy briefs, and participate in high-level dialogues.",
      tags: ["Policy Dialogues", "Evidence Docs", "Investment Cases", "Advocacy"],
      tagColor: "bg-emerald-50 text-emerald-700"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/10 rounded-full mb-4">
              <div className="w-2 h-2 bg-ebcGold rounded-full" />
              <span className="text-ebcGold font-semibold text-sm tracking-wider">OUR SERVICES</span>
            </div>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-ebcNavy mb-6"
          >
            Five Interconnected <span className="text-ebcGold">Practice Areas</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-ebcGray/70 leading-relaxed"
          >
            Every engagement is tailored to client context while drawing on EBC's deep expertise in the health-economic nexus 
            and proven implementation experience across Africa. We don't offer templates — we co-design with you.
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
                className={`group bg-white rounded-2xl border ${service.borderColor} hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-8">
                  {/* Service Number and Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl font-bold text-gray-200 group-hover:text-ebcGold/30 transition-colors">
                      {service.number}
                    </span>
                    <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-ebcNavy mb-4 group-hover:text-ebcGold transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-ebcGray/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 ${service.tagColor} text-xs rounded-full font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-ebcNavy to-ebcNavy/90 rounded-2xl p-8 text-white flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <div className="flex justify-end mb-6">
                <FaCommentDots className="w-12 h-12 text-ebcGold/30" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                EBC partners with organisations seeking to design or scale impactful programmes across Africa. 
                Whether you're a government, donor, NGO, or development partner — let's start a conversation.
              </p>
            </div>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-ebcGold text-ebcNavy px-6 py-3 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg w-fit"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Conversation</span>
              <FaCommentDots size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

