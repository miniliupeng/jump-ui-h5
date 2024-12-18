import { useQueryCoinUser } from '@/hooks/reuqest';
import { Space } from 'antd-mobile';
import { useTranslation } from 'react-i18next';

export const TotalAssets = () => {
  const { t } = useTranslation();
  const { data: { coinCnt } = {} } = useQueryCoinUser();
  return (
    <Space direction="vertical" className="px-[16px] mt-[16px]">
      <span className="text-[var(--jp-second-color)] text-[12px]">
        {t('可用余额')}
      </span>
      <span className="text-[var(--jp-primary-color)] text-[24px] font-[600]">
        $ {coinCnt}
      </span>
    </Space>
  );
};
