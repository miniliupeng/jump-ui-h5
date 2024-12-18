import { useQueryCoinUser } from '@/hooks/reuqest';
import { Space } from 'antd-mobile';
import { useTranslation } from 'react-i18next';

export const Contract = () => {
  const { t } = useTranslation();
  const levelMap = {
    0: t('普通'),
    1: t('经理'),
  };
  const { data: userInfo } = useQueryCoinUser();
  return (
    <div className="flex justify-between items-start">
      <Space direction="vertical">
        <span className="text-[var(--jp-second-color)] text-[12px]">
          {t('您运行中的合约')}
        </span>
        <span className="text-[var(--jp-primary-color)] text-[24px] font-[600]">
          {userInfo?.ingCoinCnt ?? '0.00'} USDT
        </span>
      </Space>
      <div className="flex items-center justify-between gap-[8px] bg-[var(--adm-color-primary)] py-[3px] px-[5px] text-[var(--jp-button-color)]">
        <span>Level</span>
        <span className="text-[var(--adm-color-primary)] inline-block h-[18px] px-[4px] text-center leading-[18px] bg-[var(--jp-background-color)] ">
          {levelMap[userInfo?.level]}
        </span>
      </div>
    </div>
  );
};
