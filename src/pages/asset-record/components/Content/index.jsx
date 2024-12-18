import { queryCoinUserAssetRecord } from '@/hooks/reuqest';
import { useMore } from '@/hooks/useMore';
import { EmptyPanel, ScrollList } from '@/components';
import './index.less';
import Record from '../Record';

export const Content = ({ type = '08,12' }) => {
  const { loadMore, hasMore, data } = useMore(async (page, rows) =>
    queryCoinUserAssetRecord(page, rows, type)
  );
  return (
    <div className="asset-list__container list-container">
      {data?.map((item) => (
        <Record key={item.detailId} {...item} />
      ))}
      {!hasMore && data.length === 0 ? (
        <EmptyPanel height={'calc(100vh - 200px)'} />
      ) : (
        <ScrollList hasMore={hasMore} loadMore={loadMore} />
      )}
    </div>
  );
};
