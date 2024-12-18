import { Modal as AntModal } from 'antd-mobile';
import './index.less'
export const Modal = ({
  visible,
  onCancel,
  title,
  children,
}) => {
  return (
    <AntModal
      className={`jp-modal ${!false ? 'no-title' : ''}`}
      visible={visible}
      title={title}
      content={children}
      showCloseButton
      onClose={onCancel}
    />
  );
};
