import { MapTrifold } from '@phosphor-icons/react';
import { translations, Language } from '@/lib/translations';

interface VenuePageProps {
  language: Language;
}

export function VenuePage({ language }: VenuePageProps) {
  const t = translations[language].venue;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-20">
        <MapTrifold className="w-12 h-12 mx-auto mb-8 text-accent" weight="thin" />
        <h1 className="text-5xl md:text-7xl text-display mb-6 text-foreground">
          {t.title}
        </h1>
      </div>

      <div className="elegant-border pt-16 pb-16 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-display mb-4 text-foreground">
            {t.name}
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
            {t.address}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
      </div>

      <div className="aspect-video bg-muted border border-border overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.8!2d-73.9167!3d45.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI1JzAwLjEiTiA3M8KwNTUnMDAuMSJX!5e0!3m2!1sen!2sca!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t.name}
        />
      </div>
    </div>
  );
}