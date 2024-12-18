import { Form } from 'antd-mobile';
import { ReactComponent as CopyIcon } from '@/assets/svg/copy.svg';
import { onCopy } from '@/utils/copy';
export const CopyImg = () => {
  const link = Form.useWatch('link');
  return (
    <CopyIcon
      className="ml-[16px] absolute right-[8px] top-[36px]"
      onClick={() => onCopy(link)}
    />
  );
};
