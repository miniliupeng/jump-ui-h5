import { useTranslation } from 'react-i18next';
import { Project } from '../Project';
import { useQueryCoinUserProject } from '@/hooks/reuqest';

export const ProjectList = () => {
  const { t } = useTranslation();
  const { data = [] } = useQueryCoinUserProject();
  return (
    <div className="px-[16px] pt-[16px]">
      <h1 className="field-title mb-[16px]">{t('运行中的合约')}</h1>
      <div className="plan-list__container">
        {data.map((item) => (
          <Project key={item.cupId} {...item} />
        ))}
      </div>
    </div>
  );
};
