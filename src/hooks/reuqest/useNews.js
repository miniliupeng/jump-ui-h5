import { newsApi } from '@/api';
import useSWR from 'swr';

export const useQueryMsgLog = () => {
  return useSWR('/api/queryMsgLog', () =>
    newsApi.queryMsgLog({
      status: 'ZT01',
    })
  );
};

export const useQueryMsgLogInfo = (detailId) => {
  return useSWR(`/api/querymsgLogInfo?detailId=${detailId}`, () =>
    newsApi.querymsgLogInfo({
      detailId,
    })
  );
};
