import { PageLayout } from '@/common';
import { Banner, Notices, Operate, Statistic, Tabs } from './components';

const Home = () => {
  return (
    <PageLayout bodyStyle={{ padding: '16px 0' }}>
      <Statistic />
      <Operate />
      <Tabs />
      <Banner />
      <Notices />
    </PageLayout>
  );
};

export default Home;
