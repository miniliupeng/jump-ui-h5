import { Button, Form, Input, Toast } from 'antd-mobile';
import './index.less';
import { getMailCode as getMailCodeApi } from '@/api/user';
import { useEffect, useState } from 'react';
import { emailReg } from '@/utils/reg';
import { useTranslation } from 'react-i18next';
export const CodeInput = ({ defaultCoinName, callback }) => {
  const { t } = useTranslation();
  const formCoinName = Form.useWatch('coinName');
  const coinName = defaultCoinName || formCoinName;
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  useEffect(() => {
    let timerId;
    if (countdown > 0) {
      timerId = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [countdown]);
  const getMailCode = async () => {
    try {
      setLoading(true);
      if (emailReg.test(coinName) === false) {
        Toast.show(t('请输入正确的邮箱地址'));
        return;
      }
      await getMailCodeApi({ coinName });
      Toast.show(t('验证码已发送至您的邮箱，请注意查收！'));
      setCountdown(180);
      callback?.();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form.Item
      className={`required-form-item code-container ${countdown ? 'countdown' : ''}`}
      name="code"
      label={t('验证码')}
      rules={[{ required: true, message: t('请输入验证码') }]}
      required
      extra={
        <Button
          loading={loading}
          color="primary"
          // className="w-[64px!important]"
          onClick={getMailCode}
          disabled={countdown > 0}
        >
          {countdown ? <>{t('秒', {countdown})}</> : t('发送')}
        </Button>
      }
    >
      <Input
        className="lp-input"
        placeholder={t('请输入验证码')}
        clearable
        type="number"
      />
    </Form.Item>
  );
};
