// src/sections/HeroCarousel.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const bridgeImages = [
  'https://images.pexels.com/photos/1434939/pexels-photo-1434939.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
  'https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
  'https://images.pexels.com/photos/4491675/pexels-photo-4491675.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop'
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(bridgeImages.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bridgeImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {!imageErrors[currentIndex] ? (
          <motion.img
            key={currentIndex}
            src={bridgeImages[currentIndex]}
            alt="Bridge connecting communities"
            className="w-full h-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            onError={() => handleImageError(currentIndex)}
          />
        ) : (
          <motion.div
            key={currentIndex}
            className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        )}
      </AnimatePresence>
      
      {/* Darker, more neutral gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/95" />
      
      {/* Optional: Add a subtle gold accent */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-ebcGold/10 via-transparent to-transparent" />
    </div>
  );
};