import { useTheme } from '@/hooks/useTheme';
import './index.less'
export const Banner = ({ }) => {
  const { theme } = useTheme()
  return (
    <div className={`mx-[16px] my-[16px] px-[16px] h-[100px] home-banner text-[white] ${theme}`}>
      <p className='pt-[30px] text-[20px] font-[700]'>DEX Bot</p>
      <p className='text-[13px]'>On-chain profit for you</p>
    </div>
  );
};
