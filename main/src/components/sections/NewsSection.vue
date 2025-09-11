<template>
  <section class="section home1">
    <div class="wp">
      <div class="content flex">
        <!-- 新闻中心 -->
        <div class="box box1 miso_up">
          <div class="tit1 tit1_line">
            <big>新闻中心</big>
            <a href="#" class="more1">更多+</a>
          </div>
          <section class="list2_box swiper-container">
            <ul class="list2 list00 swiper-wrapper">
              <li class="swiper-slide" v-for="(news, index) in newsList" :key="index">
                <a :href="news.link" target="_blank" class="a">
                  <h6>{{ news.date }}</h6>
                  <h4 class="l1 h4s1">{{ news.title }}</h4>
                  <div class="img slow img_zd">
                    <div class="img_hezi" :style="{ backgroundImage: `url(${news.image})` }"></div>
                    <img :src="news.image" class="none" />
                    <div class="zoomBtn">
                      <div>
                        <svg class="icon_svg mwl_arrow default" aria-hidden="true">
                          <svg viewBox="0 0 27 19" id="icon_mwl_arrow">
                            <path fill-rule="evenodd" d="M26.803,3.291 C26.802,3.293 26.803,3.296 26.803,3.298 L24.997,9.807 C24.954,10.011 24.836,10.170 24.678,10.264 C24.519,10.359 24.316,10.387 24.115,10.324 C23.714,10.200 23.457,9.766 23.542,9.360 L24.825,4.733 L1.373,18.726 C1.029,18.931 0.569,18.792 0.342,18.415 C0.116,18.038 0.211,17.568 0.555,17.363 L24.022,3.362 L19.287,2.268 C18.886,2.143 18.628,1.710 18.713,1.303 C18.799,0.893 19.195,0.662 19.594,0.784 L26.218,2.314 C26.219,2.314 26.220,2.316 26.222,2.316 C26.411,2.371 26.585,2.500 26.700,2.690 C26.815,2.882 26.845,3.098 26.803,3.291 Z"></path>
                          </svg>
                        </svg>
                        <svg class="icon_svg mwl_arrow hover" aria-hidden="true">
                          <svg viewBox="0 0 27 19" id="icon_mwl_arrow">
                            <path fill-rule="evenodd" d="M26.803,3.291 C26.802,3.293 26.803,3.296 26.803,3.298 L24.997,9.807 C24.954,10.011 24.836,10.170 24.678,10.264 C24.519,10.359 24.316,10.387 24.115,10.324 C23.714,10.200 23.457,9.766 23.542,9.360 L24.825,4.733 L1.373,18.726 C1.029,18.931 0.569,18.792 0.342,18.415 C0.116,18.038 0.211,17.568 0.555,17.363 L24.022,3.362 L19.287,2.268 C18.886,2.143 18.628,1.710 18.713,1.303 C18.799,0.893 19.195,0.662 19.594,0.784 L26.218,2.314 C26.219,2.314 26.220,2.316 26.222,2.316 C26.411,2.371 26.585,2.500 26.700,2.690 C26.815,2.882 26.845,3.098 26.803,3.291 Z"></path>
                          </svg>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p class="l2 ps2">{{ news.summary }}</p>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <!-- 公司要闻 -->
        <div class="box box2 miso_up">
          <div class="tit1 tit1_line">
            <big>公司要闻</big>
            <a href="#" class="more1">更多+</a>
          </div>
          <ul class="list3">
            <li v-for="(news, index) in companyNews" :key="index">
              <a :href="news.link" target="_blank" class="a">
                <h6>{{ news.date }}</h6>
                <h4 class="l3 h4s3">{{ news.title }}</h4>
              </a>
            </li>
          </ul>
        </div>

        <!-- 国企资讯 -->
        <div class="box box3 miso_up">
          <div class="tit1 tit1_line">
            <big>国企资讯</big>
            <a href="#" class="more1">更多+</a>
          </div>
          <ul class="list4 list00">
            <li v-for="(news, index) in stateNews" :key="index">
              <a :href="news.link" target="_blank" class="a">
                <div class="img slow img_zd">
                  <div class="img_hezi" :style="{ backgroundImage: `url(${news.image})` }"></div>
                  <img :src="news.image" class="none" />
                  <div class="zoomBtn">
                    <div>
                      <svg class="icon_svg mwl_arrow default" aria-hidden="true">
                        <svg viewBox="0 0 27 19" id="icon_mwl_arrow">
                          <path fill-rule="evenodd" d="M26.803,3.291 C26.802,3.293 26.803,3.296 26.803,3.298 L24.997,9.807 C24.954,10.011 24.836,10.170 24.678,10.264 C24.519,10.359 24.316,10.387 24.115,10.324 C23.714,10.200 23.457,9.766 23.542,9.360 L24.825,4.733 L1.373,18.726 C1.029,18.931 0.569,18.792 0.342,18.415 C0.116,18.038 0.211,17.568 0.555,17.363 L24.022,3.362 L19.287,2.268 C18.886,2.143 18.628,1.710 18.713,1.303 C18.799,0.893 19.195,0.662 19.594,0.784 L26.218,2.314 C26.219,2.314 26.220,2.316 26.222,2.316 C26.411,2.371 26.585,2.500 26.700,2.690 C26.815,2.882 26.845,3.098 26.803,3.291 Z"></path>
                        </svg>
                      </svg>
                      <svg class="icon_svg mwl_arrow hover" aria-hidden="true">
                        <svg viewBox="0 0 27 19" id="icon_mwl_arrow">
                          <path fill-rule="evenodd" d="M26.803,3.291 C26.802,3.293 26.803,3.296 26.803,3.298 L24.997,9.807 C24.954,10.011 24.836,10.170 24.678,10.264 C24.519,10.359 24.316,10.387 24.115,10.324 C23.714,10.200 23.457,9.766 23.542,9.360 L24.825,4.733 L1.373,18.726 C1.029,18.931 0.569,18.792 0.342,18.415 C0.116,18.038 0.211,17.568 0.555,17.363 L24.022,3.362 L19.287,2.268 C18.886,2.143 18.628,1.710 18.713,1.303 C18.799,0.893 19.195,0.662 19.594,0.784 L26.218,2.314 C26.219,2.314 26.220,2.316 26.222,2.316 C26.411,2.371 26.585,2.500 26.700,2.690 C26.815,2.882 26.845,3.098 26.803,3.291 Z"></path>
                        </svg>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="con">
                  <h6>{{ news.date }}</h6>
                  <h4 class="l1 h4s1">{{ news.title }}</h4>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsSection',
  data() {
    return {
      newsList: [
        {
          title: '山西投召开传达贯彻省属企业改革发展工作座谈会精神专题会暨推动集团改革发展转型研讨会',
          date: '2025-09-08',
          image: '/src/assets/images/news1.jpg',
          summary: '9月6日，山西投召开传达贯彻省属企业改革发展工作座谈会精神专题会暨推动集团改革发展转型研讨会。集团党委副书记、副董事长、总经理杜锐主持会议并讲话，党委委员结合分管领域作交流发言。会议要求，各单位、各部门要完善中国特色现代企业制度，坚持"两个一以贯之"，加强党对国有企业的领导，完善权责明晰的公司治理机制，强化风险管控。要切实增强使命感、责任感、紧迫感和危机感，牢记"国有"定位、"企业"属性，对标...',
          link: '#'
        },
        {
          title: '山西投与万家寨水务控股集团举行工作会谈',
          date: '2025-09-01',
          image: '/src/assets/images/news2.jpg',
          summary: '8月29日，山西投党委书记、董事长倪华光带队拜访万家寨水务控股集团党委书记、董事长兰康杰，就深化水利领域合作、推进重点项目落地进行深入交流。万家寨水务控股集团党委副书记、副董事长、总经理郭文，山西投党委副书记、副董事长、总经理杜锐参加会谈。倪华光对万家寨水控集团一直以来给予的支持表示感谢。他指出，近年来，山西投实施投资设双轮驱动，形成了集科研、咨询、勘察、设计、投资、设、运营为一体的全...',
          link: '#'
        },
        {
          title: '山西投举办品牌设工作培训班',
          date: '2025-08-28',
          image: '/src/assets/images/news3.jpg',
          summary: '8月26日，山西投举办品牌设工作培训班。各二级单位分管品牌设工作的领导、部门负责人及骨干人员共300余人参加。培训特邀中国品牌设促进会品牌专家赵宝柱授课，重点围绕"品格向善、品质至真、品行尽美"理念，从国家战略、国企要求和企业实际三个维度系统解读品牌发展新形势，深入剖析品牌战略管理、过程控制、品业融合、形象识别与精准传播五大价值提升路径。培训采用"系统知识+案例解析+工作指引"模式，通过理论讲...',
          link: '#'
        }
      ],
      companyNews: [
        {
          title: '山西投七集团太原市晋源区武家庄城中村改造项目：科技赋能降本增效 管理聚力提质履约',
          date: '2025-09-09',
          link: '#'
        },
        {
          title: '山西投三集团在第十届工程设行业互联网大会上斩获两项数字化成果',
          date: '2025-09-08',
          link: '#'
        },
        {
          title: '山西投八集团临汾市蒲县蒲伊西街棚户区改造项目：匠心筑安居 精工焕城新',
          date: '2025-09-08',
          link: '#'
        }
      ],
      stateNews: [
        {
          title: '省属企业分别召开会议传达学习贯彻省委十二届十次全会精神',
          date: '2025-09-01',
          image: '/src/assets/images/state-news1.jpg',
          link: '#'
        },
        {
          title: '习近平同志《论坚持全面深化改革》第一卷、第二卷出版发行',
          date: '2025-08-18',
          image: '/src/assets/images/state-news2.jpg',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '/src/assets/css/reset.css';
@import '/src/assets/css/style.css';

/* Prevent image distortion and ensure responsive cover */
.img .img_hezi{ background-size: cover; background-position: center center; background-repeat: no-repeat; width: 100%; display: block; }

/* Make first screen section fill viewport height */
.section.home1{ min-height: 100vh; }
</style>
