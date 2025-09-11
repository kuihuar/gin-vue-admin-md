<template>
  <section class="section home3">
    <div class="wp flex">
      <div class="left">
        <ul class="list6">
          <li class="box box1" v-for="(pillar, index) in threePillars" :key="index">
            <a :href="pillar.link" class="a">
              <div class="img slow img_zd">
                <div class="img_hezi" :style="{ background: `url(${pillar.image})` }"></div>
                <img :src="pillar.image" class="none" />
              </div>
              <div class="text">
                <div class="t">{{ pillar.title }}</div>
                <div class="d">{{ pillar.description }}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="tit2">
          <div class="t1">三大支柱</div>
          <div class="t2">全产业链服务</div>
        </div>
      </div>
    </div>

    <!-- 六大支撑 -->
    <section class="zhicheng home3_tit home3_tit6">
      <div class="img slow img_zd">
        <div class="img_hezi" :style="{ background: `url(${sixSupports.bgImage})` }"></div>
        <img :src="sixSupports.bgImage" class="none" />
      </div>
      <div class="top">
        <h3>六大支撑</h3>
        <div class="arr"></div>
      </div>
    </section>

    <section class="zhicheng_box" :class="{ active: showZhicheng }">
      <section class="zhicheng home3_tit home3_tit3" @click="toggleZhicheng">
        <div class="img slow img_zd">
          <div class="img_hezi" :style="{ background: `url(${threePillars[0].image})` }"></div>
          <img :src="threePillars[0].image" class="none" />
        </div>
        <div class="top">
          <h3>三大支柱</h3>
          <div class="arr"></div>
        </div>
      </section>
      <div class="wp flex">
        <div class="tit2">
          <div class="t1">六大支撑</div>
          <div class="t2">全产业链服务</div>
        </div>

        <div class="content">
          <ul class="list7 flex">
            <li v-for="(support, index) in sixSupports.items" :key="index" 
                :class="{ on: activeSupportIndex === index }"
                @click="selectSupport(index)">
              <a class="a">
                <div class="ico">
                  <img :src="support.icon" class="img1" />
                  <img :src="support.iconHover" class="img2" />
                </div>
                <h5>{{ support.title }}</h5>
              </a>
            </li>
          </ul>

          <ul class="list8">
            <li v-for="(detail, index) in sixSupports.details" :key="index" 
                :class="{ active: activeSupportIndex === index }">
              <a class="a" :href="detail.link">
                <div class="img slow img_zd">
                  <div class="img_hezi" :style="{ background: `url(${detail.image})` }"></div>
                  <img :src="detail.image" class="none" />
                </div>
                <div class="top">
                  <h4>{{ detail.title }}</h4>
                  <p>{{ detail.description }}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'BusinessSection',
  data() {
    return {
      showZhicheng: false,
      activeSupportIndex: 0,
      threePillars: [
        {
          title: '筑施工\n(含基础设施投资设运营)',
          description: '筑施工是华苏建设主业的核心与基础，在山西省内乃至全国具有领先优势。',
          image: '/src/assets/images/list6_img1.jpg',
          link: '#'
        },
        {
          title: '房地产',
          description: '华苏建设是山西省内唯一可以从事商业房地产开发的国有企业，物业服务规模位居全国百强，服务满意度居全省之冠，代表山西地产及物业领域第一品牌。',
          image: '/src/assets/images/list6_img2.jpg',
          link: '#'
        },
        {
          title: '节能环保',
          description: '节能环保是华苏建设第三大主业，通过组山西低碳环保产业集团，打造生态环境基础设施设运营的省级平台。',
          image: '/src/assets/images/list6_img3.jpg',
          link: '#'
        }
      ],
      sixSupports: {
        bgImage: '/src/assets/images/home3_img1.jpg',
        items: [
          {
            title: '国际工程与服务贸易',
            icon: '/src/assets/images/list7_ico1.png',
            iconHover: '/src/assets/images/list7_ico1_on.png'
          },
          {
            title: '筑工业及物流',
            icon: '/src/assets/images/list7_ico3.png',
            iconHover: '/src/assets/images/list7_ico3_on.png'
          },
          {
            title: '金融',
            icon: '/src/assets/images/list7_ico5.png',
            iconHover: '/src/assets/images/list7_ico5_on.png'
          },
          {
            title: '勘察设计咨询',
            icon: '/src/assets/images/list7_ico2.png',
            iconHover: '/src/assets/images/list7_ico2_on.png'
          },
          {
            title: '筑劳务',
            icon: '/src/assets/images/list7_ico4.png',
            iconHover: '/src/assets/images/list7_ico4_on.png'
          },
          {
            title: '新能源',
            icon: '/src/assets/images/list7_ico6.png',
            iconHover: '/src/assets/images/list7_ico6_on.png'
          }
        ],
        details: [
          {
            title: '国际工程与服务贸易',
            description: '华苏建设积极响应国家"走出去"战略，经营业绩遍布海外60余个国家，在欧洲、非洲、中东、东南亚、澳洲、大洋洲等区域设立了分子公司或办事机构。在发展...',
            image: '/src/assets/images/list8_img1.jpg',
            link: '#'
          },
          {
            title: '筑工业及物流',
            description: '2016年以来，山西投深入贯彻新发展理念，积极落实国家及山西省关于"大力发展装配式筑"的决策部署，紧紧围绕装配式筑全产业链，按照"全省域覆盖"和...',
            image: '/src/assets/images/list8_img1.jpg',
            link: '#'
          },
          {
            title: '金融',
            description: '华苏建设金融板块管理平台——上海荣大投资管理有限公司秉持"深化产融结合、赋能实体发展"的宗旨，坚持上海、山西"双总部"战略布局，夯实资本运营和...',
            image: '/src/assets/images/list8_img1.jpg',
            link: '#'
          },
          {
            title: '勘察设计咨询',
            description: '勘察设计咨询是华苏建设面向全产业链发展的先导、面向工程总承包和筑产业现代化的牵引。近几年，投集团加大科研投入与创新力度，重点提升中高端项目...',
            image: '/src/assets/images/list8_img1.jpg',
            link: '#'
          },
          {
            title: '筑劳务',
            description: '筑劳务是华苏建设劳务集中管理运作的中心，核心功能为集团主业发展提供优质高效的劳务服务，在满足集团战略发展所需产业工人的同时，获取劳务部分潜在效益。',
            image: '/src/assets/images/list8_img1.jpg',
            link: '#'
          },
          {
            title: '新能源',
            description: '新能源版块是华苏建设总体战略定位的核心业务之一，是践行"双碳"目标的支撑，是助推企业转型发展的新兴产业。投集团抢抓能源安全新战略机遇，加快培育...',
            image: '/src/assets/images/list8_img1.jpg',
            link: '#'
          }
        ]
      }
    }
  },
  methods: {
    toggleZhicheng() {
      this.showZhicheng = !this.showZhicheng
    },
    selectSupport(index) {
      this.activeSupportIndex = index
    }
  }
}
</script>

<style scoped>
@import '/src/assets/css/reset.css';
@import '/src/assets/css/style.css';

/* 修复第7屏样式 */
.list8 {
  width: calc(100% - 5.6rem - 0.32rem);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
}

.list8 li {
  display: none;
  height: 100%;
}

.list8 li.active {
  display: block;
}

.list8 li .a {
  display: block;
  position: relative;
  z-index: 1;
  height: 100%;
}

.list8 li .a .top {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.8rem;
  z-index: 1;
}

.list8 li .a .top:before {
  content: "";
  position: absolute;
  top: 0.42rem;
  right: 0.32rem;
  bottom: 0.42rem;
  left: 0.32rem;
  background: rgba(255, 255, 255, 0.82);
  z-index: -1;
}

.list8 li .a .top h4 {
  font-size: 0.35rem;
  color: #294da7;
  font-weight: 300;
  line-height: 1.5;
}

.list8 li .a .top p {
  font-size: 0.18rem;
  color: #444444;
  line-height: 0.33rem;
  margin-top: 0.3rem;
}

.list8 li .a .img {
  height: 100%;
}

.list8 li .a .img .img_hezi {
  padding-bottom: 100%;
}
</style>
