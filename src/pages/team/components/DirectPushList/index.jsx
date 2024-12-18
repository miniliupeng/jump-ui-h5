import { useQueryCoinUser } from '@/hooks/reuqest';
import { DirectPush } from '../DirectPush';
import { useTranslation } from 'react-i18next';

export const DirectPushList = () => {
  const { t } = useTranslation();
  const { data: { underCoinAddressAndAmout = [] } = {} } = useQueryCoinUser();
  return (
    <div>
      <h1 className="field-title my-[16px]">{t('直推列表')}</h1>
      <div className="list-container ">
        {underCoinAddressAndAmout.map((item, index) => (
          <DirectPush key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
