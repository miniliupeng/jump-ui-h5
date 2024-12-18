import { Outlet, useNavigate } from 'react-router-dom';
import { NavBar } from './components';
import { useEffect } from 'react';
import { MyLocalStorage } from '@/utils';
import { SafeArea } from 'antd-mobile';

const Layout = () => {
  const navigate = useNavigate();
  const check = () => {
    const userInfo = MyLocalStorage.localstorage.getItem('userInfo');
    if (!userInfo) {
      navigate('/register');
    }
  };
  useEffect(() => {
    check();
  }, []);
  return (
    <div className="flex flex-col h-full">
      <SafeArea position="top" />
      <div className=" flex-1 overflow-auto">
        <Outlet />
      </div>
      <NavBar />
    </div>
  );
};

export default Layout;
