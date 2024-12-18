import { ReactComponent as WarnIcon } from './assets/warn.svg';
import { ReactComponent as SuccessIcon } from './assets/success.svg';
const iconMap = {
  warn: WarnIcon,
  success: SuccessIcon,
};
export const Result = ({ type, title, description, footer }) => {
  const Component = iconMap[type];
  return (
    <div className="flex flex-col items-center">
      <Component />
      <h1 className="text-[16px] font-[600] mt-[16px]">{title}</h1>
      <p className="text-[var(--jp-second-color)] mt-[8px] mb-[24px]">
        {description}
      </p>
      <div className="self-stretch">{footer}</div>
    </div>
  );
};
