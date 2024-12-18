import { Modal, PasswordInput } from '@/components';
import { Button, Form } from 'antd-mobile';
import md5 from "md5";
import './index.less';
import { useTranslation } from 'react-i18next';
import { withdrawApi } from '@/api';
import { useQueryCoinUser } from '@/hooks/reuqest';

export const PwdModal = ({ visible, setVisible, coinCnt, callback }) => {
  const { t } = useTranslation();
  const { data: { coinAddress } = {}, mutate } = useQueryCoinUser();
  const [form] = Form.useForm();
  const onFinish = async ({ payPass }) => {
    try {
      await withdrawApi.coinUserWithdraw({
        coinAddress,
        coinCnt,
        payPass: md5(payPass),
      });
      form.resetFields();
      mutate();
      setVisible(false);
      callback();
    } catch (error) {
      
    }

  };
  const onCancel = () => {
    setVisible(false)
    form.resetFields();
  }
  return (
    <Modal visible={visible} onCancel={onCancel} title={t('请输入密码')}>
      <Form
        form={form}
        className="pwd-form lp-form"
        layout="vertical"
        onFinish={onFinish}
        footer={
          <Button
            className="block-btn w-[104px!important]"
            block
            type="submit"
            color="primary"
          >
            {t('确认')}
          </Button>
        }
      >
        <PasswordInput label={t('密码')} placeholder={t('请输入登录密码')} name="payPass" />
      </Form>
    </Modal>
  );
};
