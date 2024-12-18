import { DetailPage } from '@/components';
import { useTranslation } from 'react-i18next';
import { Realized, Records } from './component';

const Profit = () => {
  const { t } = useTranslation();
  return (
    <DetailPage backText={t('返回')} bodyStyle={{ padding: 0 }}>
      <Realized />
      <Records />
    </DetailPage>
  );
};

export default Profit;
