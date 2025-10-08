import type { ReactNode } from 'react';

import { Background } from '@/background/Background';
import { useTheme } from '@/context/ThemeContext';
import { HeroOneButton } from '@/hero/HeroOneButton';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import { SocialNav } from '@/navigation/SocialNav';

type HeroProps = {
  name: ReactNode;
  description: string;
  scrollTargetId?: string;
  showScrollHint?: boolean;
};

const Hero = ({
  name,
  description,
  scrollTargetId,
  showScrollHint = true,
}: HeroProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleScrollClick = () => {
    if (scrollTargetId) {
      const targetSection = document.getElementById(scrollTargetId);
      targetSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Background color={isDark ? 'bg-dark' : 'bg-gray-100'}>
      <div className="flex min-h-screen flex-col">
        <Section yPadding="py-6">
          <NavbarTwoColumns>
            <SocialNav />
          </NavbarTwoColumns>
        </Section>

        <Section yPadding="flex-grow flex items-center justify-center">
          <HeroOneButton title={name} description={description} />
        </Section>

        {/* Scroll Hint */}
        {showScrollHint && (
          <div className="flex justify-center pb-8">
            <div className="animate-bounce">
              <svg
                className="h-8 w-8 cursor-pointer text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleScrollClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </Background>
  );
};

export { Hero };
