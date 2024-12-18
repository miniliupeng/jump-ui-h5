import { Form, Input } from 'antd-mobile';
import './index.less';
import { useTranslation } from 'react-i18next';
import { useQueryCoinUser, useQueryWithdrawCntLimit } from '@/hooks/reuqest';

export const CashInput = ({ form }) => {
  const { t } = useTranslation();
  const { data: { coinCnt } = {} } = useQueryCoinUser();
  const { data: withdrawLimit } = useQueryWithdrawCntLimit();
  const handleMax = () => {
    form.setFieldsValue({
      coinCnt: coinCnt,
    })
  }
  return (
    <>
      <Form.Item
        name="coinCnt"
        label={t('提现金额')}
        className="cash-input has-extra"
        extra={
          <div className="cash-input__extra">
            <span className="text-[var(--jp-second-color)]">USDT</span>
            <span className="text-[var(--adm-color-primary)] ml-[12px]" onClick={handleMax}>
              {t('最大')}
            </span>
          </div>
        }
        rules={[
          {
            required: true,
            message: t('请输入提现金额'),
          },
          {
            validator: async (_, value) => {
              if (value < withdrawLimit) return Promise.reject(new Error(t('最少金额', { limit: withdrawLimit })))
              return Promise.resolve()
            }
          },
        ]}
      >
        <Input type='number' className="lp-input" placeholder={t('最少金额', { limit: withdrawLimit })} clearable />
      </Form.Item>
      <p className="text-[12px]">
        <span className="text-[var(--jp-second-color)] ">{t('可用')}：</span>{' '}
        <span className='font-[500]'>{coinCnt} USDT</span>
      </p>
    </>
  );
};
