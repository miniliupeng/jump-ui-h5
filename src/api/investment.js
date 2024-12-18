import { request } from '@/utils';

// 项目列表
export const queryCoinProject = (data) =>
  request({
    url: '/api/queryCoinProject.do',
    data,
  });

// 购买项目
export const addCoinUserProject = (data) =>
  request({
    url: '/api/addCoinUserProject.do',
    data,
  });

