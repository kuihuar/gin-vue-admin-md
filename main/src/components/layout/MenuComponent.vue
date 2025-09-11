<template>
  <div class="fullscreen-menu">
    <div class="menu_box">
      <div class="nav_logo">
          <img src="@/assets/images/xiala_left.jpg" alt="华苏建设集团中文网站"> 
        </div> 
      <div class="nav-con-menu">
        <!-- <div class="nav_logo">
          <img src="@/assets/images/xiala_left.jpg" alt="华苏建设集团中文网站"> 
        </div>  -->
        <div class="nav_close" @click="closeMenu"> 
          <span class="common-close"> <i>CLOSE</i> </span> 
        </div> 
        <div class="inav_con"> 
          <div class="nav_company"> 
            <div class="company_wrap"> 
              <a href="#" title="">华苏建设网站站群</a>
              <em>|</em>
              <a href="#" title="">联系我们</a>
            </div> 
          </div> 
        
          <div class="inav_wrapper"> 
            <nav class="page_nav inav" id="menu" hov="no"> 
              <ul class="fix"> 
                <li class="li li1" data-li="li1" v-for="item in menuItems" :key="item.id" :class="`li li${item.id}`">
                  <a :href="item.href" :title="item.title">{{ item.title }}</a>
                  <ul v-if="item.children">
                    <li v-for="child in item.children" :key="child.id">
                      <a :href="child.href" :title="child.title">{{ child.title }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav> 
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          title: '关于华苏',
          href: '#',
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
          children: [
            { id: 41, title: '三大支柱', href: '#' },
            { id: 42, title: '六大支撑', href: '#' }
          ]
        },
        {
          id: 5,
          title: '科技创新',
          href: '#',
          children: [
            { id: 51, title: '科技成果', href: '#' },
            { id: 52, title: '创新体系', href: '#' },
            { id: 53, title: '成果推广', href: '#' },
            { id: 54, title: '科技动态', href: '#' }
          ]
        },
        {
          id: 6,
          title: '华苏文化',
          href: '#',
          children: [
            { id: 61, title: '华苏文化', href: '#' },
            { id: 62, title: '发展历程', href: '#' }
          ]
        },
        {
          id: 7,
          title: '专题专栏',
          href: '#',
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
    closeMenu() {
      this.$emit('close')
    },
    handleOverlayClick(event) {
      // 点击遮罩层关闭菜单，但不包括菜单内容区域
      if (event.target === event.currentTarget) {
        this.closeMenu()
      }
    }
  },
  mounted() {
    // 监听ESC键关闭菜单
    this.handleEscape = (event) => {
      if (event.key === 'Escape' && this.isVisible) {
        this.closeMenu()
      }
    }
    document.addEventListener('keydown', this.handleEscape)
  },
  beforeUnmount() {
    // Vue 3 中使用 beforeUnmount 替代 beforeDestroy
    if (this.handleEscape) {
      document.removeEventListener('keydown', this.handleEscape)
    }
  }
}
</script>

<style scoped>
.fullscreen-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; 

  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu_box {
  width: 99.9%; 
  height: 99.9%; 
  /* background: #fff; */
  border-radius: 3px;
  position: relative;
  overflow: auto;
  transform: none !important;
}
.page_nav .li ul a {
  display: block;
  padding: 8px 20px;
  color: #282323;
  /* text-decoration: none; */
  font-size: 14px;
  transition: all 0.3s;
}
.nav-con-menu {
  padding: 20px;
  position: absolute;
  top: 5%;
  left: 25%;
  right: 5%;
  bottom: 0;
}

/* .nav_logo { */
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* padding-bottom: 20px; */
  /* border-bottom: 1px solid #eee; */
/* } */

.nav_logo {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    /* width: 25%; */
    /* background: url(../images/xiala_left.jpg) no-repeat center; */
    /* background-size: cover; */
    /* text-align: center; */
    /* padding-top: 60px; */
    /* user-select: none; */
}
/* .nav_logo img {
  height: 40px;
} */

.nav_lan .lan_wrap {
  display: flex;
  gap: 15px;
}

.nav_lan a {
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.3s;
}

/* .nav_lan a:hover {
  background: #007bff;
  color: #fff;
  border-color: #007bff;
} */

.nav_close {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

.common-close {
  font-size: 14px;
  color: #666;
  padding: 5px 10px;
  /* border: 1px solid #ddd; */
  border-radius: 4px;
  transition: all 0.3s;
}

/* .common-close:hover {
  background: #f5f5f5;
  color: #333;
} */

.nav_company {
  padding: 20px 0;
  text-align: center;
}

/* .company_wrap a {
  color: #007bff;
  text-decoration: none;
  margin: 0 10px;
} */

.company_wrap em {
  color: #ddd;
  margin: 0 5px;
}

.inav_wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .page_nav {
  width: 100%;
  display: block;
} */

.page_nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.page_nav .li {
  position: relative;
}

.page_nav .li > a {
  display: block;
  padding: 15px 20px;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.3s;
}


.page_nav .li ul {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  /* background: #fff; */
  /* border: 1px solid #ddd; */
  /* border-radius: 6px; */
  /* box-shadow: 0 4px 12px rgba(0,0,0,0.1); */
  opacity: 0;
  visibility: hidden;
  /* visibility: visible; */
  transition: all 0.3s;
  min-width: 180px;
  padding: 10px 0;
  /* z-index: 1000; */
}

.page_nav .li:hover ul {
  opacity: 1;
  visibility: visible;
}

.page_nav .li ul li {
  list-style: none;
}

.page_nav .li ul a {
  display: block;
  padding: 8px 20px;
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s;
}

.page_nav .li ul a:hover {
  background: #f8f9fa;
  color: #007bff;
}
/* 响应式设计 */
@media (max-width: 768px) {
  .menu_box {
    width: 95%;
    height: 95%;
  }
  
  .page_nav ul {
    flex-direction: column;
    gap: 15px;
  }
  
  .page_nav .li ul {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    border: none;
    box-shadow: none;
    background: #f8f9fa;
    margin-top: 10px;
  }
}

.nav-con-menu .inav .li>a {
    color: #133b6f;
    font-size: .18rem;
    display: inline-block;
    margin-bottom: 30px;
}



</style>