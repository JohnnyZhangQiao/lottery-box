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
    setItem(data: Record<string, any>) {
      if (typeof data === 'object') {
        Object.keys(data).forEach((key: string) => {
          // @ts-ignore
          if (this.hasOwnProperty(key)) {
            // @ts-ignore
            this[key] = data[key];
          }
        });
      }
    }
  }
});
