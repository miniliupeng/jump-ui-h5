import { DetailPage, LanguageSwitch } from '@/components';
// import { Logo } from '../Logo';
import { ReactComponent as LogoIcon } from './assets/logo.svg';
export const PageLayout = ({ children, bodyStyle }) => {
  return (
    <DetailPage
      backArrow={<LogoIcon />}
      extra={<LanguageSwitch />}
      bodyStyle={bodyStyle}
      onBack={() => {}}
    >
      {children}
    </DetailPage>
  );
};
