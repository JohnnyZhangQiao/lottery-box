import { BoxType } from '@/constants/box';

export interface TBox {
  boxImg: string;
  status: BoxType;
  title: string;
  authorPic: string;
  authorName: string;
}
