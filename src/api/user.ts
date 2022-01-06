import { AxiosPromise } from 'axios';
import { Request } from './request';
import { IRequestParams } from '@/types/global/request';
import { TUser } from '@/types/user/info';

export default {
  userAuthority: (options?: IRequestParams): AxiosPromise<string> =>
    Request.axiosInstance({
      url: '/userAuthority',
      method: 'post',
      desc: '鉴权',
      isJSON: true,
      ...options
    }),

  userInfo: (options?: IRequestParams): AxiosPromise<TUser> =>
    Request.axiosInstance({
      url: '/userInfo',
      method: 'post',
      desc: '获取用户信息',
      isJSON: true,
      ...options
    })
};
