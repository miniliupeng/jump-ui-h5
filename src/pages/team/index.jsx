import { DetailPage } from '@/components';
import { Banner, Contract, DirectPushList, Statistic } from './components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Team = () => {
  const { t } = useTranslation();
  return (
    <DetailPage
      backText={t('返回')}
      bodyStyle={{ display: 'flex', flexDirection: 'column' }}
    >
      <Contract />
      <Banner />
      <Statistic />
      <DirectPushList />
    </DetailPage>
  );
};

export default Team;
