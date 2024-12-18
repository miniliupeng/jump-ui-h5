import { request } from '@/utils';

// 获取用户充值地址
export const queryCoinUserAddress = (data) =>
  request({
    url: '/api/queryCoinUserAddress.do',
    data,
  });
