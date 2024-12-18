import { useState } from 'react';
import { Form, Input } from 'antd-mobile';
import { useTranslation } from 'react-i18next'; // 引入 useTranslation 钩子函数
import { ReactComponent as CloseEyesIcon } from '@/assets/svg/close-eyes.svg';
import { ReactComponent as OpenEyesIcon } from '@/assets/svg/open-eyes.svg';

export const PasswordInput = ({
  className = '',
  label,
  name = 'password',
  placeholder,
  required,
}) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation(); // 使用 useTranslation 钩子函数获取 t 函数
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        {
          required: true,
          pattern: /^[a-zA-Z0-9]{6,20}$/,
          message: t('请设置6-20位字母+数字登录密码'),
        },
      ]}
      className={`${className} has-extra`}
      required={required}
      extra={
        <div className={'eye'}>
          {!visible ? (
            <CloseEyesIcon onClick={() => setVisible(true)} />
          ) : (
            <OpenEyesIcon onClick={() => setVisible(false)} />
          )}
        </div>
      }
    >
      <Input
        className="lp-input"
        type={visible ? 'text' : 'password'}
        placeholder={placeholder}
        clearable
      />
    </Form.Item>
  );
};
