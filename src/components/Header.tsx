// src/components/Header.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Our Approach', href: 'approach' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Learning Hub', href: 'learning-hub' },
  { name: 'Contact', href: 'contact' }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection with correct order
  useEffect(() => {
    const handleActiveSection = () => {
      // Get all sections in the order they appear in the DOM
      const sections = [];
      for (const link of navLinks) {
        const element = document.getElementById(link.href);
        if (element) {
          sections.push({
            id: link.href,
            element: element,
            offsetTop: element.offsetTop,
            offsetBottom: element.offsetTop + element.offsetHeight
          });
        }
      }
      
      if (sections.length === 0) return;
      
      // Get current scroll position with header offset
      const headerHeight = 80;
      const scrollPosition = window.scrollY + headerHeight + 50;
      
      // Find which section is currently active based on scroll position
      let currentSection = sections[0].id; // Default to first section
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const nextSection = sections[i + 1];
        
        // If we're within the current section
        if (scrollPosition >= section.offsetTop) {
          // If this is the last section OR we haven't reached the next section yet
          if (!nextSection || scrollPosition < nextSection.offsetTop) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      // Check if we're at the very bottom of the page
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        currentSection = 'contact';
      }
      
      // Only update if different
      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };
    
    // Initial check with delay to ensure DOM is ready
    setTimeout(handleActiveSection, 100);
    
    // Add scroll listener with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', handleActiveSection);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleActiveSection);
    };
  }, [activeLink]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-2' 
            : 'bg-white/80 backdrop-blur-sm border-b border-gray-100/50 py-3'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="h-12 sm:h-14 cursor-pointer flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLinkClick('home')}
            >
              <img 
src="/ebc-logo.png"
                alt="EBC Logo" 
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
            
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial="hidden"
              animate="visible"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ebcGold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ebcGold"></span>
              </span>
              <span className="text-xs font-medium">Strategic Advisory • Kenya • Africa & Beyond</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-6">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name} 
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative font-medium text-sm transition-colors cursor-pointer ${
                    activeLink === link.href 
                      ? 'text-ebcGold' 
                      : 'text-ebcNavy/80 hover:text-ebcGold'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.name}
                  {activeLink === link.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ebcGold"
                      layoutId="activeUnderline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              <motion.button 
                className="bg-gradient-to-r from-ebcNavy to-ebcNavy/80 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
              >
                Get Started
              </motion.button>
            </nav>
            
            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden text-ebcNavy p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white z-50 md:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="pt-20 pb-6 px-6">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      onClick={() => handleLinkClick(link.href)}
                      className={`py-2 text-lg font-medium transition-colors cursor-pointer ${
                        activeLink === link.href
                          ? 'text-ebcGold border-l-4 border-ebcGold pl-3'
                          : 'text-ebcNavy/80 hover:text-ebcGold pl-4'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.button
                    className="mt-4 bg-gradient-to-r from-ebcNavy to-ebcNavy/80 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};