import { Form } from 'antd-mobile';
import { Upload } from '../Upload';

export const Uploader = ({ label, name, uploadSrc, description }) => {
  return (
    <Form.Item
      className="required-form-item"
      name={name}
      label={label}
      rules={[{ required: true }]}
    >
      <Upload uploadSrc={uploadSrc} description={description} />
    </Form.Item>
  );
};
