// src/sections/PartnersSection.tsx
import { motion } from 'framer-motion';
import { FaHandshake, FaHeart, FaChartLine, FaBuilding, FaUsers, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';

export const PartnersSection = () => {
  const partners = [
    {
      name: "Government Agencies",
      icon: <FaBuilding className="w-6 h-6" />,
      description: "Partnering with county and national governments to scale evidence-based programmes"
    },
    {
      name: "International NGOs",
      icon: <FaGlobe className="w-6 h-6" />,
      description: "Collaborating with global organizations to deliver localized impact"
    },
    {
      name: "Development Partners",
      icon: <FaHandshake className="w-6 h-6" />,
      description: "Working with donors and development agencies to maximize investment impact"
    },
    {
      name: "Private Sector",
      icon: <FaChartLine className="w-6 h-6" />,
      description: "Engaging businesses to create market linkages and employment opportunities"
    },
    {
      name: "Community Organizations",
      icon: <FaUsers className="w-6 h-6" />,
      description: "Strengthening local organizations to deliver sustainable solutions"
    },
    {
      name: "Health Institutions",
      icon: <FaHeart className="w-6 h-6" />,
      description: "Integrating economic empowerment with health service delivery"
    }
  ];

  const currentPartners = [
    {
      name: "Women's Economic Imperative",
      acronym: "WEI",
      logo: "/src/assets/wei-logo.jpeg", // Path to WEI logo
      website: "https://weiforward.org",
      description: "Advancing women's economic empowerment across Africa"
    },
    {
      name: "Empowering Bridge Consulting",
      acronym: "EBC",
      logo: "/src/assets/ebc-logo.png", // Path to EBC logo
      website: "https://www.empoweringbridge.co.ke",
      description: "Strategic advisory for sustainable development"
    }
  ];

  const upcomingPartners = [
    {
      name: "LVCT Health",
      acronym: "LVCT",
      logo: "🏥", // Placeholder until logo is available
      description: "Health systems strengthening and HIV programs"
    },
    {
      name: "Homa Bay County Government",
      acronym: "HBCG",
      logo: "🏛️", // Placeholder until logo is available
      description: "County leadership and local implementation"
    },
    {
      name: "Local Implementing Partners",
      acronym: "LIPs",
      logo: "🤝", // Placeholder until logo is available
      description: "Community-based organizations and local leaders"
    }
  ];

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-ebcGold rounded-full animate-pulse" />
            <span className="text-ebcGold font-semibold text-sm tracking-wider uppercase">Our Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ebcNavy mb-4">Who We Work With</h2>
          <p className="text-lg text-ebcGray/80 leading-relaxed">
            Building collaborative partnerships to create sustainable impact across sectors
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-ebcGold/30 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-ebcGold/10 flex items-center justify-center text-ebcGold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {partner.icon}
              </div>
              <h3 className="text-lg font-bold text-ebcNavy mb-2 group-hover:text-ebcGold transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-ebcGray/70 leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Partners Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ebcNavy mb-2">Current Partners</h3>
            <div className="w-12 h-0.5 bg-ebcGold mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-ebcGold/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-ebcGold/10 to-ebcGold/5 rounded-2xl flex items-center justify-center mb-4 border-2 border-ebcGold/20 p-4">
                    <img 
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-ebcNavy mb-1">{partner.name}</h4>
                  <p className="text-sm text-ebcGold font-semibold mb-2">{partner.acronym}</p>
                  <p className="text-sm text-ebcGray/70 mb-4">{partner.description}</p>
                  <a 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ebcGold hover:text-ebcEmerald transition-colors text-sm font-medium"
                  >
                    <span>Visit Website</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Partnership Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-gradient-to-br from-ebcNavy to-ebcNavy/95 rounded-2xl overflow-hidden mb-16"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-ebcGold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ebcEmerald/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 p-8 md:p-12">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/20 backdrop-blur-sm rounded-full mb-6">
              <FaHandshake className="w-4 h-4 text-ebcGold" />
              <span className="text-ebcGold font-semibold text-sm tracking-wider uppercase">Strategic Partnership Announcement</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Advancing Youth & Women's Economic Empowerment
            </h3>
            
            {/* Partner Logos Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
             <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center mb-3 border border-gray-200 p-4 shadow-md">
              <img 
                src="/src/assets/wei-logo.jpeg"
                alt="WEI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white/80 text-sm font-medium">Women's Economic Imperative</p>
          </div>

          <div className="text-ebcGold text-2xl md:text-3xl">+</div>

          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center mb-3 border border-gray-200 p-4 shadow-md">
              <img 
                src="/src/assets/ebc-logo.png"
                alt="EBC Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white/80 text-sm font-medium">Empowering Bridge Consulting</p>
          </div>
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              We are excited to announce a new partnership between <strong className="text-ebcGold">Women's Economic Imperative (WEI)</strong> and 
              <strong className="text-ebcGold"> Empowering Bridge Consulting (EBC)</strong> to advance youth and women's economic empowerment in Kenya and beyond.
            </p>
            
            {/* Current Focus */}
            <div className="bg-white/5 rounded-xl p-6 mb-6 border-l-4 border-ebcGold">
              <h4 className="text-xl font-bold text-white mb-3">Current Focus: Homa Bay Economic Empowerment Initiative (HEEI) Program</h4>
              <p className="text-white/80 leading-relaxed mb-4">
                Our first collaborative initiative targets <strong className="text-ebcGold">Homa Bay County</strong> — one of Kenya's highest HIV-burden counties — 
                where economic vulnerability and health outcomes intersect. Through HEEI, we are designing integrated solutions that address both economic 
                empowerment and health systems strengthening.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a 
                  href="https://weiforward.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ebcGold hover:text-white transition-colors"
                >
                  <span>weiforward.org</span>
                  <FaExternalLinkAlt size={12} />
                </a>
                <span className="text-white/40">|</span>
                <a 
                  href="https://www.empoweringbridge.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ebcGold hover:text-white transition-colors"
                >
                  <span>www.empoweringbridge.co.ke</span>
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Partners Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcEmerald/10 rounded-full mb-3">
              <span className="w-2 h-2 bg-ebcEmerald rounded-full animate-pulse" />
              <span className="text-ebcEmerald font-semibold text-sm tracking-wider uppercase">Coming Soon</span>
            </div>
            <h3 className="text-2xl font-bold text-ebcNavy mb-2">Upcoming Partnerships</h3>
            <div className="w-12 h-0.5 bg-ebcEmerald mx-auto" />
            <p className="text-ebcGray/70 text-sm mt-3">Expanding our collaborative network for greater impact</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-ebcEmerald/30 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-ebcEmerald/10 to-ebcEmerald/5 rounded-2xl flex items-center justify-center mb-4 border-2 border-ebcEmerald/20 group-hover:border-ebcEmerald/50 transition-all">
                  <span className="text-3xl">{partner.logo}</span>
                </div>
                <h4 className="text-lg font-bold text-ebcNavy mb-1 group-hover:text-ebcEmerald transition-colors">
                  {partner.name}
                </h4>
                <p className="text-xs text-ebcGold font-semibold mb-2">{partner.acronym}</p>
                <p className="text-sm text-ebcGray/70">{partner.description}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-ebcEmerald/10 rounded-full">
                  <span className="text-xs text-ebcEmerald font-medium">In Discussion</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-ebcGold mb-2">8+</div>
            <p className="text-ebcGray/70 text-sm">Years of Partnership Experience</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-ebcGold mb-2">4+</div>
            <p className="text-ebcGray/70 text-sm">Kenyan Counties Reached</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-ebcGold mb-2">15+</div>
            <p className="text-ebcGray/70 text-sm">Active Partners & Collaborators</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};