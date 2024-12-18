import { DetailPage, Select } from '@/components';
import { Button, Form, Input } from 'antd-mobile';
import { options } from './helper';
import { Uploader } from './components';
import frontSrc from './assets/front.svg';
import backSrc from './assets/back.svg';
import handSrc from './assets/hand.svg';
import { useTranslation } from 'react-i18next';

const Kyc = () => {
  const { t } = useTranslation();

  const onFinish = (val) => {
    console.log(val);
  };

  return (
    <DetailPage
      className={'relative'}
      backText={t('返回')}
      bodyStyle={{ marginBottom: 72, paddingBottom: 0 }}
    >
      <h1 className="field-title mb-[24px]">{t('KYC认证')}</h1>
      <Form
        className="lp-form"
        layout="vertical"
        onFinish={onFinish}
        footer={
          <div className=" absolute left-[16px] bottom-[16px] right-[16px]">
            <Button className="block-btn" block type="submit" color="primary">
              {t('提交审核')}
            </Button>
          </div>
        }
        initialValues={{
          way: ['idcard']
        }}
      >
        <Form.Item
          className="required-form-item"
          name="name"
          label={t('姓名')}
          rules={[{ required: true, message: t('请输入您的姓名')}]}
        >
          <Input className="lp-input" placeholder={t('请输入您的姓名')} clearable />
        </Form.Item>
        <Form.Item
          className="required-form-item"
          name="id"
          label={t('身份证号')}
          rules={[{ required: true, message: t('请输入您的身份证号')}]}
        >
          <Input
            className="lp-input"
            placeholder={t('请输入您的身份证号')}
            clearable
          />
        </Form.Item>
        <Form.Item
          className="required-form-item"
          name="way"
          label={t('认证方式')}
          rules={[{ required: true, message: t('请选择认证方式')}]}
        >
          <Select label={t('认证方式')} options={options} />
        </Form.Item>
        <Uploader
          label={t('上传身份证正面')}
          name="front"
          uploadSrc={frontSrc}
          description={t('请确保照片有水印，没有污渍，有清晰的身份和地址，以及完整的头像。')}
        />
        <Uploader
          label={t('上传身份证反面')}
          name="back"
          uploadSrc={backSrc}
          description={t('请确保照片水印，无污渍，内容完整并清晰可见。')}
        />
        <Uploader
          label={t('上传手持身份证')}
          name="hand"
          uploadSrc={handSrc}
          description={t('请上传用手拿身份证正面照片，确保照片清晰')}
        />
      </Form>
    </DetailPage>
  );
};

export default Kyc;
