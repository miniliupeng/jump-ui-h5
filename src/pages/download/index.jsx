import { PageLayout } from '@/common';
import downloadBg from './assets/download_bg.svg';
import androidSrc from './assets/android.svg';
import googleSrc from './assets/google.svg';
import { Image, Space, Toast } from 'antd-mobile';
import './index.less';
import { useTranslation } from 'react-i18next';

const Download = () => {
  const { t } = useTranslation();
  return (
    <PageLayout bodyStyle={{ padding: '32px 30px' }}>
      <Image src={downloadBg} />
      <h1 className="jp-title mb-[16px!important] text-title mt-[16px]">
        JPC APP
      </h1>
      <p className="text-[var(--jp-second-color)] indent-2">
        {t('JPC是Jump Crypto旗下的链上套利平台')}
      </p>
      <Space block justify="between" className="mt-[24px]">
        <Image src={googleSrc} onClick={() => Toast.show(t('系统正在开发中'))} />

        <a href={`${window.location.origin}/jpc.apk`} download>
          <Image src={androidSrc} />
        </a>
      </Space>
    </PageLayout>
  );
};

export default Download;
