import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'lib-flexible/flexible';
import './styles/tailwindcss.less'; // 先引入 tailwindcss，否则会影响antd-m样式
import { ConfigProvider } from 'antd-mobile';
// import enUS from 'antd-mobile/es/locales/en-US';
// import zhCN from 'antd-mobile/es/locales/zh-CN';
import '@/config/i18next';
import App from './App';
import './index.less'; // 先引入 tailwindcss，否则会影响antd-m样式
import { saveReferrals } from "./utils/url";
import { initTheme } from './hooks/useTheme';

// const lang = window.localStorage.getItem('changeLanguage');
const root = ReactDOM.createRoot(document.getElementById('root'));

saveReferrals()
initTheme()
root.render(
  // <React.StrictMode>
  <Router>
    <ConfigProvider /* locale={lang === 'en' ? enUS : zhCN} */>
      <App />
    </ConfigProvider>
  </Router>
  // </React.StrictMode>
);
