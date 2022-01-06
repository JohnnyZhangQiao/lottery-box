import axios, { AxiosError, AxiosInstance } from 'axios';
import {
  IRequestParams,
  IRequestResponse,
  TBackData
} from '../types/global/request';
import { Toast } from '@nutui/nutui';

export class Request {
  public static axiosInstance: AxiosInstance;

  public static init() {
    // 创建axios实例
    this.axiosInstance = axios.create({
      baseURL: '/api',
      timeout: 10000
    });
    // 初始化拦截器
    this.initInterceptors();
  }

  // 初始化拦截器
  public static initInterceptors() {
    // 设置post请求头
    this.axiosInstance.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
    /**
     * 请求拦截器
     * 每次请求前，如果存在token则在请求头中携带token
     */
    this.axiosInstance.interceptors.request.use(
      (config: IRequestParams) => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      },
      (error: any) => {
        Toast.fail(error);
      }
    );

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      // 请求成功
      (response: IRequestResponse): TBackData => {
        const {
          data: { code, message, data }
        } = response;
        if (response.status !== 200 || code !== 0) {
          Request.errorHandle(response, message);
        }
        return data;
      },
      // 请求失败
      (error: AxiosError): Promise<any> => {
        const { response } = error;
        if (response) {
          // 请求已发出，但是不在2xx的范围
          Request.errorHandle(response);
        } else {
          Toast.fail('网络连接异常,请稍后再试!');
        }
        return Promise.reject(response?.data);
      }
    );
  }

  /**
   * http握手错误
   * @param res 响应回调,根据不同响应进行不同操作
   * @param message
   */
  private static errorHandle(res: IRequestResponse, message?: string) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        Toast.fail('请求的资源不存在');
        break;
      default:
        // 错误信息判断
        message && Toast.fail(message);
    }
  }
}
