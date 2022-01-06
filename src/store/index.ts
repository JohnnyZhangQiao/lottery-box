/**
 * 把状态注册操作加入到事件总线中，提前生成状态库
 */

import { useUser } from './user';

const appStore: any = {};

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.useUser = useUser();
};

export default appStore;
