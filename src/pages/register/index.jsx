import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Toast } from 'antd-mobile';
import md5 from 'md5';
import { CodeInput, PasswordInput } from '@/components';
import { PageLayout } from '@/common';
import { register } from '@/api/user';
import { useTranslation } from 'react-i18next';
import { MyLocalStorage } from '@/utils';
import { useEffect } from 'react';

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {
    const prevParentInfo =
      MyLocalStorage.localstorage.getItem('parentInfo') || {};
    console.log(prevParentInfo);
    form.setFieldsValue({
      referrals: prevParentInfo.referrals
        ? prevParentInfo.referrals
        : undefined,
    });
  }, []);
  const onFinish = async ({
    checked,
    payPassword,
    rePayPassword,
    referrals,
    ...val
  }) => {
    await register({
      payPassword: md5(payPassword),
      rePayPassword: md5(rePayPassword),
      referrals: referrals ? referrals : undefined,
      ...val,
    });
    MyLocalStorage.localstorage.removeItem('parentInfo');
    Toast.show({
      icon: 'success',
      content: t('注册成功'),
      afterClose: () => {
        navigate('/login');
      },
    });
  };

  return (
    <PageLayout bodyStyle={{ padding: 0 }}>
      <div className="p-[16px]">
        <h1 className="jp-title">{t('创建个人账户')}</h1>
        <Form
          form={form}
          className="lp-form"
          layout="vertical"
          onFinish={onFinish}
          footer={
            <Button className="block-btn" block type="submit" color="primary">
              {t('注册')}
            </Button>
          }
        >
          <Form.Item
            className="required-form-item"
            name="coinName"
            label={t('邮箱')}
            rules={[
              {
                required: true,
                type: 'email',
                message: t('请输入正确的邮箱地址'),
              },
            ]}
            required
          >
            <Input
              className="lp-input"
              placeholder={t('请输入您的邮箱')}
              clearable
            />
          </Form.Item>
          <CodeInput />
          <PasswordInput
            className="required-form-item"
            label={t('登录密码')}
            name="payPassword"
            placeholder={t('请设置6-20位字母+数字登录密码')}
          />
          <PasswordInput
            className="required-form-item"
            label={t('确认密码')}
            name="rePayPassword"
            placeholder={t('请再次确认密码')}
          />
          <Form.Item
            className="required-form-item"
            name="referrals"
            label={t('邀请码')}
            rules={[
              {
                required: true,
                message: t('请输入邀请码'),
              },
            ]}
            required
          >
            <Input
              className="lp-input"
              placeholder={t('请输入邀请码')}
              clearable
            />
          </Form.Item>
          <Form.Item
            className="jp-checkbox-item"
            name="checked"
            rules={[{ required: true, message: t('请勾选') }]}
          >
            <Checkbox className="jp-checkbox mr-[8px]">
              <span className="text-[12px] leading-[21px] text-[var(--jp-fifth-color)]">
                {t('创建账户即表示我同意JP的')}
                <span className="text-[var(--adm-color-primary)]">
                  《{t('服务条款')}》
                </span>
                {t('和')}
                <span className="text-[var(--adm-color-primary)]">
                  《{t('隐私政策')}》
                </span>
              </span>
            </Checkbox>
          </Form.Item>
        </Form>

        <Button
          color="primary"
          className="p-[0px!important] mt-[8px!important] mb-[16px!important]"
          fill="none"
          block
          onClick={() => navigate('/login')}
        >
          <span className="text-[var(--jp-label-color)]">
            {t('我已有账户？')}
          </span>
          {t('去登录')}
        </Button>
      </div>
    </PageLayout>
  );
};

export default Register;
