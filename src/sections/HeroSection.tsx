// src/sections/HeroSection.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { useState, useEffect } from 'react';

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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0 
  }
};

// Slider images
const sliderImages = [
  {
    id: 0,
    url: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg',
    alt: 'Women empowerment Kenya'
  },
  {
    id: 1,
    url: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg',
    alt: 'Community development Africa'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/28560576/pexels-photo-28560576.jpeg',
    alt: 'Youth skills training'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1381790/pexels-photo-1381790.jpeg',
    alt: 'Women economic empowerment Africa'
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const particlePositions = Array.from({ length: 8 }, (_, i) => ({
    x: 50 + i * 40,
    duration: 2.0 + i * 0.3
  }));

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-24 text-white min-h-screen flex items-center overflow-hidden"
    >
      {/* SLIDER BACKGROUND - Rotating Images */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={sliderImages[currentSlide].url}
              alt={sliderImages[currentSlide].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      {/* Slide Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              currentSlide === index
                ? 'w-8 h-2 bg-ebcGold rounded-full'
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content - Appears ABOVE the slider background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ebcGold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ebcGold"></span>
              </span>
              <span className="text-sm font-medium">Strategic Insight • Innovative Solutions • Sustainable Impact</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              Building Bridges from{' '}
              <span className="relative inline-block">
                <span className="text-ebcGold relative z-10">Vulnerability</span>
                <motion.span 
                  className="absolute bottom-2 left-0 w-full h-3 bg-ebcGold/30 -z-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>{' '}
              to Empowerment
            </motion.h1>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4" 
              variants={itemVariants}
            >
              <motion.button 
                onClick={() => scrollToSection('services')}
                className="group bg-ebcGold text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-ebcNavy transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Our Services</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay size={12} />
                <span>Partner With Us</span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Bridge Visual */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 p-8 backdrop-blur-sm overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-ebcGold rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-ebcEmerald rounded-full blur-3xl animate-pulse delay-1000" />
              </div>
              
              {/* Bridge Visualization */}
              <div className="relative h-full flex flex-col items-center justify-center">
                {/* Bridge Arc */}
                <svg className="absolute w-full h-full" viewBox="0 0 400 300">
                  <motion.path
                    d="M 50,250 Q 200,150 350,250"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C4A35A" />
                      <stop offset="50%" stopColor="#2E8B57" />
                      <stop offset="100%" stopColor="#C4A35A" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-ebcGold/30 backdrop-blur-sm border border-ebcGold/50 flex items-center justify-center"
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-ebcGold animate-pulse" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-ebcEmerald/30 backdrop-blur-sm border border-ebcEmerald/50 flex items-center justify-center"
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, -8, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-ebcEmerald animate-pulse" />
                </motion.div>
                
                {/* Central Bridge Pillar */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-24 bg-gradient-to-t from-ebcGold to-ebcEmerald" />
                
                {/* Animated Particles */}
                {particlePositions.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-ebcGold rounded-full"
                    initial={{
                      x: particle.x,
                      y: 250,
                      opacity: 0
                    }}
                    animate={{
                      y: [250, 180, 250],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: particle.duration,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Bottom Label - Left Corner */}
              <div className="absolute bottom-4 left-4 text-center">
                <p className="text-xs text-white/60">Connecting Communities • Building Futures</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Subheading - Full width */}
        <motion.p 
          className="text-lg md:text-xl text-white/90 leading-relaxed mt-12 pt-8 border-t border-white/20 max-w-4xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          EBC is a strategic advisory firm partnering with institutions, governments, and communities to design and deliver innovative, evidence-based solutions that advance sustainable development through inclusive economic empowerment.
        </motion.p>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};