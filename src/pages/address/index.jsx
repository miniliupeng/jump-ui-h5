import { bindCoinUserAddress } from '@/api/user';
import { DetailPage } from '@/components';
import { useQueryCoinUser } from '@/hooks/reuqest';
import { Button, Form, Input, Toast } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Address = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { data: { coinName, incomeAddress } = {}, mutate } = useQueryCoinUser();
  form.setFieldsValue({
    coinAddress: incomeAddress,
  });
  const onFinish = async ({ coinAddress }) => {
    try {
      await bindCoinUserAddress({
        coinName,
        coinAddress,
      });
      mutate();
      navigate('/address-result')
    } catch (error) {}
  };

  return (
    <DetailPage backText={t('返回')}>
      <h1 className="field-title mb-[24px]">{t('地址绑定')}</h1>
      <Form
        form={form}
        className="lp-form"
        layout="vertical"
        onFinish={onFinish}
        footer={
          <Button className="block-btn" block type="submit" color="primary">
            {t('保存')}
          </Button>
        }
      >
        <Form.Item
          className="required-form-item"
          name="coinAddress"
          label={t('钱包地址')}
          rules={[{ required: true, message: t('请输入BSC链钱包地址')}]}
        >
          <Input
            className="lp-input"
            placeholder={t('请输入BSC链钱包地址')}
            clearable
          />
        </Form.Item>
      </Form>
    </DetailPage>
  );
};

export default Address;
