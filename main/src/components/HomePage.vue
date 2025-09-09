<template>
  <div class="home-page">
    <!-- 头部导航 -->
    <HeaderNav />
    
    <!-- 主体内容 -->
    <main id="fullpage">
      <!-- 轮播图区域 -->
      <BannerSection />
      
      <!-- 新闻中心 -->
      <NewsSection />
      
      <!-- 公司介绍 -->
      <CompanyIntro />
      
      <!-- 业务板块 -->
      <BusinessSection />
      
      <!-- 发展历程 -->
      <HistorySection />
      
      <!-- 项目展示 -->
      <ProjectShowcase />
      
      <!-- 专题专栏 -->
      <TopicSection />
      
      <!-- 页脚 -->
      <FooterSection />
    </main>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import BannerSection from './BannerSection.vue'
import NewsSection from './NewsSection.vue'
import CompanyIntro from './CompanyIntro.vue'
import BusinessSection from './BusinessSection.vue'
import HistorySection from './HistorySection.vue'
import ProjectShowcase from './ProjectShowcase.vue'
import TopicSection from './TopicSection.vue'
import FooterSection from './FooterSection.vue'
import fullpage from 'fullpage.js'

export default {
  name: 'HomePage',
  components: {
    HeaderNav,
    BannerSection,
    NewsSection,
    CompanyIntro,
    BusinessSection,
    HistorySection,
    ProjectShowcase,
    TopicSection,
    FooterSection
  },
  mounted() {
    // 初始化fullpage.js
    if (window.innerWidth >= 1200) {
      this.initFullpage()
    }
  },
  methods: {
    initFullpage() {
      new fullpage('#fullpage', {
        anchors: ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
        normalScrollElements: '.slide_down_nav',
        scrollingSpeed: 1000,
        fitToSectionDelay: 2000,
        css3: true,
        afterLoad: (origin, destination, direction) => {
          if (destination.index == 0) {
            document.getElementById('gotop')?.classList.add('hide')
          } else {
            document.getElementById('gotop')?.classList.remove('hide')
          }
          if (destination.index == 2) {
            // 触发数字动画
            this.triggerCountUp()
          }
        }
      })
    },
    triggerCountUp() {
      // 触发数字动画
      const numbers = document.querySelectorAll('.number')
      numbers.forEach(number => {
        if (number.textContent) {
          // 这里可以添加数字动画逻辑
          console.log('触发数字动画:', number.textContent)
        }
      })
    }
  }
}
</script>

<style scoped>
.home-page {
  font-family: Arial, sans-serif;
}
</style>
