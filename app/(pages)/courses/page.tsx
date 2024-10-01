import type { Metadata } from 'next';

import Features3 from '~/components/widgets/Features3';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Testimonials2 from '~/components/widgets/Testimonials2';
import {
  hero2About,
  statsAbout,
  testimonials2About
} from '~/shared/data/pages/about.data';
import { coursesAdvanced, coursesBeginner, coursesXr } from '~/shared/data/pages/courses.data';

export const metadata: Metadata = {
  title: `About us 2`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Stats {...statsAbout} />
      <Features3 {...coursesBeginner} />
      <Features3 {...coursesAdvanced} />
      <Features3 {...coursesXr} />
      {/*<Team2 {...teamAbout} />*/}
      <Testimonials2 {...testimonials2About} />
    </>
  );
};

export default Page;
