import { TabBar } from 'antd-mobile';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomeIcon } from './assets/HomeIcon';
import { InvestIcon } from './assets/InvestIcon';
import { FundIcon } from './assets/FundIcon';
import { MyIcon } from './assets/MyIcon';

export const NavBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const setRouteActive = (value) => {
    navigate(value);
  };
  let tabs = [
    {
      key: '/home',
      title: t('首页'),
      icon: <HomeIcon active={pathname === '/home'} />,
    },
    {
      key: '/investment-plan',
      title: t('投资计划'),
      icon: <InvestIcon active={pathname === '/investment-plan'} />,
    },
    {
      key: '/fund',
      title: t('资金'),
      icon: <FundIcon active={pathname === '/fund'} />,
    },
    {
      key: '/user',
      title: t('我的'),
      icon: <MyIcon active={pathname === '/user'} />,
    },
  ];

  const showNavBar = tabs.some((item) => item.key === pathname);
  return (
    <>
      {showNavBar && (
        <TabBar
          activeKey={pathname}
          onChange={(value) => setRouteActive(value)}
          // className="border-t border-[--adm-color-border]"
          style={{
            '--adm-font-size-2': '10px',
            '--adm-color-primary': 'var(--jp-button-default-color)',
            '--adm-color-text-secondary': 'var(--jp-second-color)',
          }}
        >
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      )}
    </>
  );
};
