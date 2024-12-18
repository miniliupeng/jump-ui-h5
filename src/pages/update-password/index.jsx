import { updatePwd } from '@/api/user';
import { CodeInput, DetailPage, PasswordInput } from '@/components';
import { useQueryCoinUser } from '@/hooks/reuqest';
import { formatEmail } from '@/utils';
import { Button, Form } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import md5 from 'md5';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UpdatePassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: userInfo = {} } = useQueryCoinUser();
  const [visible, setVisible] = useState(false);
  const onFinish = async ({ payPassword, code }) => {
    try {
      await updatePwd({
        coinName: userInfo.coinName,
        payPassword: md5(payPassword),
        code,
      });
      // Toast.show({
      //   icon: 'success',
      //   content: t('修改密码成功'),
      //   // afterClose: () => {
      //   //   navigate('/login');
      //   // },
      // });
      navigate('/update-password-result');
    } catch (error) {}
  };

  return (
    <DetailPage backText={t('返回')}>
      <h1 className="field-title mb-[24px]">{t('修改密码')}</h1>
      <Form
        className="lp-form"
        layout="vertical"
        onFinish={onFinish}
        footer={
          <Button
            className="block-btn mt-[16px!important]"
            block
            type="submit"
            color="primary"
          >
            {t('修改')}
          </Button>
        }
      >
        <PasswordInput
          className="required-form-item"
          label={t('新密码')}
          placeholder={t('请输入您的新密码')}
          name="payPassword"
        />
        <CodeInput
          defaultCoinName={userInfo.coinName}
          callback={() => setVisible(true)}
        />
        {visible && (
          <p className="text-[12px]">
            <span className="text-[var(--jp-second-color)]">
              {t('验证码已发送至')}：
            </span>
            <span className="text-[var(--adm-color-primary)]">
              {/* {userInfo.coinName && formatEmail(userInfo.coinName)} */}
              {userInfo.coinName}

            </span>
          </p>
        )}
      </Form>
    </DetailPage>
  );
};

export default UpdatePassword;
