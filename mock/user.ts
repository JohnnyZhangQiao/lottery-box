import { MockMethod } from 'vite-plugin-mock';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    url: '/api/userInfo',
    method: 'post',
    timeout: Math.floor(Math.random() * (1200 + 1)),
    response: ({ body }) => {
      return {
        code: 0,
        message: 'success',
        data: {
          userId: uuidv4(),
          username: 'Q仔',
          avatar:
            'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
          box: [
            {
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
