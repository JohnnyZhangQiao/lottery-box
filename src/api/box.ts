import { AxiosPromise } from 'axios';
import { Request } from './request';
import { IRequestParams } from '../types/global/request';
import { TBox } from '../types/index/box';

export default {
  fetchList: (options?: IRequestParams): AxiosPromise<TBox> =>
    Request.axiosInstance({
      url: '/fetchList',
      method: 'post',
      desc: '获取盲盒列表',
      isJSON: true,
      ...options
    })
};
