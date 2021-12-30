import { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * 请求参数类型
 */
export interface IRequestParams extends AxiosRequestConfig {
  desc?: string;
  isJSON?: boolean;
}

/**
 * 服务端data
 */
export type TBackData =
  | Array<Record<string, any>>
  | Record<string, any>
  | undefined;

/**
 * 协议定义相应data
 */
export type TResponseData = {
  code: 0 | number; // 0 => ok
  message: string;
  data?: TBackData;
};

/**
 * 请求响应类型
 */
export interface IRequestResponse extends AxiosResponse {
  data: TResponseData;
}
