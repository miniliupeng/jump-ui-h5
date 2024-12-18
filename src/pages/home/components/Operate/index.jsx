import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Operate = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // 引入 useTranslation 并定义 t 函数

  return (
    <div className="flex px-[16px] gap-[16px] my-[16px]">
      <Button
        className="block-btn"
        block
        type="submit"
        color="primary"
        onClick={() => navigate('/recharge')}
      >
        {t('充值')} {/* 使用 t 函数进行国际化处理 */}
      </Button>
      <Button
        className="block-btn"
        block
        type="submit"
        onClick={() => navigate('/invite')}
      >
        {t('邀请')} {/* 使用 t 函数进行国际化处理 */}
      </Button>
    </div>
  );
};
