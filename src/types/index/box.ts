import { BoxType } from '@/constants/box';

export interface TBox {
  id: number;
  boxImg: string;
  status: BoxType;
  title: string;
  authorPic: string;
  authorName: string;
}
