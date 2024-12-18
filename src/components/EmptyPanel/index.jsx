import { useTheme } from '@/hooks/useTheme';
import { Image } from 'antd-mobile';
import emptyDarkSrc from './assets/empty.png';
import emptyLightSrc from './assets/empty_2.png';
import { useTranslation } from 'react-i18next';

export const EmptyPanel = ({ height = 300, description = '暂无历史' }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div className="flex" style={{ height }}>
      <div className="m-auto flex items-center justify-center flex-col">
        <Image
          src={theme === 'dark' ? emptyDarkSrc : emptyLightSrc}
          width={64}
          height={64}
        />
        <p className='text-[var(--jp-second-color)]'>{t(description)}</p>
      </div>
    </div>
  );
};
