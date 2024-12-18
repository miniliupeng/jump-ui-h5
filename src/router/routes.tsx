import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { DotLoading } from 'antd-mobile';
import AppLayout from '@/layout';

// 首页
const Home = lazy(() => import('@/pages/home'));
// 登录
const Login = lazy(() => import('@/pages/login'));
// 注册
const Register = lazy(() => import('@/pages/register'));
// 忘记密码
const ForgetPassword = lazy(() => import('@/pages/forget-password'));
// 资讯详情
const noticeDetail = lazy(() => import('@/pages/notice-detail'));
// 投资计划
const InvestmentPlan = lazy(() => import('@/pages/investment-plan'));
// 资金
const Fund = lazy(() => import('@/pages/fund'));
// 用户
const User = lazy(() => import('@/pages/user'));
// 团队
const Team = lazy(() => import('@/pages/team'));
// 提现
const Withdraw = lazy(() => import('@/pages/withdraw'));
// 充值
const Recharge = lazy(() => import('@/pages/recharge'));
// 地址绑定
const Address = lazy(() => import('@/pages/address'));
// 地址绑定成功
const AddressResult = lazy(() => import('@/pages/address-result'));

// 修改密码
const UpdatePassword = lazy(() => import('@/pages/update-password'));
// 修改密码成功
const UpdatePasswordResult = lazy(
  () => import('@/pages/update-password-result')
);

// 邀请
const Invite = lazy(() => import('@/pages/invite'));
// kyc
const Kyc = lazy(() => import('@/pages/kyc'));
// 利润
const Profit = lazy(() => import('@/pages/profit'));
// 主题
const Theme = lazy(() => import('@/pages/theme'));
// 下载
const Download = lazy(() => import('@/pages/download'));

// 资产记录
const AssetRecord = lazy(() => import('@/pages/asset-record'));

// 多账号登录
const MultiAccount = lazy(() => import('@/pages/multi-account'));

const Error = lazy(() => import('@/pages/error'));

// 路由懒加载的封装
const LazyLoad = (module: ReturnType<typeof lazy>) => {
  const Com = module;
  return (
    <Suspense fallback={<DotLoading />}>
      <Com />
    </Suspense>
  );
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: LazyLoad(Home),
      },
      {
        path: 'investment-plan',
        element: LazyLoad(InvestmentPlan),
      },
      {
        path: 'fund',
        element: LazyLoad(Fund),
      },
      {
        path: 'user',
        element: LazyLoad(User),
      },
    ],
  },
  {
    path: '/notice-detail/:id',
    element: LazyLoad(noticeDetail),
  },
  {
    path: '/login',
    element: LazyLoad(Login),
  },
  {
    path: '/register',
    element: LazyLoad(Register),
  },
  {
    path: '/forget-password',
    element: LazyLoad(ForgetPassword),
  },
  {
    path: '/team',
    element: LazyLoad(Team),
  },
  {
    path: '/withdraw',
    element: LazyLoad(Withdraw),
  },
  {
    path: '/recharge',
    element: LazyLoad(Recharge),
  },
  {
    path: '/address',
    element: LazyLoad(Address),
  },
  {
    path: '/address-result',
    element: LazyLoad(AddressResult),
  },
  {
    path: '/update-password',
    element: LazyLoad(UpdatePassword),
  },
  {
    path: '/update-password-result',
    element: LazyLoad(UpdatePasswordResult),
  },

  {
    path: '/invite',
    element: LazyLoad(Invite),
  },
  {
    path: '/kyc',
    element: LazyLoad(Kyc),
  },
  {
    path: '/profit',
    element: LazyLoad(Profit),
  },
  {
    path: '/theme',
    element: LazyLoad(Theme),
  },
  {
    path: '/download',
    element: LazyLoad(Download),
  },
  {
    path: '/asset-record',
    element: LazyLoad(AssetRecord),
  },
  {
    path: '/multi-account',
    element: LazyLoad(MultiAccount),
  },
  {
    path: '/error',
    element: LazyLoad(Error),
  },
  {
    path: '*',
    element: <Navigate to="/error" />,
  },
];
