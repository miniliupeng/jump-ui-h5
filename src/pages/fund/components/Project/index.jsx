import { Divider, Space } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import './index.less';

export const Project = ({
  projectName,
  luckNum,
  projectProfit,
}) => {
  const { t } = useTranslation();

  return (
    <div className="project__container">
      <div className="project__container__header">{projectName}</div>
      <div className="project__container__statistic">
        <Space direction="vertical" align="center">
          <span className="project__container__statistic__value project__container__statistic__value--active">
            {luckNum} {t('天')}
          </span>
          <span className="project__container__statistic__label">
            {t('剩余时间')}
          </span>
        </Space>
        <Divider direction="vertical" />
        <Space direction="vertical" align="center">
          <span className="project__container__statistic__value">{projectProfit || '0.00'} USDT</span>
          <span className="project__container__statistic__label">
            {t('已产生利润')}
          </span>
        </Space>
      </div>
    </div>
  );
};
