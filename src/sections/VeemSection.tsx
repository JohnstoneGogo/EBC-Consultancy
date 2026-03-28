// src/sections/VeemSection.tsx
import { motion } from 'framer-motion';
import type { JSX } from 'react';
import { FaChartLine, FaPiggyBank, FaLightbulb, FaHandsHelping, FaLink, FaInfoCircle } from 'react-icons/fa';

interface VeemStep {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

const steps: VeemStep[] = [
  { 
    id: 1, 
    title: 'Market Assessment', 
    description: 'We begin by understanding local economic realities, identifying viable economic sectors and genuine opportunities then designed intervention through co-creation with beneficiaries.',
    icon: <FaChartLine className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    id: 2, 
    title: 'Financial Capability', 
    description: 'Participants gain financial literacy, join savings groups, and access microfinance — building the foundation for economic decision-making.',
    icon: <FaPiggyBank className="w-6 h-6" />,
    color: 'from-amber-500 to-orange-500'
  },
  { 
    id: 3, 
    title: 'Skills & Entrepreneurship', 
    description: 'Participants get skills on developing business plan through Entrepreneurship training, market-relevant vocational training and business start-up support equip participants with tangible capabilities.',
    icon: <FaLightbulb className="w-6 h-6" />,
    color: 'from-sky-500 to-blue-500'
  },
  { 
    id: 4, 
    title: 'Mentorship & Networks', 
    description: 'Ongoing coaching and network access ensure businesses survive and thrive beyond the initial training.',
    icon: <FaHandsHelping className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    id: 5, 
    title: 'Linkages to Opportunity', 
    description: 'Finally, we connect graduates to employment, markets, capital, and social protection — completing the transition to resilience.',
    icon: <FaLink className="w-6 h-6" />,
    color: 'from-ebcGold to-ebcEmerald'
  },
];

const resources = [
  {
    id: 1,
    title: "VEEM Model Brief",
    description: "A 2-page executive summary of the framework showing how VEEM transitions youth from vulnerability to empowerment.",
    icon: "📄",
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Market Assessment Toolkit",
    description: "Practical tools and methodologies for conducting participatory market assessments in rural communities.",
    icon: "🛠️",
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Economic Empowerment Interventions",
    description: "Each intervention has specific guidelines or curriculum, tools and SOP's tailored to the specific context.",
    icon: "📊",
    downloadLink: "#"
  },
  {
    id: 4,
    title: "Monitoring & Evaluation Framework",
    description: "MEAL systems designed specifically for economic empowerment programmes targeting youth and women.",
    icon: "📈",
    downloadLink: "#"
  },
  {
    id: 5,
    title: "Partnership Guide",
    description: "Best practices for building multi-sector partnerships that scale impact and ensure sustainability.",
    icon: "🤝",
    downloadLink: "#"
  },
  {
    id: 6,
    title: "VEEM Implementation Manual",
    description: "Step-by-step guide for implementing the Vukisha Economic Empowerment Model in development contexts.",
    icon: "📘",
    downloadLink: "#"
  }
];

export const VeemSection = () => {
  return (
    <section id="approach" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-ebcGold rounded-full animate-pulse" />
            <span className="text-ebcGold font-semibold text-sm tracking-wider uppercase">Our Methodology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ebcNavy mb-4">Our Approach</h2>
          <p className="text-lg text-ebcGray/80 leading-relaxed">
            <span className="text-ebcEmerald font-bold">The Vukisha Economic Empowerment Model (VEEM)</span>
          </p>
          <p className="text-xl md:text-2xl font-semibold text-ebcNavy mt-2">
            A Proven Pathway from Vulnerability to Resilience
          </p>
        </motion.div>

        {/* VEEM Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-ebcGray/80 leading-relaxed mb-6">
            VEEM is a tested empowerment framework — refined over 8 years of implementation — designed to transition vulnerable young people from economic dependency to resilience. 
            Our five core components work in sequence and in synergy:
          </p>
        </motion.div>

        {/* VEEM Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Top Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
              
              <div className="p-8">
                {/* Icon and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <span className="text-5xl font-bold text-gray-100 group-hover:text-ebcGold/20 transition-colors">
                    {String(step.id).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-ebcNavy mb-3 group-hover:text-ebcGold transition-colors">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-ebcGray/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Meaning of Vukisha Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-ebcNavy to-ebcNavy/95 rounded-2xl p-8 md:p-10 mb-16 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ebcGold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ebcEmerald/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ebcGold/20 backdrop-blur-sm rounded-full mb-6">
              <FaInfoCircle className="w-4 h-4 text-ebcGold" />
              <span className="text-ebcGold font-semibold text-sm tracking-wider uppercase">The Meaning of Vukisha</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-ebcGold">"Vukisha"</span> — To Cross Over
            </h3>
            
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-3xl">
              The word <strong className="text-ebcGold">"Vukisha"</strong> is derived from the Swahili verb <strong className="text-ebcGold">"kuvuka,"</strong> which means <strong>"to cross"</strong> or <strong>"to transition."</strong>
            </p>
            
            <p className="text-white/70 mb-6 max-w-3xl">
              In the context of VEEM, it symbolizes:
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-6 max-w-4xl">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-ebcGold/50 transition-all">
                <div className="text-3xl mb-2">🌉</div>
                <p className="text-white/80 text-sm">Crossing from vulnerability to empowerment</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-ebcGold/50 transition-all">
                <div className="text-3xl mb-2">🚀</div>
                <p className="text-white/80 text-sm">Transitioning from economic dependency to independence</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-ebcGold/50 transition-all">
                <div className="text-3xl mb-2">🌅</div>
                <p className="text-white/80 text-sm">Moving from surviving to thriving</p>
              </div>
            </div>
            
            <p className="text-white/70 text-sm italic border-l-2 border-ebcGold pl-4 max-w-3xl">
              Just as crossing a river takes you from one shore to a new destination, Vukisha represents the journey of young people and women crossing over into a new reality of economic opportunity and sustained well-being.
            </p>
          </div>
        </motion.div>

        {/* Impact Results Section - NEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16"
        >
          {/* Main Result Statement */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-ebcGold/10 to-ebcEmerald/10 rounded-2xl p-8 border border-ebcGold/20">
              <p className="text-xl md:text-2xl text-ebcNavy leading-relaxed">
                The result: Over <strong className="text-ebcGold text-2xl md:text-3xl">6,000 young women</strong> in Homa Bay have transitioned through VEEM — gaining not just income, but dignity, agency, and long-term economic security.
              </p>
            </div>
          </div>
          
          {/* Impact Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">6,000+</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Young women reached in Homa Bay</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">3,626</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Entrepreneurship coaching beneficiaries</div>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">1,249</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Vocational training graduates</div>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">749</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Business start-up kits distributed</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">1,248</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Linked to savings & microfinance</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">410</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Linked to employment</div>
            </div>
          </div>
        </motion.div>

        {/* Resource Library Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8"
        >
          {/* Resource Library Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-ebcGold/10 rounded-xl">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-ebcNavy">Resource Library</h3>
              <p className="text-ebcGray/70 text-sm mt-1">
                Evidence-based tools, guides, and publications from our work
              </p>
            </div>
          </div>
          
          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-ebcGold/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{resource.icon}</div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-ebcGold font-semibold bg-ebcGold/10 px-2 py-1 rounded-full">
                      Free Download
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-ebcNavy mb-2 group-hover:text-ebcGold transition-colors">
                  {resource.title}
                </h4>
                <p className="text-sm text-ebcGray/70 leading-relaxed mb-6">
                  {resource.description}
                </p>
                <button 
                  onClick={() => window.open(resource.downloadLink, '_blank')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ebcGold hover:text-ebcEmerald transition-colors group/btn"
                >
                  <span>Download Resource</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">↓</span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Additional Resource Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-6 bg-gradient-to-r from-ebcGold/5 to-ebcEmerald/5 rounded-xl border border-ebcGold/20 text-center"
          >
            <p className="text-ebcGray/80 text-sm mb-3">
              Looking for something specific? We're building our resource library with tools from our programmes across Kenya.
            </p>
            <button className="text-ebcGold font-semibold text-sm hover:text-ebcEmerald transition-colors inline-flex items-center gap-2">
              <span>Request a specific resource</span>
              <span>→</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};