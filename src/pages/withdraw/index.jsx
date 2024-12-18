import { DetailPage, Select } from '@/components';
import { Button, Form, Input, Space } from 'antd-mobile';
import { options, options2 } from './helper';
import { CashInput, PwdModal, WarnningModal } from './components';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQueryCoinUser, useQueryWithdrawCntLimit } from '@/hooks/reuqest';
import { ToAssetRecord } from '@/common';

const Withdraw = () => {
  const [visible, setVisible] = useState(false);
  const [warnModalVisible, setWarnModalVisible] = useState(false);
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { data: { incomeAddress } = {} } = useQueryCoinUser();
  const { data: withdrawLimit } = useQueryWithdrawCntLimit();

  useEffect(() => {
    if ([null, ''].includes(incomeAddress)) {
      setWarnModalVisible(true);
    }
  }, [incomeAddress])
  form.setFieldsValue({ incomeAddress });
  const [coinCnt, setCoinCnt] = useState();
  const onFinish = ({ coinCnt }) => {
    setVisible(true);
    setCoinCnt(coinCnt);
  };
  const cash = Form.useWatch('coinCnt', form);
  const arrivalAmount = useMemo(() => {
    if (!cash) return '0.00';
    if (parseInt(cash) < withdrawLimit) return '0.00';
    return (parseInt(cash) * 0.95).toFixed(2);
  }, [cash]);
  return (
    <DetailPage
      className={'relative'}
      backText={t('返回')}
      bodyStyle={{ marginBottom: 72 }}
      extra={<ToAssetRecord index={2} />}
    >
      <h1 className="field-title mb-[16px]">{t('提现')}</h1>
      <Form
        form={form}
        className="lp-form"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          type: ['usdt'],
          net: ['bsc'],
        }}
        footer={
          <div className="flex justify-between absolute left-[16px] right-[16px] bottom-[16px]">
            <Space
              direction="vertical"
              className="flex-1"
              style={{ '--gap': '2px' }}
            >
              <span className="text-[var(--jp-second-color)] text-[12px]">
                {t('到账金额')}
              </span>
              <span className="text-[var(--jp-primary-color)] text-[16px] font-[600]">
                {arrivalAmount} USDT
              </span>
            </Space>
            <Button
              className="block-btn w-[175px!important]"
              block
              type="submit"
              color="primary"
            >
              {t('提现')}
            </Button>
          </div>
        }
      >
        <Form.Item name="type" label={t('提现币种')}>
          <Select label={t('提现币种')} options={options} />
        </Form.Item>
        <Form.Item name="net" label={t('提现网络')}>
          <Select label={t('提现网络')} options={options2} />
        </Form.Item>
        <Form.Item name="incomeAddress" label={t('提现地址')}>
          <Input className="lp-input" disabled />
        </Form.Item>
        <CashInput form={form} />
        <div className="mt-[16px] text-[12px]">
          <h3 className='font-[500]'>{t('提示')}</h3>
          <div className="h-[80px] mt-[8px] p-[16px] jp-gradient-bg border border-[var(--jp-border-forth-color)]">
            <div className="flex justify-between">
              <span>{t('提现手续费')}</span>
              <span>5%</span>
            </div>
            <div className="flex justify-between mt-[10px]">
              <span>{t('提现时间')}</span>
              <span>24 {t('小时一次')}</span>
            </div>
          </div>
        </div>
      </Form>
      <PwdModal
        visible={visible}
        setVisible={setVisible}
        coinCnt={coinCnt}
        callback={() => form.resetFields()}
      />
      <WarnningModal
        visible={warnModalVisible}
        setVisible={setWarnModalVisible}
      />
    </DetailPage>
  );
};

export default Withdraw;
