import { investmentApi } from '@/api';
import useSWR from 'swr';

export const useQueryCoinProject = () => {
  return useSWR('/api/queryCoinProject', () =>
    investmentApi.queryCoinProject({
      status: '1',
    })
  );
};
