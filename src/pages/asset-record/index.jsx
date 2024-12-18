import { DetailPage, SwiperTabs } from '@/components';
import { useTranslation } from 'react-i18next';
import { Content } from './components/Content';
import './index.less';
const AssetRecord = () => {
  const { t } = useTranslation();
  return (
    <DetailPage
      backText={t('返回')}
      bodyStyle={{ marginBottom: 72 }}
      title={t('资产历史')}
    >
      <SwiperTabs
        className="asset-record-swiper"
        items={[
          {
            key: '1',
            title: t('全部'),
            content: <Content type="08,09,12" />,
          },
          {
            key: '2',
            title: t('充值'),
            content: <Content type="08" />,
          },
          {
            key: '3',
            title: t('提现'),
            content: <Content type="12" />,
          },
        ]}
      />
    </DetailPage>
  );
};

export default AssetRecord;
