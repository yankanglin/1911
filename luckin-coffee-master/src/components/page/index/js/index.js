import banner_1 from '@/assets/images/banner_1.jpg'
import banner_2 from '@/assets/images/banner_2.jpg'
import banner_3 from '@/assets/images/banner_3.jpg'
import banner_4 from '@/assets/images/banner_4.jpg'

export default {
  // 首页 轮播图
  banner: [
    {
      id: 1,
      src: banner_3,
      link: 'javascript:;'
    },
    {
      id: 2,
      src: banner_4,
      link: 'javascript:;'
    },
    {
      id: 3,
      src: banner_1,
      link: 'javascript:;'
    },
    {
      id: 4,
      src: banner_2,
      link: 'javascript:;'
    }
  ],
  // 首页 菜单项目
  product: [
    {
      id: 1,
      name: '现在下单',
      desc: 'ORDER NOW',
      icon: 'el-icon-menu'
    },
    {
      id: 2,
      name: '咖啡钱包',
      desc: 'COFFEE WALLET',
      icon: 'el-icon-menu'
    },
    {
      id: 3,
      name: '送Ta咖啡',
      desc: 'SEND COFFEE',
      icon: 'el-icon-menu'
    },
    {
      id: 4,
      name: '企业账户',
      desc: 'ENTERPRISE ACCOUNT',
      icon: 'el-icon-menu'
    },
  ]
}
