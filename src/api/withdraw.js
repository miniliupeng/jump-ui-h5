import { request } from '@/utils';

// 提现
export const coinUserWithdraw = (data) =>
  request({
    url: '/api/coinUserWithdraw.do',
    data,
  });

// 限额
export const withdrawCntLimit = () =>
  request({
    url: '/api/getSysInfo.do?key=withdrawCntLimit',
  });
