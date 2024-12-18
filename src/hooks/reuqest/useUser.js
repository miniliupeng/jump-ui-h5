import { userApi, withdrawApi } from '@/api';
import { MyLocalStorage } from '@/utils';
import { logOut } from '@/utils/url';
import useSWR from 'swr';

export const useQueryCoinUser = () => {
  const userInfo = MyLocalStorage.localstorage.getItem('userInfo');
  return useSWR(`/api/queryCoinUser?coinAddress=${userInfo.coinName}`, () =>
    userApi
      .queryCoinUser({
        coinAddress: userInfo.coinName,
      })
      .catch((err) => {
        if (err.code === '0') {
          setTimeout(() => {
            logOut();
          }, 3000);
        }
      })
  );
};

export const useQueryCoinUserProject = () => {
  const userInfo = MyLocalStorage.localstorage.getItem('userInfo');
  return useSWR(
    `/api/queryCoinUserProject?coinAddress=${userInfo.coinName}`,
    () =>
      userApi.queryCoinUserProject({
        coinAddress: userInfo.coinName,
      })
  );
};

export const queryCoinUserDetail = (page, rows) => {
  const userInfo = MyLocalStorage.localstorage.getItem('userInfo');
  return userApi
    .queryCoinUserDetail({
      coinAddress: userInfo.coinName,
      page,
      rows,
      flag: '0',
      type: '01,03,04',
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useQueryWithdrawCntLimit = () => {
  return useSWR(`/api/getSysInfo.do?key=withdrawCntLimit`, () =>
    withdrawApi.withdrawCntLimit().then((res) => {
      return Number(res);
    })
  );
};

export const queryCoinUserAssetRecord = (page, rows, type) => {
  const userInfo = MyLocalStorage.localstorage.getItem('userInfo');
  return userApi.queryCoinUserAssetRecord({
    coinAddress: userInfo.coinAddress,
    page,
    rows,
    type,
  });
};
