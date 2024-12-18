import { request } from '@/utils';

// 新闻列表
export const queryMsgLog = (data) =>
  request({
    url: '/api/queryMsgLog.do',
    data,
  });

// 新闻详情
export const querymsgLogInfo = (data) =>
  request({
    url: '/api/msgLogInfo.do',
    data,
  });