import './index.less';
import { useQueryMsgLog } from '@/hooks/reuqest';
import { Notice } from '../Notice';

export const Notices = () => {
  const { data = [] } = useQueryMsgLog();
  return (
    <div className="notices__container">
      {data.map((item) => (
        <Notice key={item.id} {...item} />
      ))}
    </div>
  );
};
