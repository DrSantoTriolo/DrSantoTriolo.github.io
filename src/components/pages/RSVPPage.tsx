import { EnvelopeSimple } from '@phosphor-icons/react';
import { translations, Language } from '@/lib/translations';

interface RSVPPageProps {
  language: Language;
}

export function RSVPPage({ language }: RSVPPageProps) {
  const t = translations[language].rsvp;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-20">
        <EnvelopeSimple className="w-12 h-12 mx-auto mb-8 text-accent" weight="thin" />
        <h1 className="text-5xl md:text-7xl text-display mb-6 text-foreground">
          {t.title}
        </h1>
        <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium">
          {t.subtitle}
        </p>
      </div>

      <div className="elegant-border pt-16 pb-16">
        <p className="text-center text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.description}
        </p>
        
        <div className="aspect-video bg-muted border border-border flex items-center justify-center">
          <div className="text-center p-8">
            <EnvelopeSimple className="w-12 h-12 mx-auto mb-4 text-muted-foreground" weight="thin" />
            <p className="text-sm text-muted-foreground max-w-md">
              {language === 'en' 
                ? 'Google Form will be embedded here. Replace the iframe source with your actual Google Form URL.'
                : 'Le formulaire Google sera intégré ici. Remplacez la source de l\'iframe par l\'URL réelle de votre formulaire Google.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}