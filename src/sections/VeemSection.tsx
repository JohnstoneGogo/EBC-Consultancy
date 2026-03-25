// src/sections/VeemSection.tsx
import { motion } from 'framer-motion';
import type { VeemStep } from '../types';
import { VeemStepCard } from '../components/VeemStepCard';

const steps: VeemStep[] = [
  { id: 1, title: 'Market Assessment', description: 'Analyzing demand & value chains.' },
  { id: 2, title: 'Financial Capability', description: 'Building literacy & access to capital.' },
  { id: 3, title: 'Skills & Entrepreneurship', description: 'Technical training & business acumen.' },
  { id: 4, title: 'Mentorship & Networks', description: 'Guiding growth through experience.' },
  { id: 5, title: 'Linkages to Opportunity', description: 'Connecting to jobs & markets.' },
];

export const VeemSection = () => {
  return (
    <section id="approach" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} // Animates when scrolled into view
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-ebcNavy">Our Approach</h2>
          <p className="mt-4 text-lg text-ebcGray italic">
            <strong className="text-ebcEmerald">"Vukisha"</strong> — To cross from vulnerability to empowerment. We use the Vukisha Economic Empowerment Model (VEEM).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <VeemStepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};
