import { useQueryCoinUser } from '@/hooks/reuqest';
import { Space } from 'antd-mobile';
import { useTranslation } from 'react-i18next';

export const Realized = () => {
  const { t } = useTranslation();
  const { data: { totalRate = '0.00' } = {} } = useQueryCoinUser();

  return (
    <div className="my-[16px] mx-[16px] h-[80px] border border-[var(--jp-border-forth-color)] jp-gradient-bg">
      <Space
        style={{ '--gap': '4px' }}
        direction="vertical"
        className="mt-[16px] ml-[16px]"
      >
        <span className="text-[12px]">{t('已实现利润')}</span>
        <span className="text-[20px] font-[600] text-[var(--adm-color-primary)]">
          {totalRate} USDT
        </span>
      </Space>
    </div>
  );
};
