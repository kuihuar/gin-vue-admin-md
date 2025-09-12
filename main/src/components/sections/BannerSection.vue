<template>
  <div class="section main-visual-wrapper">
    <article class="main-visual-slider ar_web">
      <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div 
            class="swiper-slide main-visual-item" 
            v-for="(slide, index) in bannerSlides" 
            :key="index"
          >
            <a :href="slide.link" :title="slide.title" target="_blank">
              <div class="slide-inner">
                <div class="visual-img">
                  <img :src="slide.image" :alt="slide.title" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <aside class="main-visual-controls">
        <div class="main-visual-loading-bar">
          <span :style="{ width: progressWidth + '%' }"></span>
        </div>
        <div class="my_btn">
          <div class="my_btn1" @click="pauseAutoSlide">
            <svg t="1662532633184" class="icon" viewBox="0 0 1024 1024" p-id="15226" width="200" height="200">
              <path d="M428.539658 833.494155c0 15.954367-13.053294 29.007661-29.007661 29.007661L285.613458 862.501816c-15.954367 0-29.007661-13.053294-29.007661-29.007661l0-639.423111c0-15.954367 13.053294-29.007661 29.007661-29.007661l113.918539 0c15.954367 0 29.007661 13.053294 29.007661 29.007661L428.539658 833.494155z" p-id="15227"></path>
              <path d="M760.124635 833.494155c0 15.954367-13.053294 29.007661-29.007661 29.007661l-113.918539 0c-15.954367 0-29.007661-13.053294-29.007661-29.007661l0-639.423111c0-15.954367 13.053294-29.007661 29.007661-29.007661l113.918539 0c15.954367 0 29.007661 13.053294 29.007661 29.007661L760.124635 833.494155z" p-id="15228"></path>
            </svg>
          </div>
          <div class="my_btn2" @click="resumeAutoSlide">
            <svg t="1662532647561" class="icon" viewBox="0 0 1024 1024" p-id="16132" width="200" height="200">
              <path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" p-id="16133"></path>
            </svg>
          </div>
        </div>
        <div class="main-visual-control-btns">
          <div class="main-visual-conuter">
            <span class="cur-num">{{ String(currentSlide + 1).padStart(2, '0') }}</span>
            <span class="total-num">/ {{ String(bannerSlides.length).padStart(2, '0') }}</span>
          </div>
          <button class="slide-prev-btn" title="Prev" @click="prevSlide"></button>
          <div class="line"></div>
          <button class="slide-next-btn" title="Next" @click="nextSlide"></button>
        </div>
      </aside>
    </article>

    <!-- 公告滚动 -->
    <div class="inotice_list_con fix">
      <span class="tip l">最新公告</span>
      <span class="jg l">|</span>
      <section class="list1_box swiper-container">
        <ul 
          class="list1 swiper-wrapper" 
          :style="{ transform: `translateY(-${currentNoticeIndex * 100}%)` }"
        >
          <li class="swiper-slide" v-for="(notice, index) in notices" :key="index">
            <a :href="notice.link" target="_blank" :title="notice.title" class="a">
              <h4 class="l1 h4s1">{{ notice.title }}</h4>
              <span>{{ notice.date }}</span>
            </a>
          </li>
        </ul>
      </section>
      <a class="arrs arr_prev" @click="prevNotice"></a>
      <a class="arrs arr_next" @click="nextNotice"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerSection',
  data() {
    return {
      currentSlide: 0,
      autoSlideTimer: null,
      progressTimer: null,
      progressWidth: 0,
      isPaused: false,
      slideInterval: 10000, // 10秒切换一次
      // 添加公告滚动相关数据
      currentNoticeIndex: 0,
      noticeAutoScrollTimer: null,
      noticeScrollInterval: 5000, // 5秒切换一次公告
      bannerSlides: [
        {
          image: '/src/assets/images/baner_hsjs.jpg',
          title: '华苏建设有限公司',
          link: '#'
        },
        {
          image: '/src/assets/images/banner_djxx169.jpg',
          title: '专题学习',
          link: '#'
        },
        {
          image: '/src/assets/images/banner_djxx169.jpg',
          title: '党建学习',
          link: '#'
        },
        {
          image: '/src/assets/images/banner_ztxx.jpg',
          title: '学习宣传',
          link: '#'
        }
      ],
      notices: [
        {
          title: '华苏建设有限公司企业负责人2023年度薪酬情况',
          date: '2025-07-09',
          link: '#'
        },
        {
          title: '省属企业2023年度工资分配信息披露表',
          date: '2025-07-09',
          link: '#'
        },
        {
          title: '华苏建设有限公司 2025年度高校毕业生招聘结果公示',
          date: '2025-07-04',
          link: '#'
        }
      ]
    }
  },
  mounted() {
    this.startAutoSlide()
    this.startNoticeAutoScroll() // 启动公告自动滚动
  },
  beforeUnmount() {
    this.clearTimers()
    this.clearNoticeTimer() // 清理公告定时器
  },
  methods: {
    startAutoSlide() {
      this.clearTimers()
      if (!this.isPaused) {
        this.autoSlideTimer = setInterval(() => {
          this.nextSlide()
        }, this.slideInterval)
        
        this.startProgress()
      }
    },
    startProgress() {
      this.progressWidth = 0
      this.progressTimer = setInterval(() => {
        this.progressWidth += 2
        if (this.progressWidth >= 100) {
          this.progressWidth = 0
        }
      }, this.slideInterval / 50)
    },
    clearTimers() {
      if (this.autoSlideTimer) {
        clearInterval(this.autoSlideTimer)
        this.autoSlideTimer = null
      }
      if (this.progressTimer) {
        clearInterval(this.progressTimer)
        this.progressTimer = null
      }
    },
    pauseAutoSlide() {
      this.isPaused = true
      this.clearTimers()
    },
    resumeAutoSlide() {
      this.isPaused = false
      this.startAutoSlide()
    },
    prevSlide() {
      this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : this.bannerSlides.length - 1
      this.restartAutoSlide()
    },
    nextSlide() {
      this.currentSlide = this.currentSlide < this.bannerSlides.length - 1 ? this.currentSlide + 1 : 0
      this.restartAutoSlide()
    },
    restartAutoSlide() {
      this.clearTimers()
      this.startAutoSlide()
    },
    // 添加公告滚动相关方法
    startNoticeAutoScroll() {
      this.clearNoticeTimer()
      this.noticeAutoScrollTimer = setInterval(() => {
        this.nextNotice()
      }, this.noticeScrollInterval)
    },
    
    clearNoticeTimer() {
      if (this.noticeAutoScrollTimer) {
        clearInterval(this.noticeAutoScrollTimer)
        this.noticeAutoScrollTimer = null
      }
    },
    
    prevNotice() {
      this.currentNoticeIndex = this.currentNoticeIndex > 0 
        ? this.currentNoticeIndex - 1 
        : this.notices.length - 1
      this.restartNoticeAutoScroll()
    },
    
    nextNotice() {
      this.currentNoticeIndex = this.currentNoticeIndex < this.notices.length - 1 
        ? this.currentNoticeIndex + 1 
        : 0
      this.restartNoticeAutoScroll()
    },
    
    restartNoticeAutoScroll() {
      this.clearNoticeTimer()
      this.startNoticeAutoScroll()
    }
  }
}
</script>

