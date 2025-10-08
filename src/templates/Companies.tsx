import type { FC } from 'react';
import Image from 'next/image';

import { Section } from '@/layout/Section';

interface Company {
  name: string;
  role: string;
  period: string;
  logo: string;
  website: string | null;
  invertInLightMode?: boolean;
}

interface CompaniesProps {
  companies: Company[];
  title?: string;
  subtitle?: string;
  gridCols?: string;
  showAnimations?: boolean;
}

const Companies: FC<CompaniesProps> = ({
  companies,
  title = "Companies I've Worked With",
  subtitle = 'A journey through my career spanning startups, enterprises, and everything in between',
  gridCols = 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4',
  showAnimations = true,
}) => {

  return (
    <div
      id="companies-section"
      className="bg-gray-50 transition-colors duration-300 dark:bg-gray-900"
    >
      <Section yPadding="py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
        </div>

        <div className="flex justify-center px-4">
          <div
            className={`grid ${gridCols} w-full max-w-5xl place-items-center justify-items-center gap-6 md:gap-8 lg:gap-10`}
          >
            {companies.map((company) => {
              const CompanyCard = company.website ? 'a' : 'div';
              const cardProps = company.website
                ? {
                    href: company.website,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'cursor-pointer',
                  }
                : {};

              return (
                <CompanyCard
                  key={company.name}
                  {...cardProps}
                  className={`company-card group relative transform rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl dark:bg-gray-800 ${
                    cardProps.className || ''
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-16 w-20 items-center justify-center rounded-lg bg-white p-3 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-gray-700">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={80}
                        height={64}
                        className={`max-h-full max-w-full object-contain transition-none ${
                          company.invertInLightMode
                            ? 'invert dark:invert-0 dark:brightness-90'
                            : 'dark:brightness-90'
                        }`}
                        loading="eager"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.parentElement?.querySelector(
                            '.logo-fallback',
                          ) as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="logo-fallback hidden h-full w-full items-center justify-center text-2xl font-bold text-gray-600 dark:text-gray-300">
                        {company.name.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        {company.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {company.period}
                      </p>
                    </div>
                  </div>
                  {company.website && (
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  )}
                </CompanyCard>
              );
            })}
          </div>
        </div>

        {/* Floating animation elements */}
        {showAnimations && (
          <div className="relative mt-20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin-slow text-6xl opacity-10">⚙️</div>
            </div>
            <div
              className="absolute left-10 top-10 animate-bounce text-4xl opacity-20"
              style={{ animationDelay: '1s' }}
            >
              💻
            </div>
            <div
              className="absolute bottom-10 right-10 animate-bounce text-4xl opacity-20"
              style={{ animationDelay: '2s' }}
            >
              🚀
            </div>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Companies;
export type { Company, CompaniesProps };
