import { onCopy } from '@/utils/copy';
import { Button, Form } from 'antd-mobile';
import { useTranslation } from 'react-i18next';

export const Footer = ({ onSave }) => {
  const { t } = useTranslation();
  const link = Form.useWatch('link');
  return (
    <div className="flex gap-[16px] absolute left-[16px] right-[16px] bottom-[16px]">
      <Button
        className="block-btn"
        block
        type="submit"
        color="primary"
        onClick={() => onCopy(link)}
      >
        {t('复制邀请链接')}
      </Button>
      <Button className="block-btn" block type="submit" onClick={onSave}>
        {t('保存图片')}
      </Button>
    </div>
  );
};
