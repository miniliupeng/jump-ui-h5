import { Space, Toast } from 'antd-mobile';
import { ReactComponent as TeamIcon } from './assets/team.svg';
import { ReactComponent as ProfitIcon } from './assets/profit.svg';
import { ReactComponent as WithdrawIcon } from './assets/withdraw.svg';
import { ReactComponent as SupportIcon } from './assets/support.svg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Tabs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex justify-between px-[16px] gap-[32px] text-[var(--jp-fifth-color)]">
      <Space
        direction="vertical"
        className="flex-1"
        align="center"
        onClick={() => navigate('/team')}
        style={{ '--gap': '0px' }}
      >
        <TeamIcon />
        <span>{t('团队')}</span>
      </Space>
      <Space
        direction="vertical"
        className="flex-1"
        align="center"
        onClick={() => navigate('/profit')}
        style={{ '--gap': '0px' }}
      >
        <ProfitIcon />
        <span>{t('利润')}</span>
      </Space>
      <Space
        direction="vertical"
        className="flex-1"
        align="center"
        onClick={() => navigate('/withdraw')}
        style={{ '--gap': '0px' }}
      >
        <WithdrawIcon />
        <span>{t('提现')}</span>
      </Space>
      <Space
        direction="vertical"
        className="flex-1"
        align="center"
        // onClick={() => window.open('https://t.me/jpccrypto')}
        onClick={() => Toast.show(t('系统正在开发中'))}
        style={{ '--gap': '0px' }}
      >
        <SupportIcon />
        <span>{t('支持')}</span>
      </Space>
    </div>
  );
};
