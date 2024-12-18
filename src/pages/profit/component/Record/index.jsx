import { Space } from 'antd-mobile';
import { useTranslation } from 'react-i18next';

export const Record = ({ type, createDateTime, cnt }) => {
  const { t } = useTranslation();
  const typeMap = {
    '01': t('项目利息收入'),
    '02': t('项目本金收入'),
    '03': t('直推奖励'),
    '04': t('管理奖励'),
  };
  return (
    <div className="ml-[16px] pr-[16px] record__container flex justify-between items-center border-b border-[var(--jp-border-color)] pb-[12px]">
      <Space direction="vertical">
        <span className="text-[14px] font-[500]">{typeMap[type]}</span>
        <span className="text-[var(--jp-second-color)]">{createDateTime}</span>
      </Space>
      <span className="text-[var(--adm-color-primary)] text-[14px] font-[600] flex-shrink-0">
        + {cnt} USDT
      </span>
    </div>
  );
};
