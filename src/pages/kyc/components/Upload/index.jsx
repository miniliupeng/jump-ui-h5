import { Image, ImageUploader } from 'antd-mobile';
import { useState } from 'react';

export const Upload = ({ onChange, uploadSrc, description }) => {
  const [fileList, setFileList] = useState([]);
  return (
    <div className="flex justify-between gap-[16px]">
      <p className="text-[var(--jp-second-color)]">{description}</p>
      <ImageUploader
        value={fileList}
        onChange={setFileList}
        upload={(file) => {
          onChange(file);
          return {
            url: URL.createObjectURL(file),
          };
        }}
      >
        <Image src={uploadSrc} width={160} height={104} />
      </ImageUploader>
    </div>
  );
};
