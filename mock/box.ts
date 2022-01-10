import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/boxDetail',
    method: 'post',
    timeout: Math.floor(Math.random() * (1200 + 1)),
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          id: 10012003,
          boxImg:
              'https://www.ibox.art/file/oss/test/image/nft-goods/5e13232dc52a422fb2b51e74bc6cb3fb.png?style=st6',
          title: '十二支宝宝',
          authorPic:
              'https://www.ibox.art/file/oss/test/image/nft-goods/ac3cb7dfd0234d1da3e5c53eb4ba425d.jpg',
          authorName: '陈墨墨',
          desc: '十二支宝宝之虎\n宝宝为婴儿之意，有宝宝的地方就充满欢笑。Tei希望在繁乱复杂的现代生活中，打造一系列温暖治愈的艺术作品。\n十二支宝宝系列作品，通过描绘十二生肖的宝宝，希望让人们通过生肖宝宝找到自己的影子与初心，治愈人心。此作品为虎宝宝。',
          sellLimit: 200,
          onSale: 23,
          price: 199,
          priceUnit: 'CNY',
          onSaleTime: 1635480000000,
          status: 1,
        }
      };
    }
  },
] as MockMethod[];
