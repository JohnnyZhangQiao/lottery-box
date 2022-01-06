import { defineStore } from 'pinia';
import { TUser } from '@/types/user/info';

export const useUser = defineStore('useUser', {
  state: (): TUser => ({
    token: '',
    userId: '',
    username: '',
    avatar: ''
  }),
  actions: {
    setItem(key: string, value: any) {
      // @ts-ignore
      this[key] = value;
    }
  }
});
