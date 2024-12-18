import { PageLayout } from '@/common';
import { Content, Operate, ProjectList, TotalAssets } from './components';
import { Divider } from 'antd-mobile';

const Fund = () => {
  return (
    <PageLayout bodyStyle={{ padding: '16px 0' }}>
      <TotalAssets />
      <Operate />
      <Divider
        style={{
          borderColor: 'var(--jp-border-color)',
        }}
      />
      <Content />
      <ProjectList />
    </PageLayout>
  );
};

export default Fund;
