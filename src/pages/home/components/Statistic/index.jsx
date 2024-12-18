import { Divider, Space } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import './index.less';
import { useQueryCoinUser } from '@/hooks/reuqest';

export const Statistic = () => {
  const { t } = useTranslation();
  const { data: { totalAmount = '0.00', totalRate = '0.00' } = {} } = useQueryCoinUser();
  return (
    <div className="statistic__conotainer flex px-[16px]">
      <Space direction="vertical" className="flex-1">
        <span className="text-[var(--jp-second-color)]">{t('总资产')}</span> 
        <span className="statistic__value">$ {totalAmount}</span>
      </Space>
      <Divider direction="vertical" />
      <Space direction="vertical" className="flex-1">
        <span className="text-[var(--jp-second-color)]">{t('已创造利润')}</span> 
        <span className="statistic__value">$ {totalRate}</span>
      </Space>
    </div>
  );
};
