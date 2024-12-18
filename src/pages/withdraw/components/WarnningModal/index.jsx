import { Modal, Result } from '@/components';
import { Button } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const WarnningModal = ({ visible, setVisible }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Modal visible={visible} onCancel={() => setVisible(false)}>
      <Result
        type="warn"
        title={t('未绑定提现地址')}
        description={t('您暂未绑定提现地址，无法进行提现')}
        footer={
          <Button
            className="block-btn"
            block
            type="submit"
            color="primary"
            onClick={() => {
              setVisible(false);
              navigate('/address');
            }}
          >
            {t('去绑定')}
          </Button>
        }
      />
    </Modal>
  );
};
