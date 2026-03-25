// src/App.tsx
import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { VeemSection } from './sections/VEEMSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ContactSection } from './sections/ContactSection';
import LearningHub from './sections/LearningHub'; 
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection/>
        <VeemSection />
        <LearningHub />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
