import { useState } from 'react';
import { ReactComponent as LanguageSwitchIcon } from './assets/svg/language-switch.svg';
import { ReactComponent as SelectedIcon } from './assets/svg/selected.svg';

import i18next from '@/config/i18next';
import { useTranslation } from 'react-i18next';
import './index.less';

export const LanguageSwitch = () => {
  let [visible, setVisible] = useState(false);
  const { i18n } = useTranslation();
  const handleClick = () => {
    if (visible) {
      visible = false;
    } else {
      visible = true;
    }
    setVisible(visible);
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    window.localStorage.setItem('changeLanguage', lang);
    visible = !visible;
    setVisible(visible);
    window.location.reload();
  };

  return (
    <>
      <div className="language-switch-div">
        <LanguageSwitchIcon width={23} height={23} onClick={handleClick} />
        <div
          className="m-test"
          style={{
            display: `${visible ? 'block' : 'none'}`,
          }}
        >
          <div
            className={`${i18n.language === 'cn' ? 'selected' : ''} px-1`}
            onClick={() => changeLanguage('cn')}
          >
            中文
            {i18n.language === 'cn' && (
              <SelectedIcon className=" float-right" width={24} height={24} />
            )}
          </div>
          <div
            className={`${i18n.language === 'en' ? 'selected' : ''} px-1`}
            onClick={() => changeLanguage('en')}
            style={{ borderTop: 0 }}
          >
            English
            {i18n.language === 'en' && (
              <SelectedIcon className=" float-right" width={24} height={24} />
            )}
          </div>
          <div
            className={`${i18n.language === 'tw' ? 'selected' : ''} px-1`}
            onClick={() => changeLanguage('tw')}
            style={{ borderTop: 0 }}
          >
            ภาษาไทย
            {i18n.language === 'tw' && (
              <SelectedIcon className=" float-right" width={24} height={24} />
            )}
          </div>
          <div
            className={`${i18n.language === 'yn' ? 'selected' : ''} px-1`}
            onClick={() => changeLanguage('yn')}
            style={{ borderTop: 0 }}
          >
            Việt nam
            {i18n.language === 'yn' && (
              <SelectedIcon className=" float-right" width={24} height={24} />
            )}
          </div>

          <div
            className={`${i18n.language === 'hw' ? 'selected' : ''} px-1`}
            onClick={() => changeLanguage('hw')}
            style={{ borderTop: 0 }}
          >
            한글
            {i18n.language === 'hw' && (
              <SelectedIcon className=" float-right" width={24} height={24} />
            )}
          </div>
          <div
            className={`${i18n.language === 'rw' ? 'selected' : ''} px-1`}
            onClick={() => changeLanguage('rw')}
            style={{ borderTop: 0 }}
          >
            日本語です
            {i18n.language === 'rw' && (
              <SelectedIcon className=" float-right" width={24} height={24} />
            )}
          </div>
          <div
            className={`${i18n.language === 'ynw' ? 'selected' : ''} px-1`}
            onClick={() => changeLanguage('ynw')}
            style={{ borderTop: 0 }}
          >
            Bahasa Indonesia
            {i18n.language === 'ynw' && (
              <SelectedIcon className=" float-right" width={24} height={24} />
            )}
          </div>
          <div
            className={`${i18n.language === 'mlw' ? 'selected' : ''} px-1`}
            onClick={() => changeLanguage('mlw')}
            style={{ borderTop: 0 }}
          >
            Bahasa Melayu
            {i18n.language === 'mlw' && (
              <SelectedIcon className=" float-right" width={24} height={24} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
