import { DetailPage } from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { ReactComponent as SelectedIcon } from '@/components/LanguageSwitch/assets/svg/selected.svg';

const Theme = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  return (
    <DetailPage className={'notice-detail__container'} backText="返回">
      <h1 className="jp-title mb-[16px!important]">{t('主题模式')}</h1>
      <div
        className="flex justify-between items-center h-[56px]"
        onClick={toggleTheme}
      >
        <span>{t('日间模式')}</span>
        {theme === 'light' && <SelectedIcon width={24} height={24} />}
      </div>
      <div
        className="flex justify-between items-center h-[56px]"
        onClick={toggleTheme}
      >
        <span>{t('夜间模式')}</span>
        {theme === 'dark' && <SelectedIcon width={24} height={24} />}
      </div>
    </DetailPage>
  );
};

export default Theme;
