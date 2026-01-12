import { CalendarHeart } from '@phosphor-icons/react';
import { translations, Language } from '@/lib/translations';

interface SaveTheDatePageProps {
  language: Language;
}

export function SaveTheDatePage({ language }: SaveTheDatePageProps) {
  const t = translations[language].saveTheDate;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-20">
        <CalendarHeart className="w-12 h-12 mx-auto mb-8 text-accent" weight="thin" />
        <h1 className="text-5xl md:text-7xl text-display mb-6 text-foreground">
          {t.title}
        </h1>
        <p className="text-base text-muted-foreground">
          {t.description}
        </p>
      </div>

      <div className="elegant-border pt-16 pb-16">
        <div className="max-w-md mx-auto bg-[#f5f0e8] p-8 border border-border shadow-2xl">
          <svg viewBox="0 0 400 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="600" fill="#f5f0e8"/>
            
            <rect x="20" y="20" width="360" height="560" fill="none" stroke="#3d5a99" strokeWidth="8" rx="4"/>
            
            <text x="200" y="80" fontFamily="'Courier New', monospace" fontSize="22" fill="#3d5a99" textAnchor="middle" fontWeight="normal">
              Save the date
            </text>
            <text x="200" y="110" fontFamily="'Courier New', monospace" fontSize="22" fill="#3d5a99" textAnchor="middle" fontWeight="normal">
              06/06/2026
            </text>
            
            <g transform="translate(200, 280)">
              <ellipse cx="0" cy="-50" rx="30" ry="80" fill="#1a1a1a"/>
              <ellipse cx="0" cy="-130" rx="20" ry="20" fill="#1a1a1a"/>
              <path d="M -20 -130 L -22 -150 L -18 -150 Z" fill="#1a1a1a"/>
              <path d="M 20 -130 L 22 -150 L 18 -150 Z" fill="#1a1a1a"/>
              
              <rect x="-35" y="-30" width="70" height="80" fill="#f5f0e8" stroke="#1a1a1a" strokeWidth="2"/>
              <text x="0" y="10" fontFamily="'Courier New', monospace" fontSize="20" fill="#1a1a1a" textAnchor="middle" fontWeight="bold">
                JUSTINE
              </text>
              <line x1="-25" y1="20" x2="25" y2="20" stroke="#1a1a1a" strokeWidth="2"/>
              <text x="0" y="40" fontFamily="'Courier New', monospace" fontSize="20" fill="#1a1a1a" textAnchor="middle" fontWeight="bold">
                ALEX
              </text>
              
              <circle cx="0" cy="-50" r="15" fill="#f5f0e8" stroke="#1a1a1a" strokeWidth="2"/>
              <path d="M -4 -50 Q 0 -45 4 -50 T 12 -50" fill="none" stroke="#1a1a1a" strokeWidth="1.5"/>
            </g>
            
            <g transform="translate(80, 350)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#3d5a99" strokeWidth="2"/>
              <ellipse cx="0" cy="45" rx="8" ry="15" fill="none" stroke="#3d5a99" strokeWidth="2"/>
              <line x1="0" y1="60" x2="0" y2="80" stroke="#3d5a99" strokeWidth="2"/>
            </g>
            
            <g transform="translate(165, 380)">
              <rect x="0" y="0" width="8" height="50" fill="#3d5a99"/>
              <circle cx="4" cy="-5" r="6" fill="#3d5a99"/>
            </g>
            
            <g transform="translate(320, 360)">
              <path d="M 0 0 Q -10 20 -5 40 T 5 70" stroke="#3d5a99" strokeWidth="2" fill="none"/>
              <circle cx="0" cy="0" r="3" fill="#3d5a99"/>
              <circle cx="-8" cy="25" r="3" fill="#3d5a99"/>
              <circle cx="2" cy="50" r="3" fill="#3d5a99"/>
            </g>
            
            <text x="200" y="490" fontFamily="'Courier New', monospace" fontSize="20" fill="#3d5a99" textAnchor="middle">
              Fritz Community
            </text>
            <text x="200" y="515" fontFamily="'Courier New', monospace" fontSize="20" fill="#3d5a99" textAnchor="middle">
              Center, Montreal
            </text>
            
            <text x="200" y="555" fontFamily="'Courier New', monospace" fontSize="14" fill="#3d5a99" textAnchor="middle" fontStyle="italic">
              Formal invitation to follow
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}