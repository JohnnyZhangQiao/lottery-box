import { MockMethod } from 'vite-plugin-mock';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    url: '/api/userInfo',
    method: 'post',
    timeout: Math.floor(Math.random() * (1200 + 1)),
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          userId: uuidv4(),
          username: '你的名字',
          avatar:
            'https://img1.baidu.com/it/u=2071723855,1373004158&fm=26&fmt=auto',
          box: [
            {
              id: 10012003,
              boxImg:
                'https://www.ibox.art/file/oss/test/image/nft-goods/5e13232dc52a422fb2b51e74bc6cb3fb.png?style=st6',
              status: 5,
              title: '十二支宝宝',
              authorPic:
                'https://www.ibox.art/file/oss/test/image/nft-goods/ac3cb7dfd0234d1da3e5c53eb4ba425d.jpg',
              authorName: '陈墨墨'
            }
          ]
        }
      };
    }
  },
  {
    url: '/api/userAuthority',
    method: 'post',
    timeout: Math.floor(Math.random() * (1200 + 1)),
    response: ({ body }) => {
      const { username, password } = body;
      if (username && password) {
        return {
          code: 0,
          message: 'success',
          data: {
            token: uuidv4()
          }
        };
      } else {
        return {
          code: 1001,
          message: '账号不存在或密码错误',
          data: {}
        };
      }
    }
  }
] as MockMethod[];
