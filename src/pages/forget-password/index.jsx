import { useNavigate } from 'react-router-dom';
import md5 from 'md5';
import { Button, Form, Input, Toast } from 'antd-mobile';
import { CodeInput, PasswordInput } from '@/components';
import { PageLayout } from '@/common';
import { retrievePassword } from '@/api/user';
import { useTranslation } from 'react-i18next';

const ForgetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onFinish = async ({ payPassword, rePayPassword, ...val }) => {
    await retrievePassword({
      payPassword: md5(payPassword),
      rePayPassword: md5(rePayPassword),
      ...val,
    });
    Toast.show({
      icon: 'success',
      content: '密码修改成功',
      afterClose: () => {
        navigate('/login');
      },
    });
  };
  return (
    <PageLayout bodyStyle={{ padding: 0 }}>
      <div className="p-[16px]">
        <h1 className="jp-title">忘记密码</h1>
        <Form
          className="lp-form"
          layout="vertical"
          onFinish={onFinish}
          footer={
            <Button className="block-btn" block type="submit" color="primary">
              修改密码
            </Button>
          }
        >
          <Form.Item
            className="required-form-item"
            name="coinName"
            label="邮箱"
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
              placeholder="请输入您的邮箱"
              clearable
            />
          </Form.Item>
          <CodeInput />
          <PasswordInput
            className="required-form-item"
            label="修改密码"
            name="payPassword"
            placeholder="请设置6-20位字母+数字登录密码"
          />
          <PasswordInput
            className="required-form-item"
            label="确认密码"
            name="rePayPassword"
            placeholder="请再次确认密码"
          />
        </Form>

        <Button
          color="primary"
          className="p-[0px!important] mt-[8px!important] mb-[16px!important]"
          fill="none"
          block
          onClick={() => navigate('/login')}
        >
          <span className="text-[var(--jp-label-color)]">重置成功? </span>
          去登录
        </Button>
      </div>
    </PageLayout>
  );
};

export default ForgetPassword;
