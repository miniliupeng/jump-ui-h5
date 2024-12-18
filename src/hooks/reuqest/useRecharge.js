import { rechargeApi } from '@/api';
import { MyLocalStorage } from '@/utils';
import useSWR from 'swr';

export const useQueryCoinUserAddress = () => {
  const userInfo = MyLocalStorage.localstorage.getItem('userInfo');
  return useSWR(
    `/api/queryCoinUserAddress?coinName=${userInfo.coinName}`,
    () =>  rechargeApi.queryCoinUserAddress({
      coinName: userInfo.coinName,
      })
  );
};
