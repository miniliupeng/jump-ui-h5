import { useQueryCoinProject } from '@/hooks/reuqest';
import { Plan } from '../Plan';
import './index.less';
import { useTranslation } from 'react-i18next';

export const Content = () => {
  const { data } = useQueryCoinProject();
  const { t } = useTranslation();

  return (
    <div className="px-[16px]">
      <h1 className="field-title mb-[16px]">{t('投资计划')}</h1>
      <div className="plan-list__container  list-container ">
        {data?.map((item) => (
          <Plan key={item.projectId} {...item} />
        ))}
      </div>
    </div>
  );
};
