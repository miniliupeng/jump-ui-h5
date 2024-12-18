import { DetailPage, Result } from '@/components';
import { MyLocalStorage } from '@/utils';
import { Button, Space } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const UpdatePasswordResult = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <DetailPage bodyStyle={{ paddingTop: 100 }} backText={t('返回')}>
      <Result
        type="success"
        title={t('密码修改成功')}
        description={t('您的密码已修改成功，请重新登录')}
        footer={
          <Space
            direction="vertical"
            align="center"
            block
            style={{ '--gap': '16px' }}
          >
            <Button
              className="block-btn w-[140px]"
              type="submit"
              color="primary"
              onClick={() => {
                navigate('/login');
                MyLocalStorage.localstorage.removeItem('userInfo');
              }}
            >
              {t('重新登录')}
            </Button>
          </Space>
        }
      />
    </DetailPage>
  );
};

export default UpdatePasswordResult;
