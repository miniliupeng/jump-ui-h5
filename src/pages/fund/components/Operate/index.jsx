import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Operate = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex px-[16px] gap-[16px] my-[16px]">
      <Button className="block-btn" block type="submit" color="primary" onClick={() => navigate('/recharge')}>
        {t('充值')}
      </Button>
      <Button className="block-btn" block type="submit" onClick={() => navigate('/withdraw')}>
        {t('提现')}
      </Button>
      <Button className="block-btn" block type="submit" onClick={() => navigate('/asset-record')}>
        {t('资产历史')}
      </Button>
    </div>
  );
};
