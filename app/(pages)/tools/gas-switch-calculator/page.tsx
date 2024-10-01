import { Metadata } from 'next';
import GasApp from '~/components/widgets/gas-selector/GasApp';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <GasApp></GasApp>
    </>
  );
};

export default Page;
