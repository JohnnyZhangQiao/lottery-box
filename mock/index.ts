import { MockMethod } from 'vite-plugin-mock';
const Mock = require('mockjs');
export default [
  {
    url: '/api/fetchList',
    method: 'post',
    timeout: Math.floor(Math.random() * (1200 + 1)),
    response: ({ query }) => {
      return {
        code: 0,
        message: 'success',
        data: [
          {
            boxImg:
              'https://www.ibox.art/file/oss/test/image/nft-goods/5e13232dc52a422fb2b51e74bc6cb3fb.png?style=st6',
            status: 1,
            title: '十二支宝宝',
            authorPic:
              'https://www.ibox.art/file/oss/test/image/nft-goods/ac3cb7dfd0234d1da3e5c53eb4ba425d.jpg',
            authorName: '陈墨墨'
          },
          {
            boxImg:
              'https://www.ibox.art/file/oss/test/image/nft-goods/85bbd49f8585416e9f537c50daf6685c.png',
            status: 1,
            title: '电牛放歌',
            authorPic:
              'https://www.ibox.art/file/oss/test/image/nft-goods/ac3cb7dfd0234d1da3e5c53eb4ba425d.jpg',
            authorName: '陈墨墨'
          },
          {
            boxImg:
              'https://www.ibox.art/file/oss/test/image/nft-goods/a51ab0efa5de4f969486b516b2600642.jpg',
            status: 1,
            title: '荣宝斋当代十大画家',
            authorPic:
              'https://www.ibox.art/file/oss/test/image/nft-goods/ac3cb7dfd0234d1da3e5c53eb4ba425d.jpg',
            authorName: '陈墨墨'
          },
          {
            boxImg:
              'https://www.ibox.art/file/oss/test/image/nft-goods/2d8be87f5e0d4fc8bd8419868ea261fa.png',
            status: 1,
            title: '时空旅行者系列',
            authorPic:
              'https://www.ibox.art/file/oss/test/image/nft-goods/ac3cb7dfd0234d1da3e5c53eb4ba425d.jpg',
            authorName: '陈墨墨'
          },
          {
            boxImg:
              '\thttps://www.ibox.art/file/oss/test/image/nft-goods/bbfd9ff154d245f0ae1b761a1906b08c.png',
            status: 1,
            title: 'Arrive IN Mars',
            authorPic:
              'https://www.ibox.art/file/oss/test/image/nft-goods/ac3cb7dfd0234d1da3e5c53eb4ba425d.jpg',
            authorName: '陈墨墨'
          },
          {
            boxImg:
              'https://www.ibox.art/file/oss/test/image/nft-goods/a51ab0efa5de4f969486b516b2600642.jpg',
            status: 1,
            title: '荣宝斋当代十大画家',
            authorPic:
              'https://www.ibox.art/file/oss/test/image/nft-goods/ac3cb7dfd0234d1da3e5c53eb4ba425d.jpg',
            authorName: '陈墨墨'
          }
        ]
      };
    }
  }
] as MockMethod[];
