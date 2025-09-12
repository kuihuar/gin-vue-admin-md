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
        // 添加 active 类到移动菜单按钮
        document.querySelector('.mobile-menu').classList.add('active')
      } else {
        document.body.classList.remove('navShow')
        // 移除 active 类
        document.querySelector('.mobile-menu').classList.remove('active')
      }
    },
    closeMobileMenu() {
      this.showMobileMenu = false
      document.body.classList.remove('navShow')
      // 移除 active 类
      document.querySelector('.mobile-menu').classList.remove('active')
    }
  }
}
</script>

<style>
@import '@/assets/css/reset.css';
@import '@/assets/css/style.css';

/* 移动端菜单样式 */
#m_nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 350px;
  height: 100vh;
  /* background: #ffffff; */
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  z-index: 100001;
  transition: right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow-y: auto;
  box-shadow: -8px 0 32px rgba(0,0,0,0.3);
  border-left: 1px solid #34495e;
}

#m_nav.act {
  right: 0;
}

#m_nav ul {
  list-style: none;
  padding: 0px 0 200px 0;
  margin: 0;
}

/* 增强移动菜单悬停效果 */
#m_nav .void {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

#m_nav .void::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(135, 206, 235, 0.1), transparent);
  transition: left 0.6s ease;
  z-index: 0;
}

#m_nav .void:hover::before {
  left: 100%;
}

#m_nav .void > a {
  display: block;
  padding: 10px 0px;
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  transform: translateX(0);
}

#m_nav .void > a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #87ceeb 0%, #5dade2 100%);
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px rgba(135, 206, 235, 0.3);
}

#m_nav .void > a::after {
  content: '→';
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  color: #87ceeb;
  font-size: 14px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 0 5px rgba(135, 206, 235, 0.5);
}

#m_nav .void > a:hover {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #2c3e50;
  padding-left: 35px;
  transform: translateX(5px);
  box-shadow: inset 0 0 20px rgba(135, 206, 235, 0.1);
}

#m_nav .void > a:hover::before {
  transform: scaleY(1);
  box-shadow: 0 0 15px rgba(135, 206, 235, 0.4);
}

#m_nav .void > a:hover::after {
  opacity: 1;
  right: 25px;
  transform: translateY(-50%) scale(1);
}

/* 子菜单悬停效果增强 */
#m_nav .sub {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 0;
  margin: 0;
  border-left: 3px solid #e3f2fd;
  position: relative;
  overflow: hidden;
}

#m_nav .sub::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #87ceeb 0%, #5dade2 100%);
  transform: scaleY(0);
  transition: transform 0.3s ease;
  transform-origin: top;
}

#m_nav .void:hover .sub::before {
  transform: scaleY(1);
}

#m_nav .sub li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  transition: all 0.3s ease;
}

#m_nav .sub li:last-child {
  border-bottom: none;
}

#m_nav .sub li:hover {
  background: rgba(135, 206, 235, 0.05);
  transform: translateX(3px);
}

#m_nav .sub a {
  padding: 14px 30px 14px 30px;
  font-size: 13px;
  color: #666666;
  border-left: none;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

#m_nav .sub a::before {
  content: '•';
  position: absolute;
  left: 35px;
  color: #87ceeb;
  font-size: 12px;
  opacity: 0;
  transform: scale(0) rotate(0deg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 0 5px rgba(135, 206, 235, 0.5);
}

#m_nav .sub a::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, rgba(135, 206, 235, 0.1), transparent);
  transition: width 0.3s ease;
}

#m_nav .sub a:hover {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1976d2;
  padding-left: 55px;
  transform: translateX(5px);
  box-shadow: inset 0 0 15px rgba(135, 206, 235, 0.1);
}

#m_nav .sub a:hover::before {
  opacity: 1;
  transform: scale(1.2) rotate(360deg);
  color: #1976d2;
}

#m_nav .sub a:hover::after {
  width: 100%;
}

