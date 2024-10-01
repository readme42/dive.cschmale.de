import type { Metadata } from 'next';

import Contact2 from '~/components/widgets/Contact2';
import { contact2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>
      <Contact2 {...contact2Contact} />
    </>
  );
};

export default Page;
