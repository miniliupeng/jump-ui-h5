import { Asset } from '../Asset';
import './index.less';
import { useTranslation } from 'react-i18next';

export const Content = () => {
  const { t } = useTranslation();

  return (
    <div className="px-[16px]">
      <h1 className="field-title mb-[16px]">{t('资产列表')}</h1>
      <div className="plan-list__container">
        <Asset />
      </div>
    </div>
  );
};
