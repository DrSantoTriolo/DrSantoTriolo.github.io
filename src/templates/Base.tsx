import { companiesData } from '@/data/companies';
import { heroData } from '@/data/hero';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import Companies from '@/templates/Companies';
import { Hero } from '@/templates/Hero';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero
      name={heroData.name}
      description={heroData.description}
      scrollTargetId={heroData.scrollTargetId}
      showScrollHint={heroData.showScrollHint}
    />
    <Companies companies={companiesData} />
  </div>
);

export { Base };
