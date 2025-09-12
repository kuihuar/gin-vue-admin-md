<template>
  <section class="index">
    <!-- 桌面端导航 -->
    <div class="nav_box white">
      <div class="nav_wrap fix">
        <h1 class="l logo" id="logo">
          <img src="@/assets/images/logo_w.png" alt="华苏建设有限公司">  
          <a href="#" style="display: inline;color: #ffffff;">华苏建设有限公司</a>
        </h1>
        <div class="nav fix r">
          <ul class="fix l">
            <li class="nav_li" v-for="item in navItems" :key="item.id">
              <a :href="item.href" :title="item.title">{{ item.title }}</a>
              <div class="dropdown" v-if="item.children">
                <div class="mwrap fix">
                  <div class="left">
                    <ul>
                      <li v-for="child in item.children" :key="child.id">
                        <a :href="child.href" :title="child.title">{{ child.title }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="right fix">
                    <div class="infor">
                      <div class="box">
                        <div class="tit">
                          <p>{{ item.description }}</p>
                        </div>
                        <div class="con">
                          <p>{{ item.content }}</p>
                        </div>
                        <a :href="item.href" class="more"> 查看更多 <i class="icon"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 移动端头部导航 -->
    <section class="m_header_box">
      <header id="m_header">
        <!-- <div id="logo">
          <a href="#" style="display: inline;color: #ffffff;">华苏建设有限公司</a>
        </div> -->
        <div class="mobile-menu" @click="toggleMobileMenu"></div>
      </header>
    </section>
    
    <!-- 移动端菜单 -->
    <div id="m_nav" :class="{ act: showMobileMenu }">
      <ul>
        <li v-for="item in navItems" :key="item.id" class="void">
          <a :href="item.href">{{ item.title }}</a>
          <ul class="sub" v-if="item.children">
            <li v-for="child in item.children" :key="child.id">
              <a :href="child.href">{{ child.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    
    <!-- 移动端菜单遮罩 -->
    <!-- <div class="nav_mask" v-if="showMobileMenu" @click="closeMobileMenu"></div> -->
    
    <!-- 全屏菜单组件 -->
    <!-- <MenuComponent v-if="showMenu" :isVisible="showMenu" @close="closeMenu" /> -->
  </section>
</template>

<script>
import MenuComponent from './MenuComponent.vue'

export default {
  name: 'HeaderNav',
  components: {
    MenuComponent
  },
  data() {
    return {
      searchKeyword: '',
      showMenu: false,
      showMobileMenu: false, // 添加移动端菜单状态
      navItems: [
        {
          id: 1,
          title: '关于华苏',
          href: '#',
          description: '奉献精品 开创未来',
          content: '华苏建设有限公司（以下简称"山西投"）系山西省规模最大的综合性国有投资设集团。其前身为中央人民政府工部太原工程局、国家工部华北工程管理局、国家工部和国家委第八工程局，组于1953年，1970年下放山西，改称山西省筑工程管理局。',
          children: [
            { id: 11, title: '集团简介', href: '#' },
            { id: 12, title: '组织架构', href: '#' },
            { id: 13, title: '集团荣誉', href: '#' },
            { id: 14, title: '联系华苏', href: '#' }
          ]
        },
        {
          id: 2,
          title: '华苏动态',
          href: '#',
          description: '立足山西 布局全国 开拓海外',
          content: '山西投现辖56个全资、控股和参股子公司，其中上市公司2家；职工总数3.5万余人，其中各类经营管理和专业技术人才2.7万余人；拥有7个筑、3个市政公用、1个石油化工，共11项工程施工总承包特级资质。',
          children: [
            { id: 21, title: '新闻中心', href: '#' },
            { id: 22, title: '国企资讯', href: '#' },
            { id: 23, title: '公司要闻', href: '#' }
          ]
        },
        {
          id: 3,
          title: '党建工作',
          href: '#',
          description: '立足山西 布局全国 开拓海外',
          content: '山西投现辖56个全资、控股和参股子公司，其中上市公司2家；职工总数3.5万余人，其中各类经营管理和专业技术人才2.7万余人；拥有7个筑、3个市政公用、1个石油化工，共11项工程施工总承包特级资质。',
          children: [
            { id: 31, title: '党建工作', href: '#' },
            { id: 32, title: '纪检监察', href: '#' },
            { id: 33, title: '工会工作', href: '#' },
            { id: 34, title: '团青工作', href: '#' }
          ]
        },
        {
          id: 4,
          title: '全产业链服务',
          href: '#',
          description: '实施名牌战略 营造时代精品',
          content: '近年来，在省委省政府坚强领导和大力支持下，山西投抢抓我省国资国企改革历史机遇，大刀阔斧推进改革改制与资产重组，解决了多年久拖不决的诸多难题，资产负债率大幅下降，资本状况显著改善。',
          children: [
            { id: 41, title: '三大支柱', href: '#' },
            { id: 42, title: '六大支撑', href: '#' }
          ]
        },
        {
          id: 5,
          title: '科技创新',
          href: '#',
          description: '山西投连年入选"中国企业500强"',
          content: '展望未来，山西投将在省委省政府的正确领导下，进一步深化体制机制改革，持续创新商业模式，完善现代企业治理体系，深入推进内涵集约式发展，促进经营规模和经济效益持续稳健增长。',
          children: [
            { id: 51, title: '科技成果', href: '#' },
            { id: 52, title: '创新体系', href: '#' },
            { id: 53, title: '成果推广', href: '#' },
            { id: 54, title: '科技动态', href: '#' }
          ]
        },
        {
          id: 6,
          title: '投文化',
          href: '#',
          description: '促进经营规模和经济效益持续稳健增长',
          content: '打造集投资、设、运营为一体的"全产业链"筑业龙头企业，向国内领先、国际知名、具有较强竞争力的"大设"集团迈进，全力冲刺"世界500强"。',
          children: [
            { id: 61, title: '投文化', href: '#' },
            { id: 62, title: '发展历程', href: '#' }
          ]
        },
        {
          id: 7,
          title: '专题专栏',
          href: '#',
          description: '进一步深化体制机制改革',
          content: '近年来，在省委省政府坚强领导和大力支持下，山西投抢抓我省国资国企改革历史机遇，大刀阔斧推进改革改制与资产重组，解决了多年久拖不决的诸多难题，资产负债率大幅下降，资本状况显著改善。',
          children: [
            { id: 71, title: '学习宣传', href: '#' },
            { id: 72, title: '市场开拓', href: '#' },
            { id: 73, title: '质量安全', href: '#' }
          ]
        },
        {
          id: 8,
          title: '信息公开',
          href: '#',
          description: '奉献精品 开创未来',
          content: '华苏建设有限公司（以下简称"华苏建设"）系山西省规模最大的综合性国有投资设集团。其前身为中央人民政府工部太原工程局、国家工部华北工程管理局、国家工部和国家委第八工程局，组于1953年，1970年下放山西，改称山西省筑工程管理局。',
          children: [
            { id: 81, title: '通知公告', href: '#' },
            { id: 82, title: '重大事项', href: '#' },
            { id: 83, title: '人才招聘', href: '#' }
          ]
        }
      ]
    }
  },
  methods: {
    handleSearch() {
      if (this.searchKeyword.trim()) {
        console.log('搜索关键词:', this.searchKeyword)
        // 这里可以添加搜索逻辑
      } else {
        alert('请输入关键字！')
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      this.showMenu = false
    },
    // 添加移动端菜单方法
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
      // 防止body滚动
      if (this.showMobileMenu) {
        document.body.classList.add('navShow')
      } else {
        document.body.classList.remove('navShow')
      }
    },
    closeMobileMenu() {
      this.showMobileMenu = false
      document.body.classList.remove('navShow')
    }
  }
}
</script>

<style>
@import '@/assets/css/reset.css';
@import '@/assets/css/style.css';

/* 移动端菜单样式补充 */
#m_nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background: #fff;
  z-index: 100001;
  transition: right 0.3s ease;
  overflow-y: auto;
  box-shadow: -2px 0 10px rgba(0,0,0,0.1);
}

#m_nav.act {
  right: 0;
}

#m_nav .close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  z-index: 100002;
}

