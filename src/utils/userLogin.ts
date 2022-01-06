import request from '@/api/index';
import appStore from "@/store";

/**
 * 是否登录
 */
export const isLogin = (): boolean => {

  if (appStore.useUser.token) return true;

  const token = localStorage.getItem('ACCESS_TOKEN');
  appStore.useUser.setItem('token', token || '');
  return !!token;
};

/**
 * 登录
 * @param username
 * @param password
 */
export const login = (username: string, password: string) => {
  return request.user
    .userAuthority({
      data: {
        username,
        password
      }
    })
    .then(data => {
      const { token } = data;
      if (token) {
        localStorage.setItem('ACCESS_TOKEN', token);

        appStore.useUser.setItem('token', token); // 设置pinia状态
        return true;
      }
    });
};
