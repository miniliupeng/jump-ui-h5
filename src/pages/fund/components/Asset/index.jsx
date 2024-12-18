import { Image, Space } from 'antd-mobile';
import AssetLogo from './assets/asset-logo.svg';
import { useTranslation } from 'react-i18next';
import { useQueryCoinUser } from '@/hooks/reuqest';

export const Asset = () => {
  const { t } = useTranslation();
  const { data: { coinCnt = '0.00', totalAmount = '0.00', sumProjectAmount = '0.00' } = {} } =
    useQueryCoinUser();
  return (
    <div className="flex items-start">
      <Image src={AssetLogo} width={24} />
      <div className="flex-1 pb-[16px] border-b-[1px] border-[var(--jp-border-color)]">
        <div className="flex justify-between">
          <Space
            direction="vertical"
            className="px-[16px]"
            style={{ '--gap': '4px' }}
          >
            <span className="text-[var(--jp-primary-color)] text-[16px] font-[600]">
              USDT
            </span>
            <span className="text-[var(--jp-second-color)] text-[12px] ">
              Tether
            </span>
          </Space>
          <Space
            direction="vertical"
            align="end"
            className="pl-[16px]"
            style={{ '--gap': '4px' }}
          >
            <span className="text-[var(--jp-primary-color)] text-[14px] font-[600]">
              {t('总资产')}
            </span>
            <span className="text-[var(--jp-second-color)] text-[12px] ">
              $ {totalAmount}
            </span>
          </Space>
        </div>
        <div className="flex justify-between">
          <Space
            direction="vertical"
            className="px-[16px] mt-[16px]"
            style={{ '--gap': '4px' }}
          >
            <span className="text-[var(--jp-second-color)] text-[12px]">
              {t('可用')}
            </span>
            <span className="text-[var(--jp-primary-color)] text-[14px] font-[600]">
              {coinCnt}
            </span>
          </Space>
          <Space
            direction="vertical"
            align="end"
            className="pl-[16px] mt-[16px]"
            style={{ '--gap': '4px' }}
          >
            <span className="text-[var(--jp-second-color)] text-[12px]">
              {t('合约中')}
            </span>
            <span className="text-[var(--jp-primary-color)] text-[14px] font-[600]">
              {sumProjectAmount}
            </span>
          </Space>
        </div>
      </div>
    </div>
  );
};
