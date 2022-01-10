import { Request } from './request';
import { IRequestParams } from '@/types/global/request';
import { TBox } from '@/types/index/box';

export default {
  fetchList: (options?: IRequestParams): Promise<TBox> =>
    Request.axiosInstance({
      url: '/fetchList',
      method: 'post',
      desc: '获取盲盒列表',
      isJSON: true,
      ...options
    }),

  boxDetail: (options?: IRequestParams): Promise<any> =>
    Request.axiosInstance({
      url: '/boxDetail',
      method: 'post',
      desc: '获取盲盒详情',
      isJSON: true,
      ...options
    })
};
