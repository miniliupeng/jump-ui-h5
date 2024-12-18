import { Image, Space } from 'antd-mobile';
import { ReactComponent as UserIcon } from './assets/user.svg';
import { formatEmail } from '@/utils';
import { useTranslation } from 'react-i18next';

export const DirectPush = ({ coinAddress, coinCnt }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-[16px] h-[76px] border border-[var(--jp-border-forth-color)] jp-gradient-bg">
      <div className="w-[56px] h-[20px] float-right leading-[20px] bg-[var(--adm-color-primary)] text-center text-[var(--jp-button-color)] font-[600]">
        {t('运行中')}
      </div>
      <div className="flex items-start gap-[8px] mt-[18px] ml-[16px]">
        <UserIcon />
        <Space direction="vertical" className="-mt-[2px]">
          <span className="font-[500] text-[14px]">
            {/* {formatEmail(coinAddress)} */}
            {coinAddress}
          </span>
          <span className="text-[var(--jp-forth-color)]">
            {t('投资额')}：{coinCnt} USDT
          </span>
        </Space>
      </div>
    </div>
  );
};
