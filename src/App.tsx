import { useState } from 'react';
import { useKV } from '@github/spark/hooks';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/Header';
import { HomePage } from '@/components/pages/HomePage';
import { AboutPage } from '@/components/pages/AboutPage';
import { SchedulePage } from '@/components/pages/SchedulePage';
import { RSVPPage } from '@/components/pages/RSVPPage';
import { FAQPage } from '@/components/pages/FAQPage';
import { TravelPage } from '@/components/pages/TravelPage';
import { VenuePage } from '@/components/pages/VenuePage';
import { SaveTheDatePage } from '@/components/pages/SaveTheDatePage';
import { Language } from '@/lib/translations';
import { weddingConfig } from '@/lib/config';

function App() {
  const [language, setLanguage] = useKV<Language>('language', 'en');
  const [currentPage, setCurrentPage] = useState('home');

  const currentLanguage: Language = language || 'en';

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage language={currentLanguage} onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage language={currentLanguage} />;
      case 'schedule':
        return <SchedulePage language={currentLanguage} />;
      case 'rsvp':
        return <RSVPPage language={currentLanguage} />;
      case 'faq':
        return <FAQPage language={currentLanguage} />;
      case 'travel':
        return <TravelPage language={currentLanguage} />;
      case 'venue':
        return <VenuePage language={currentLanguage} />;
      case 'saveTheDate':
        return <SaveTheDatePage language={currentLanguage} />;
      default:
        return <HomePage language={currentLanguage} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        language={currentLanguage}
        onLanguageChange={setLanguage}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main className="pb-12">
        {renderPage()}
      </main>
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            {weddingConfig.couple.names} • {currentLanguage === 'en' ? weddingConfig.date.displayEn : weddingConfig.date.displayFr}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {currentLanguage === 'en' ? weddingConfig.venue.fullName : weddingConfig.venue.fullNameFr}, {weddingConfig.venue.city}, {weddingConfig.venue.province}
          </p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}

export default App;