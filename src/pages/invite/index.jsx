import { DetailPage } from '@/components';
import { Form, Input, Space } from 'antd-mobile';
import { QRCodeCanvas } from 'qrcode.react';
import domtoimage from 'dom-to-image';
import './index.less';
import { useTranslation } from 'react-i18next';
import { CopyImg, Footer } from './component';
import { useQueryCoinUser } from '@/hooks/reuqest';
import { useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

const Invite = () => {
  const { t } = useTranslation();
  const imageRef = useRef();
  const { data: { referrals } = {} } = useQueryCoinUser();
  const link = `${window.location.origin}/register?referrals=${referrals}`;

  const handleClickDownLoad = async () => {
    const dataUrl = await domtoimage.toJpeg(imageRef.current);
    let link = document.createElement('a');
    link.download = 'invite.jpeg';
    link.href = dataUrl;
    link.click();
  };
  const { theme } = useTheme();
  return (
    <DetailPage
      className={'relative'}
      backText={t('返回')}
      bodyStyle={{ marginBottom: 72 }}
    >
      <div className="mx-[16px] mb-[24px] relative">
        <div ref={imageRef} className={`invite-logo h-[343px] ${theme}`}>
          <Space
            className="text-[var(--jp-button-color)] font-[600] absolute bottom-[16px] left-[16px]"
            direction="vertical"
            style={{ '--gap': '4px' }}
          >
            <span>{t('扫描二维码')}</span>
            <span>{t('邀请好友')}</span>
          </Space>
          <QRCodeCanvas
            key={referrals}
            id="qrCode"
            includeMargin
            value={link}
            size={56}
            className="absolute right-[17px] bottom-[7px]"
          />
        </div>
      </div>
      <Form
        key={referrals}
        className="lp-form"
        layout="vertical"
        footer={<Footer onSave={handleClickDownLoad} />}
        initialValues={{
          link,
        }}
      >
        <Form.Item
          className="required-form-item has-extra"
          name="link"
          label={t('邀请链接')}
          // required={false}
          rules={[{ required: true, message: t('请输入邀请链接') }]}
          extra={<CopyImg />}
        >
          <Input
            className="lp-input"
            placeholder={t('请输入邀请链接')}
            clearable
            disabled
          />
        </Form.Item>
      </Form>
    </DetailPage>
  );
};

export default Invite;
