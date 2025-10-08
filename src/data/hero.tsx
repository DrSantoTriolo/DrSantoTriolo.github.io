import type { ReactNode } from 'react';

export interface HeroData {
  name: ReactNode;
  description: string;
  scrollTargetId?: string;
  showScrollHint?: boolean;
}

export const heroData: HeroData = {
  name: <span className="hero-title-animated">Jehandad Kamal</span>,
  description: 'Systems Engineer · CoFounder · LLM Evangelist',
  scrollTargetId: 'companies-section',
  showScrollHint: true,
};
