import { Button, Divider, Space, Stepper, Toast } from 'antd-mobile';
import './index.less';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQueryCoinProject, useQueryCoinUser } from '@/hooks/reuqest';
import { addCoinUserProject } from '@/api/investment';

export const Plan = ({
  projectId,
  projectName,
  rate,
  projectProfit,
  readyCnt,
}) => {
  const [coinCnt, setCount] = useState(1);
  const { data: userInfo, mutate: updateUserInfo } = useQueryCoinUser();
  const { mutate: updateProjectList } = useQueryCoinProject();
  const { t } = useTranslation();

  const onBuy = async () => {
    try {
      await addCoinUserProject({
        coinAddress: userInfo.coinName,
        coinCnt,
        buyType: 0,
        projectId,
      });
      updateUserInfo();
      updateProjectList();
      Toast.show({
        icon: 'success',
        content: t('投资成功'),
      });
    } catch (error) {}
  };

  return (
    <div className="plan__container">
      <div className="plan__container__header">{projectName}</div>
      <div className="plan__container__statistic">
        <Space direction="vertical" align="center">
          <span className="plan__container__statistic__value plan__container__statistic__value--active">
            {projectProfit}%
          </span>
          <span className="plan__container__statistic__label">
            {t('收益（每日）')}
          </span>
        </Space>
        <Divider direction="vertical" />
        <Space direction="vertical" align="center">
          <span className="plan__container__statistic__value">{readyCnt} {t('天')}</span>
          <span className="plan__container__statistic__label">
            {t('周期')}
          </span>
        </Space>
        <Divider direction="vertical" />
        <Space direction="vertical" align="center" >
          <span className="plan__container__statistic__value">{rate} USDT</span>
          <span className="plan__container__statistic__label">
            {t('投资额')}
          </span>
        </Space>
      </div>
      <Divider
        style={{
          borderColor: 'var(--jp-border-third-color)',
          marginBottom: 13,
        }}
      />
      <div className="plan__container__operate">
        <Stepper className="jp-stepper" onChange={setCount} value={coinCnt} min={1} />
        <Button
          className="recharge-btn"
          type="submit"
          color="primary"
          fill="outline"
          onClick={onBuy}
        >
          {t('激活合约')}
        </Button>
      </div>
    </div>
  );
};
