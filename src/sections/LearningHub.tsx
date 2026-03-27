import React from 'react';
import { motion } from 'framer-motion';

const LearningHub: React.FC = () => {
  return (
    <section id="learning-hub" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-ebcNavy text-sm font-bold tracking-[0.2em] uppercase mb-3">Knowledge Base</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-ebcNavy font-bold">Learning & Impact Hub</h3>
          <div className="w-12 h-1 bg-ebcGold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Testimonials (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-ebcNavy mb-4">Real Voices. Real Impact.</h4>
              <p className="text-ebcGray leading-relaxed max-w-lg">
                Unscripted stories of resilience and proof that strategic economic empowerment 
                models like <span className="text-ebcEmerald font-semibold">VEEM</span> drive lasting change.
              </p>
            </div>

            {/* Video Card - Premium Look */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-slate-50 border border-slate-200 p-6 rounded-2xl flex gap-6 items-center"
            >
              <div className="w-20 h-20 bg-ebcGold/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-ebcGold/30 transition-colors">
                <span className="text-ebcGold text-2xl">▶</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-ebcEmerald">Video Case Study</span>
                <h5 className="text-lg font-bold text-ebcNavy mt-1">AYP Program: Changing Futures</h5>
                <a href="https://linkedin.com" className="text-sm text-ebcGold font-semibold hover:underline mt-2 inline-block">Watch on LinkedIn →</a>
              </div>
            </motion.div>

            {/* Reflection Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-100 shadow-sm p-6 rounded-2xl"
            >
              <h5 className="font-bold text-ebcNavy mb-2">📝 Lessons from the Field</h5>
              <p className="text-sm text-ebcGray mb-4">What we learned through co-creation with youth and women in rural markets.</p>
              <button className="text-ebcEmerald text-sm font-bold border-b-2 border-ebcEmerald/20 hover:border-ebcEmerald transition-all">
                Read the Reflection
              </button>
            </motion.div>

            <button className="mt-4 px-8 py-3 bg-ebcNavy text-white rounded-lg text-sm font-bold hover:bg-ebcNavy/90 transition-all shadow-lg shadow-ebcNavy/20">
              Share Your Story
            </button>
          </div>

          {/* RIGHT: Masterclasses (5 Columns) - The "Callout" Section */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-ebcNavy p-8 md:p-10 rounded-[2rem] text-white relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-ebcGold/10 rounded-full -mr-16 -mt-16 blur-3xl" />
              
              <h4 className="text-2xl font-bold mb-4">Advisory Masterclasses</h4>
              <p className="text-blue-100/80 text-sm mb-8 leading-relaxed">
                Self-paced lessons designed for development professionals and NGO leaders.
              </p>

              {/* Featured Class Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl mb-6">
                <div className="inline-block bg-ebcEmerald text-[10px] font-black px-2 py-1 rounded mb-4">COMING SOON</div>
                <h5 className="font-bold text-lg text-ebcGold mb-2">Introduction to VEEM</h5>
                <p className="text-xs text-blue-100/70 mb-4 italic italic">Transitioning youth from vulnerability to resilience.</p>
                <div className="flex items-center gap-4 text-[11px] font-bold text-white/60">
                  <span>⏱ 45 Minutes</span>
                  <span>📂 4 Video Modules</span>
                </div>
              </div>

              {/* Future Classes List */}
              <div className="space-y-4 mb-10 opacity-60">
                <div className="flex items-center gap-3 text-sm border-b border-white/10 pb-2">
                  <span className="text-ebcGold text-xs">🔒</span>
                  <span>Participatory Market Assessment</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-ebcGold text-xs">🔒</span>
                  <span>Multi-Sector Partnerships</span>
                </div>
              </div>

              <button className="w-full py-4 bg-ebcGold text-white font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-xl shadow-black/20">
                Notify Me of New Lessons
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningHub;