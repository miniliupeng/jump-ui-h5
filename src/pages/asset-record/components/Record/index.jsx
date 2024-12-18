import { Badge } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import './index.less';

const Point = () => {
  const { t } = useTranslation();
  return (
    <span className="text-[var(--jp-status-1-color)]">
      <Badge
        color="#8C9AB8"
        content={Badge.dot}
        style={{
          '--right': '120%',
          '--top': '50%',
          width: 6,
          height: 6,
          minWidth: 6,
        }}
      >
        {t('已完成')}
      </Badge>
    </span>
  );
};

// 已完成
// 进行中
// 提现失败
const Record = ({ type, createDateTime, cnt }) => {
  const { t } = useTranslation();
  const textMap = {
    '08': t('充值'),
    '09': t('社区扶持'),
    '12': t('提现'),
  }
  return (
    <div className="border-b border-[var(--jp-border-fifth-color)] py-1 ">
      <div className="flex justify-between items-center mb-[2px]">
        <h1 className=" text-[var(--jp-tabs-color)] text-[14px] font-[600]">
          {textMap[type]}
        </h1>
        <Point />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[var(--jp-second-color)]">{createDateTime}</p>
        <p
          className={`${
            type === '12' ? 'withdraw-cnt' : 'recharge-cnt'
          } text-[14px] font-[600] `}
        >
          {type === '12' ? '-': '+'}
          {cnt} USDT
        </p>
      </div>
    </div>
  );
};

export default Record;
