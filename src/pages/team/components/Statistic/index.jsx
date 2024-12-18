import { useTranslation } from 'react-i18next';
import { useQueryCoinUser } from '@/hooks/reuqest';

export const Statistic = () => {
  const { t } = useTranslation();
  const { data: userInfo = {} } = useQueryCoinUser();
  return (
    <div className="flex gap-[16px] justify-between">
      <div className="flex-1">
        <h1 className="field-title mb-[16px]">{t('我的直推')}</h1>
        <div className="flex h-[122px] jp-gradient-bg border border-[var(--jp-border-forth-color)]">
          <div className="flex flex-col justify-between items-center m-[auto] text-[var(--jp-forth-color)]">
            <span className='text-[var(--jp-seventh-color)]'>{t('直推用户数')}</span>
            <span className="flex-1 my-[9px] text-[24px] text-[var(--adm-color-primary)]">
              {userInfo.underCount}
            </span>
            <span className='text-center'>{t('投资额')}：{userInfo.underAmount || '0.00'}</span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="field-title mb-[16px]">{t('我的团队')}</h1>
        <div className="flex h-[122px] jp-gradient-bg border border-[var(--jp-border-forth-color)]">
          <div className="flex flex-col justify-between items-center m-[auto] text-[var(--jp-forth-color)]">
            <span className='text-[var(--jp-seventh-color)]'>{t('团队用户数')}</span>
            <span className="flex-1 my-[9px] text-[24px] text-[var(--adm-color-primary)]">
              {userInfo.ingProjectSumUnderCount || 0}
            </span>
            <span className='text-center'>{t('投资额')}：{userInfo.ingProjectSumUnderAll}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
