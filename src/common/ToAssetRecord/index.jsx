import assetRecordSrc from '@/assets/svg/asset-record.svg';
import assetRecord2Src from '@/assets/svg/asset-record_2.svg';

import { useTheme } from '@/hooks/useTheme';
import { Image } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
export const ToAssetRecord = ({ index = 1 }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <Image
      src={theme === 'dark' ? assetRecordSrc : assetRecord2Src}
      width={24}
      style={{ display: 'inline-block' }}
      onClick={() => navigate(`/asset-record?activeIndex=${index}`)}
    />
  );
};
