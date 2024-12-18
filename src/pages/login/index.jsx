import { useNavigate } from 'react-router-dom';
import md5 from 'md5';
import { Button, Form, Input, Toast } from 'antd-mobile';
import { PasswordInput } from '@/components';
import { PageLayout } from '@/common';
import { ReactComponent as ArrowRightIcon } from '@/assets/svg/arrow-right.svg';
import { login } from '@/api/user';
import { MyLocalStorage } from '@/utils';
import { useTranslation } from 'react-i18next';
import { useLocalStorageState } from 'ahooks';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useLocalStorageState("userInfo");
  const [otherUsersInfo, setOtherUsersInfo] = useLocalStorageState(
    "otherUserInfo",
    { defaultValue: [] }
  );
  const onFinish = async ({ payPasswd, ...val }) => {
    try {
      const userInfo = await login({ payPasswd: md5(payPasswd), ...val });
      Toast.show({
        icon: 'success',
        content: t('登录成功'), // 使用 t 函数进行国际化处理
        afterClose: () => {
          setOtherUsersInfo([...otherUsersInfo.filter((user) => user.coinAddress !== val.coinName)])
          setUserInfo(userInfo)
          navigate('/home');
        },
      });
    } catch (error) {}
  };

  return (
    <PageLayout>
      <h1 className="jp-title">{t('登录')}</h1> 
      <Form
        className="lp-form"
        layout="vertical"
        onFinish={onFinish}
        footer={
          <Button
            className="block-btn"
            block
            type="submit"
            color="primary" /* size="large" */
          >
            {t('登录')} 
            <ArrowRightIcon className="mt-[-4px]" />
          </Button>
        }
      >
        <Form.Item
          name="coinName"
          label={t('邮箱')} 
          required={false}
          rules={[{ required: true , type: 'email', message: t('请输入正确的邮箱地址') }]}
        >
          <Input className="lp-input" placeholder={t('请输入登录邮箱')} clearable /> 
        </Form.Item>
        <PasswordInput required={false} label={t('密码')} placeholder={t('请输入登录密码')} name="payPasswd" />
        <Button
          color="primary"
          className="p-[0px!important] float-right mb-[16px!important]"
          fill="none"
          onClick={() => navigate('/forget-password')}
        >
          {t('忘记密码')} 
        </Button>
      </Form>

      <Button
        color="primary"
        className="p-[0px!important] mt-[8px!important] mb-[16px!important]"
        fill="none"
        block
        onClick={() => navigate('/register')}
      >
        <span className="text-[var(--jp-label-color)]">{t('没有账户？')}</span> 
        {t('创建JP账户')} 
      </Button>
    </PageLayout>
  );
};

export default Login;
