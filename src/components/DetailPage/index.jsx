import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconBack } from './assets/svg/arrow-back.svg';
import './index.less';
import { useTranslation } from 'react-i18next';

export const DetailPage = ({
  className,
  backPath,
  title,
  children,
  bodyStyle,
  backArrow = <IconBack className="mt-[-5px]" width={18} height={20} />,
  extra,
  backText,
  onBack,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const back = () => {
    if (onBack) {
      onBack();
      return;
    }
    navigate(backPath || -1);
  };
  return (
    <section
      className={`flex flex-col h-full ${className} detail-page__container`}
    >
      <NavBar
        backArrow={backArrow}
        back={t(backText)}
        onBack={back}
        right={extra}
        className="px-[16px!important] relative"
      >
        <h1 className="text-[15px] text-[var(--jp-primary-color)] font-[600] ">{title}</h1>
      </NavBar>
      <div className="p-[16px] flex-1 overflow-y-auto" style={bodyStyle}>
        {children}
      </div>
    </section>
  );
};
