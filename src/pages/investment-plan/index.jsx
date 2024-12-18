import { PageLayout } from '@/common';
import { Banner } from '../home/components';
import { AvailableAssets, Content } from './components';
import { Divider } from 'antd-mobile';

const InvestmentPlan = () => {
  return (
    <PageLayout bodyStyle={{ padding: '0' }}>
      <Banner className="mt-0" />
      <AvailableAssets />
      <Divider
        style={{
          borderColor: 'var(--jp-border-color)',
        }}
      />
      <Content />
    </PageLayout>
  );
};
export default InvestmentPlan;
