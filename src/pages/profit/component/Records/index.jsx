import { Divider } from 'antd-mobile';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Record } from '../Record';
import './index.less';
import { useMore } from '@/hooks/useMore';
import { queryCoinUserDetail } from '@/hooks/reuqest';
import { EmptyPanel, ScrollList } from '@/components';

export const Records = () => {
  const { loadMore, hasMore, data, pageIndex } = useMore((page, rows) =>
    queryCoinUserDetail(page, rows)
  );
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="field-title mb-[16px] px-[16px] pt-[16px]">{t('记录')}</h1>
      <Divider
        style={{
          borderColor: 'var(--jp-border-color)',
        }}
      />
      <div className="record-list__container list-container ">
        {data.map((item) => (
          <Record key={item.detailId} {...item} />
        ))}
        {!hasMore && data.length === 0 ? (
          <EmptyPanel />
        ) : (
          <ScrollList hasMore={hasMore} loadMore={loadMore} showBottomLine={pageIndex > 1} />
        )}
      </div>
    </div>
  );
};
