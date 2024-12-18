import { request } from '@/utils';

// 用户注册
export const register = (data) =>
  request({
    url: '/api/register.do',
    data,
  });

// 获取验证码
export const getMailCode = (data) =>
  request({
    url: '/api/sendMail.do',
    data,
  });

// 用户登录
export const login = (data) =>
  request({
    url: '/api/loginCoinUser.do',
    data,
  });

// 找回密码
export const retrievePassword = (data) =>
  request({
    url: '/api/forgotPwd.do',
    data,
  });

// 修改密码
export const updatePwd = (data) =>
  request({
    url: '/api/updatePwd.do',
    data,
  });

// 用户查询
export const queryCoinUser = (data) =>
  request({
    url: '/api/queryCoinUser.do',
    data,
  });

// 用户项目查询
export const queryCoinUserProject = (data) =>
  request({
    url: '/api/queryCoinUserProject.do',
    data,
  });

// 用户绑定地址
export const bindCoinUserAddress = (data) =>
  request({
    url: '/api/bindCoinUserAddress.do',
    data,
  });

  // 用户详情查询
export const queryCoinUserDetail = (data) =>
request({
  url: '/api/queryCoinUserDetail.do',
  data,
});

  // 用户资产记录
  export const queryCoinUserAssetRecord = (data) =>
  request({
    url: '/api/queryCoinUserRecord.do',
    data,
  });