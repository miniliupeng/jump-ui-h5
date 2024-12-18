import { DetailPage, Result } from '@/components';
import { useQueryCoinUser } from '@/hooks/reuqest';
import { Button, Space } from 'antd-mobile';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const AddressResult = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: { incomeAddress } = {} } = useQueryCoinUser();
  return (
    <DetailPage bodyStyle={{ paddingTop: 100 }} backText={t('返回')}>
      <Result
        type="success"
        title={t('地址绑定成功')}
        description={incomeAddress}
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
                navigate('/home');
              }}
            >
              {t('返回首页')}
            </Button>
            <span
              className="text-[var(--adm-color-primary)]"
              onClick={() => {
                navigate('/address');
              }}
            >
              {t('重新绑定')}
            </span>
          </Space>
        }
      />
    </DetailPage>
  );
};

export default AddressResult;
