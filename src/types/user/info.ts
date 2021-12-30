import { TBox } from '@/types/index/box';

export type TUser = {
  userId: string;
  username: string;
  avatar: string;
  box: TBox[];
};
