// src/components/Footer.tsx
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254726332000?text=Hello%2C%20I%27m%20interested%20in%20your%20consulting%20services', '_blank');
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+254726332000';
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Decorative top border with gold accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ebcGold/40 via-ebcGold to-ebcGold/40" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-white font-extrabold text-3xl tracking-tighter">
              EBC<span className="text-ebcGold">.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering communities through strategic insight, innovative solutions, and sustainable impact.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ebcGold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ebcGold transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ebcGold transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-ebcGold"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-ebcGold transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-ebcGold"></span>
            </h4>
            <div className="space-y-3">
              <button 
                onClick={() => handleEmailClick('andrew@empoweringbridge.co.ke')}
                className="flex items-center gap-3 text-gray-400 hover:text-ebcGold transition-colors duration-300 group w-full"
              >
                <FaEnvelope className="text-ebcGold/60 group-hover:text-ebcGold" size={16} />
                <span className="text-sm">andrew@empoweringbridge.co.ke</span>
              </button>
              <button 
                onClick={() => handleEmailClick('info@empoweringbridge.co.ke')}
                className="flex items-center gap-3 text-gray-400 hover:text-ebcGold transition-colors duration-300 group w-full"
              >
                <FaEnvelope className="text-ebcGold/60 group-hover:text-ebcGold" size={16} />
                <span className="text-sm">info@empoweringbridge.co.ke</span>
              </button>
              <button 
                onClick={handlePhoneClick}
                className="flex items-center gap-3 text-gray-400 hover:text-ebcGold transition-colors duration-300 group w-full"
              >
                <FaPhone className="text-ebcGold/60 group-hover:text-ebcGold" size={16} />
                <span className="text-sm">+254 726 332 000</span>
              </button>
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg relative inline-block">
              Location
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-ebcGold"></span>
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-ebcGold/60 mt-1" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">Homabay, Kenya</p>
                  <p className="text-gray-500 text-xs mt-1">Strategic Advisory Firm</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs italic">
                Serving communities across East Africa
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Empowering Bridge Consulting. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-ebcGold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ebcGold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-ebcGold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group animate-bounce-slow"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </button>
    </footer>
  );
};