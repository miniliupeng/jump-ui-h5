import { MyLocalStorage } from '@/utils';
import { useState } from 'react';

const DEFAULT_THEME = 'light';

export const useTheme = () => {
  const defaultTheme = MyLocalStorage.localstorage.getItem('theme') || DEFAULT_THEME;
  const [theme, setTheme] = useState(defaultTheme);

  // 切换主题的函数
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    MyLocalStorage.localstorage.setItem('theme', newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  return { theme, toggleTheme };
};

export const initTheme = () => {
  const defaultTheme = MyLocalStorage.localstorage.getItem('theme') || DEFAULT_THEME;
  MyLocalStorage.localstorage.setItem('theme', defaultTheme);
  document.body.classList.remove('dark');
  document.body.classList.remove('light');
  document.body.classList.add(defaultTheme);
};
