import { TBox } from '@/types/index/box';

export type TUser = {
  token?: string;
  userId: string;
  username: string;
  avatar: string;
  box?: TBox[];
};