/* 添加菜单项进入动画 */
#m_nav .void {
  animation: slideInFromRight 0.3s ease forwards;
  opacity: 0;
  transform: translateX(30px);
}

#m_nav .void:nth-child(1) { animation-delay: 0.1s; }
#m_nav .void:nth-child(2) { animation-delay: 0.15s; }
#m_nav .void:nth-child(3) { animation-delay: 0.2s; }
#m_nav .void:nth-child(4) { animation-delay: 0.25s; }
#m_nav .void:nth-child(5) { animation-delay: 0.3s; }
#m_nav .void:nth-child(6) { animation-delay: 0.35s; }

@keyframes slideInFromRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 子菜单项进入动画 */
#m_nav .sub li {
  animation: slideInFromLeft 0.3s ease forwards;
  opacity: 0;
  transform: translateX(-20px);
}

#m_nav .sub li:nth-child(1) { animation-delay: 0.1s; }
#m_nav .sub li:nth-child(2) { animation-delay: 0.15s; }
#m_nav .sub li:nth-child(3) { animation-delay: 0.2s; }
#m_nav .sub li:nth-child(4) { animation-delay: 0.25s; }

@keyframes slideInFromLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 菜单头部 */
#m_nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(0deg, #ffffff 0%, #34495e 100%);
  display: flex;
  align-items: center;
  padding: 0 30px;
}

#m_nav::after {
  content: '华苏建设';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0 30px;
  z-index: 1;
  letter-spacing: 0.5px;
}

/* 关闭按钮 */
#m_nav .close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 34px;
  height: 34px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
}

#m_nav .close-btn:hover {
  background: rgba(255,255,255,0.2);
  border-color: rgba(255,255,255,0.3);
  transform: rotate(90deg);
}

/* 滚动条样式 */
#m_nav::-webkit-scrollbar {
  width: 4px;
}

#m_nav::-webkit-scrollbar-track {
  background: #f1f1f1;
}

#m_nav::-webkit-scrollbar-thumb {
  background: #87ceeb;
  border-radius: 2px;
}

#m_nav::-webkit-scrollbar-thumb:hover {
  background: #5dade2;
}

/* 添加微妙的背景纹理 */
#m_nav {
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(135, 206, 235, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(44, 62, 80, 0.02) 0%, transparent 50%);
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

.m_header_box {transition: .6s;display: none;height: .7rem; width: 100%;position: relative;z-index: 100000;}
.m_header_box header{
	padding: 0 0 0 15px;
	height: .7rem;
	/* background: url(../images/footer.jpg) center bottom no-repeat;box-shadow: 0 3px 5px rgba(0,0,0,.05); */
	background-size: cover;position: fixed;top: 0;left: 0;right: 0;z-index: 100;
	display:flex;
	justify-content:space-between;align-items: center;
	/* background: #284ca7; */
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
  justify-content: flex-end !important;
}

section.index #m_header {
  display: flex !important;
  justify-content: flex-end !important;
  align-items: center !important;
  /* height: 80% !important; */
  padding: 0 20px !important;
}

/* 移动菜单按钮基础样式 */
.mobile-menu {
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

/* 三横线效果 - 使用伪元素创建三条线 */
.mobile-menu::before,
.mobile-menu::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1px;
}

/* 中间线 - 使用元素本身 */
.mobile-menu {
  background: #ffffff;
  width: 20px;
  height: 2px;
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 上横线 */
.mobile-menu::before {
  top: 8px;
  transform: translateY(0);
}

/* 下横线 */
.mobile-menu::after {
  bottom: 8px;
  transform: translateY(0);
}

/* 菜单展开时的 X 效果 - 完全隐藏中间线，只显示 X */
.mobile-menu.active::before {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.mobile-menu.active::after {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

.mobile-menu.active {
  background: transparent;
}

/* 悬停效果 */
.mobile-menu:hover::before,
.mobile-menu:hover::after,
.mobile-menu:hover {
  /* background: #87ceeb; */
  box-shadow: 0 0 8px rgba(135, 206, 235, 0.5);
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
