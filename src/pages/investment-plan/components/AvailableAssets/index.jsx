import { Button, Space } from 'antd-mobile';
import './index.less';
import { useNavigate } from 'react-router-dom';
import { useQueryCoinUser } from '@/hooks/reuqest';
import { useTranslation } from 'react-i18next';

export const AvailableAssets = () => {
  const navigate = useNavigate();
  const { data: userInfo } = useQueryCoinUser();
  const { t } = useTranslation();

  return (
    <div className="available-assets__container px-[16px] flex items-center justify-between">
      <Space direction="vertical">
        <span className="text-[var(--jp-second-color)] text-[12px]">{t('可用资产')}</span>
        <span className="text-[var(--jp-primary-color)] text-[24px] font-[600]">
          {userInfo?.coinCnt} USDT
        </span>
      </Space>
      <Button
        className="recharge-btn"
        type="submit"
        color="primary"
        onClick={() => navigate('/recharge')}
      >
        {t('充值')}
      </Button>
    </div>
  );
};