#m_nav ul {
  list-style: none;
  padding: 60px 0 0 0;
  margin: 0;
}

#m_nav .void {
  border-bottom: 1px solid #eee;
}

#m_nav .void > a {
  display: block;
  padding: 15px 20px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-left: 3px solid transparent;
  transition: all 0.3s;
}

#m_nav .void > a:hover {
  background: #f8f9fa;
  border-left-color: #007bff;
  color: #007bff;
}

#m_nav .sub {
  background: #f8f9fa;
  padding: 0;
  margin: 0;
}

#m_nav .sub li {
  border-bottom: none;
}

#m_nav .sub a {
  padding: 12px 20px 12px 40px;
  font-size: 14px;
  color: #666;
  border-left: none;
}

#m_nav .sub a:hover {
  background: #e9ecef;
  color: #007bff;
}

.nav_mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 100000;
}

/* 防止body滚动 */
body.navShow {
  overflow: hidden;
}

/* 响应式显示控制 */
/* 移动端头部样式 - 使用更具体的选择器 */
section.index .m_header_box {
  display: none !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 60px !important;
  /* background: #333 !important; */
  background: transparent !important;
  z-index: 100001 !important;
  transition: none !important;
}

/* section.index #m_header {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  height: 100% !important;
  padding: 0 20px !important;
  position: relative !important;
  box-shadow: none !important;
  background-size: auto !important;
} */

/* section.index #m_header #logo a {
  color: #fff !important;
  font-size: 16px !important;
  font-weight: bold !important;
  text-decoration: none !important;
} */

/* section.index .mobile-menu {
  position: relative !important;
  top: auto !important;
  right: auto !important;
  width: 24px !important;
  height: 24px !important;
  cursor: pointer !important;
  z-index: 100002 !important;
  background-size: contain !important;
  display: block !important;
} */

/* 移除伪元素的三横线样式 */
.mobile-menu::before,
.mobile-menu::after {
  content: '';
  display: block;
  width: 20px;
  height: 2px;
  background: #ffffff;
  margin: 4px 0;
  transition: 0.3s;
}

.mobile-menu::before {
  transform: translateY(-6px);
}

.mobile-menu::after {
  transform: translateY(4px);
}

/* 移动端显示 */
@media (max-width: 1200px) {
  .nav_box {
    display: none !important;
  }
  
  section.index .m_header_box {
    display: block !important;
  }
  
  section.index .mobile-menu {
    display: block !important;
  }
}

/* 桌面端隐藏 */
@media (min-width: 1201px) {
  .nav_box {
    display: block !important;
  }
  
  section.index .m_header_box {
    display: none !important;
  }
  
  section.index .mobile-menu {
    display: none !important;
  }
  
  #m_nav {
    display: none !important;
  }
  
  .nav_mask {
    display: none !important;
  }
}
</style>
