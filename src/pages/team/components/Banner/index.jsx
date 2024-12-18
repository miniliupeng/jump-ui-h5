import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './index.less';
import { useTheme } from '@/hooks/useTheme';

export const Banner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { theme } = useTheme()
  return (
    <div
      className={`my-[16px] px-[16px] h-[88px] user-banner ${theme} shrink-0`}
      onClick={() => {
        navigate('/invite');
      }}
    >
      <p className="pt-[20px] text-[white]">{t('邀请好友')}</p>
      <p className="text-[18px] font-[600] text-[white]">{t('财富青睐努力之人')}</p>
    </div>
  );
};
