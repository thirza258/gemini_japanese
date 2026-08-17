import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveTranslator } from './components/InteractiveTranslator';
import { FeaturesSection } from './components/FeaturesSection';
import { InteractiveBreakdownDemo } from './components/InteractiveBreakdownDemo';
import { JlptSection } from './components/JlptSection';
import { ComparisonSection } from './components/ComparisonSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ApiKeyModal } from './components/ApiKeyModal';

function App() {
  const [selectedPresetText, setSelectedPresetText] = useState<string>('');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const handleScrollToTranslator = () => {
    const el = document.getElementById('translator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSample = (phrase: string) => {
    setSelectedPresetText(phrase);
    handleScrollToTranslator();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative bg-japanese-pattern selection:bg-rose-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenSettings={() => setIsSettingsOpen(true)}
        onScrollToTranslator={handleScrollToTranslator}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onSelectSample={handleSelectSample}
          onScrollToTranslator={handleScrollToTranslator}
        />

        {/* Live Interactive Translator Section */}
        <InteractiveTranslator
          initialInput={selectedPresetText}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        {/* Core Features Section */}
        <FeaturesSection />

        {/* Interactive Breakdown Visualizer Demo */}
        <InteractiveBreakdownDemo />

        {/* JLPT Exam & Language Learning Section */}
        <JlptSection />

        {/* Direct Comparison Matrix */}
        <ComparisonSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Settings Modal */}
      <ApiKeyModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}

export default App;
