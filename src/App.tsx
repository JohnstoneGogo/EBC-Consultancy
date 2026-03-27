// src/App.tsx
import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { VeemSection } from './sections/VeemSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ContactSection } from './sections/ContactSection';
import { PartnersSection } from './sections/PartnersSection';
import LearningHub from './sections/LearningHub'; 
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <VeemSection /> 
        <AboutSection />
        <ServicesSection/>
        <LearningHub />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;