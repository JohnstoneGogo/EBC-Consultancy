// src/components/VeemStepCard.tsx
import { motion } from 'framer-motion';
import type { VeemStep } from '../types';

export const VeemStepCard: React.FC<{ step: VeemStep }> = ({ step }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start gap-4 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step.id * 0.1 }} // Staggered by ID
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }} // Elevate on hover
    >
      <div className="bg-ebcEmerald text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center">
        {step.id}
      </div>
      <h3 className="font-bold text-lg text-ebcNavy">{step.title}</h3>
      <p className="text-sm text-ebcGray leading-relaxed">{step.description}</p>
    </motion.div>
  );
};