<style scoped>
@import '/src/assets/css/reset.css';
@import '/src/assets/css/style.css';

/* 轮播图样式 - 修复响应式问题 */
.main-visual-slider {
  position: relative;
  height: 100vh; /* 桌面端全屏高度 */
  overflow: hidden;
}

/* 移动端响应式调整 */
@media (max-width: 1200px) {
  .main-visual-slider {
    height: 60vw !important; /* 移动端使用vw单位 */
    min-height: 300px; /* 最小高度保证 */
  }
}

@media (max-width: 768px) {
  .main-visual-slider {
    height: 50vw !important; /* 小屏幕进一步调整 */
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .main-visual-slider {
    height: 45vw !important; /* 手机端优化 */
    min-height: 200px;
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-wrapper {
  display: flex;
  width: 100%; 
  height: 100%;
  transition: transform 0.8s ease-in-out;
}

.swiper-slide {
  flex-shrink: 0;
  width: 25%; /* 每个slide占25%，总共100% */
  height: 100%;
  position: relative;
}

.main-visual-item {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-inner {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-img {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-img img {
  max-width: 100%;
  max-height: 100%;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important; 
  object-position: center;
}

/* 控制按钮样式 - 移动端优化 */
.main-visual-controls {
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 10;
}

@media (max-width: 768px) {
  .main-visual-controls {
    bottom: 20px;
    right: 20px;
  }
  
  .main-visual-loading-bar {
    width: 150px !important;
  }
  
  .my_btn1, .my_btn2 {
    width: 35px !important;
    height: 35px !important;
  }
  
  .slide-prev-btn, .slide-next-btn {
    width: 25px !important;
    height: 25px !important;
  }
}

@media (max-width: 480px) {
  .main-visual-controls {
    bottom: 15px;
    right: 15px;
  }
  
  .main-visual-loading-bar {
    width: 120px !important;
  }
  
  .my_btn1, .my_btn2 {
    width: 30px !important;
    height: 30px !important;
  }
  
  .slide-prev-btn, .slide-next-btn {
    width: 20px !important;
    height: 20px !important;
  }
}

.main-visual-loading-bar {
  width: 200px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;
  border-radius: 1px;
}

.main-visual-loading-bar span {
  display: block;
  height: 100%;
  background: #fff;
  border-radius: 1px;
  transition: width 0.1s linear;
}

.my_btn {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.my_btn1, .my_btn2 {
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
}

.my_btn1:hover, .my_btn2:hover {
  background: rgba(0, 0, 0, 0.7);
}

.my_btn1 .icon, .my_btn2 .icon {
  width: 20px;
  height: 20px;
  fill: white;
}

.main-visual-control-btns {
  display: flex;
  align-items: center;
  gap: 15px;
}

.main-visual-conuter {
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.slide-prev-btn, .slide-next-btn {
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: background 0.3s;
}

.slide-prev-btn:hover, .slide-next-btn:hover {
  background: rgba(0, 0, 0, 0.7);
}

.slide-prev-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 8px;
  height: 8px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
}

.slide-next-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 8px;
  height: 8px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
}

.line {
  width: 30px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}

/* 公告滚动样式 - 移动端优化 */
.inotice_list_con {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px 50px;
  z-index: 10;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .inotice_list_con {
    padding: 10px 20px;
  }
  
  .tip {
    font-size: 12px !important;
  }
  
  .list1 li a {
    font-size: 12px !important;
  }
}

@media (max-width: 480px) {
  .inotice_list_con {
    padding: 8px 15px;
  }
  
  .tip {
    font-size: 10px !important;
  }
  
  .list1 li a {
    font-size: 10px !important;
  }
  
  .arrs {
    width: 15px !important;
    height: 15px !important;
  }
}

.tip {
  color: #ff6b35;
  font-weight: bold;
  margin-right: 10px;
}

.jg {
  color: #ccc;
  margin-right: 20px;
}

.list1_box {
  flex: 1;
  overflow: hidden;
  height: 40px; /* 固定高度，只显示一条公告 */
  display: flex;
  align-items: center;
}

.list1 {
  display: flex;
  flex-direction: column; /* 改为垂直布局 */
  transition: transform 0.5s ease;
  height: 100%;
  width: 100%;
}

.list1 li {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.list1 li a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  line-height: 1.2; /* 调整行高 */
}

.list1 li a h4 {
  margin: 0;
  line-height: 1.2; /* 确保标题行高一致 */
}

.list1 li a span {
  line-height: 1.2; /* 确保日期行高一致 */
}

.list1 li a:hover {
  color: #ff6b35;
}

.arrs {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.arrs:hover {
  background: rgba(255, 255, 255, 0.6);
}

.arr_prev {
  right: 60px;
}

.arr_next {
  right: 20px;
}

.arr_prev::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 6px;
  height: 6px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
}

.arr_next::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 6px;
  height: 6px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
}

/* 修复轮播图显示问题 */
.visual-img {
  background-color: #f5f5f5; /* 浅灰色背景 */
}

.main-visual-slider {
  background-color: #f5f5f5 !important; /* 确保容器有背景色 */
}

.visual-img img {
  display: block;
}
</style>
