<template>
  <div class="homepage-container">
    <!-- 顶部导航栏 -->
    <header class="header" :class="{ 'scrolled': isScrolled }">
      <div class="nav_box white">
        <div class="nav_wrap fix">
          <h1 class="l logo" id="logo">
            <a href="#">
            <!-- <img src="images/logo_w.png" alt="山西建投集团中文网站"> -->
            </a>
          </h1>
          <div class="nav fix r">
            <ul class="fix l">
              <li class="nav_li">
                <a href="#about" @click="scrollToSection('about')" title="关于建投">关于建投</a>
                <div class="dropdown">
                  <div class="mwrap fix">
                    <div class="left">
                      <ul>
                        <li><a href="#about" @click="scrollToSection('about')" title="集团简介">集团简介</a></li>
                        <li><a href="#about" @click="scrollToSection('about')" title="组织架构">组织架构</a></li>
                        <li><a href="#about" @click="scrollToSection('about')" title="集团荣誉">集团荣誉</a></li>
                        <li><a href="#about" @click="scrollToSection('about')" title="联系建投">联系建投</a></li>
                      </ul>
                      <div class="con">
                        <dl>
                          <dt>我想...</dt>
                          <dd>
                            <a href="#about" @click="scrollToSection('about')">了解更多</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="right fix">
                      <div class="infor">
                        <div class="box">
                          <div class="tit">
                            <p>奉献精品 开创未来</p>
                          </div>
                          <div class="con">
                            <p>山西建设投资集团有限公司（以下简称"山西建投"）系山西省规模最大的综合性国有投资建设集团。其前身为中央人民政府建工部太原工程局、国家建工部华北工程管理局、国家建工部和国家建委第八工程局，组建于1953年，1970年下放山西，改称山西省建筑工程管理局。</p>
                            <a href="#about" @click="scrollToSection('about')">查看更多</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav_li">
                <a href="#news" @click="scrollToSection('news')" title="建投动态">建投动态</a>
                <div class="dropdown">
                  <div class="mwrap fix">
                    <div class="left">
                      <ul>
                        <li><a href="#news" @click="scrollToSection('news')" title="新闻中心">新闻中心</a></li>
                        <li><a href="#news" @click="scrollToSection('news')" title="国企资讯">国企资讯</a></li>
                        <li><a href="#news" @click="scrollToSection('news')" title="公司要闻">公司要闻</a></li>
                      </ul>
                      <div class="con">
                        <dl>
                          <dt>我想...</dt>
                          <dd>
                            <a href="#news" @click="scrollToSection('news')">了解更多</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="right fix">
                      <div class="infor">
                        <div class="box">
                          <div class="tit">
                            <p>立足山西 布局全国 开拓海外</p>
                          </div>
                          <div class="con">
                            <p>山西建投现辖56个全资、控股和参股子公司，其中上市公司2家；职工总数3.5万余人，其中各类经营管理和专业技术人才2.7万余人；拥有7个建筑、3个市政公用、1个石油化工，共11项工程施工总承包特级资质。</p>
                            <a href="#news" @click="scrollToSection('news')">查看更多</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav_li">
                <a href="#party" @click="scrollToSection('party')" title="党建工作">党建工作</a>
                <div class="dropdown">
                  <div class="mwrap fix">
                    <div class="left">
                      <ul>
                        <li><a href="#party" @click="scrollToSection('party')" title="党建工作">党建工作</a></li>
                        <li><a href="#party" @click="scrollToSection('party')" title="纪检监察">纪检监察</a></li>
                        <li><a href="#party" @click="scrollToSection('party')" title="工会工作">工会工作</a></li>
                        <li><a href="#party" @click="scrollToSection('party')" title="团青工作">团青工作</a></li>
                      </ul>
                      <div class="con">
                        <dl>
                          <dt>我想...</dt>
                          <dd>
                            <a href="#party" @click="scrollToSection('party')">了解更多</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="right fix">
                      <div class="infor">
                        <div class="box">
                          <div class="tit">
                            <p>立足山西 布局全国 开拓海外</p>
                          </div>
                          <div class="con">
                            <p>山西建投现辖56个全资、控股和参股子公司，其中上市公司2家；职工总数3.5万余人，其中各类经营管理和专业技术人才2.7万余人；拥有7个建筑、3个市政公用、1个石油化工，共11项工程施工总承包特级资质。</p>
                            <a href="#party" @click="scrollToSection('party')">查看更多</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav_li">
                <a href="#service" @click="scrollToSection('service')" title="全产业链服务">全产业链服务</a>
                <div class="dropdown">
                  <div class="mwrap fix">
                    <div class="left">
                      <ul>
                        <li><a href="#service" @click="scrollToSection('service')" title="三大支柱">三大支柱</a></li>
                        <li><a href="#service" @click="scrollToSection('service')" title="六大支撑">六大支撑</a></li>
                      </ul>
                      <div class="con">
                        <dl>
                          <dt>我想...</dt>
                          <dd>
                            <a href="#service" @click="scrollToSection('service')">了解更多</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="right fix">
                      <div class="infor">
                        <div class="box">
                          <div class="tit">
                            <p>实施名牌战略 营造时代精品</p>
                          </div>
                          <div class="con">
                            <p>近年来，在省委省政府坚强领导和大力支持下，山西建投抢抓我省国资国企改革历史机遇，大刀阔斧推进改革改制与资产重组，解决了多年久拖不决的诸多难题，资产负债率大幅下降，资本状况显著改善。</p>
                            <a href="#service" @click="scrollToSection('service')">查看更多</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav_li">
                <a href="#tech" @click="scrollToSection('tech')" title="科技创新">科技创新</a>
                <div class="dropdown">
                  <div class="mwrap fix">
                    <div class="left">
                      <ul>
                        <li><a href="#tech" @click="scrollToSection('tech')" title="科技成果">科技成果</a></li>
                        <li><a href="#tech" @click="scrollToSection('tech')" title="创新体系">创新体系</a></li>
                        <li><a href="#tech" @click="scrollToSection('tech')" title="成果推广">成果推广</a></li>
                        <li><a href="#tech" @click="scrollToSection('tech')" title="科技动态">科技动态</a></li>
                      </ul>
                      <div class="con">
                        <dl>
                          <dt>我想...</dt>
                          <dd>
                            <a href="#tech" @click="scrollToSection('tech')">了解更多</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="right fix">
                      <div class="infor">
                        <div class="box">
                          <div class="tit">
                            <p>山西建投连年入选"中国企业500强"</p>
                          </div>
                          <div class="con">
                            <p>展望未来，山西建投将在省委省政府的正确领导下，进一步深化体制机制改革，持续创新商业模式，完善现代企业治理体系，深入推进内涵集约式发展，促进经营规模和经济效益持续稳健增长。</p>
                            <a href="#tech" @click="scrollToSection('tech')">查看更多</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav_li">
                <a href="#culture" @click="scrollToSection('culture')" title="建投文化">建投文化</a>
                <div class="dropdown">
                  <div class="mwrap fix">
                    <div class="left">
                      <ul>
                        <li><a href="#culture" @click="scrollToSection('culture')" title="建投文化">建投文化</a></li>
                        <li><a href="#culture" @click="scrollToSection('culture')" title="发展历程">发展历程</a></li>
                      </ul>
                      <div class="con">
                        <dl>
                          <dt>我想...</dt>
                          <dd>
                            <a href="#culture" @click="scrollToSection('culture')">了解更多</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="right fix">
                      <div class="infor">
                        <div class="box">
                          <div class="tit">
                            <p>促进经营规模和经济效益持续稳健增长</p>
                          </div>
                          <div class="con">
                            <p>打造集投资、建设、运营为一体的"全产业链"建筑业龙头企业，向国内领先、国际知名、具有较强竞争力的"大建设"集团迈进，全力冲刺"世界500强"。</p>
                            <a href="#culture" @click="scrollToSection('culture')">查看更多</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav_li">
                <a href="#special" @click="scrollToSection('special')" title="专题专栏">专题专栏</a>
                <div class="dropdown">
                  <div class="mwrap fix">
                    <div class="left">
                      <ul>
                        <li><a href="#special" @click="scrollToSection('special')" title="学习宣传">学习宣传</a></li>
                        <li><a href="#special" @click="scrollToSection('special')" title="市场开拓">市场开拓</a></li>
                        <li><a href="#special" @click="scrollToSection('special')" title="质量安全">质量安全</a></li>
                      </ul>
                      <div class="con">
                        <dl>
                          <dt>我想...</dt>
                          <dd>
                            <a href="#special" @click="scrollToSection('special')">了解更多</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="right fix">
                      <div class="infor">
                        <div class="box">
                          <div class="tit">
                            <p>进一步深化体制机制改革</p>
                          </div>
                          <div class="con">
                            <p>近年来，在省委省政府坚强领导和大力支持下，山西建投抢抓我省国资国企改革历史机遇，大刀阔斧推进改革改制与资产重组，解决了多年久拖不决的诸多难题，资产负债率大幅下降，资本状况显著改善。</p>
                            <a href="#special" @click="scrollToSection('special')">查看更多</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav_li">
                <a href="#info" @click="scrollToSection('info')" title="信息公开">信息公开</a>
                <div class="dropdown">
                  <div class="mwrap fix">
                    <div class="left">
                      <ul>
                        <li><a href="#info" @click="scrollToSection('info')" title="通知公告">通知公告</a></li>
                        <li><a href="#info" @click="scrollToSection('info')" title="重大事项">重大事项</a></li>
                        <li><a href="#info" @click="scrollToSection('info')" title="人才招聘">人才招聘</a></li>
                      </ul>
                      <div class="con">
                        <dl>
                          <dt>我想...</dt>
                          <dd>
                            <a href="#info" @click="scrollToSection('info')">了解更多</a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="right fix">
                      <div class="infor">
                        <div class="box">
                          <div class="tit">
                            <p>奉献精品 开创未来</p>
                          </div>
                          <div class="con">
                            <p>山西建设投资集团有限公司（以下简称"山西建投"）系山西省规模最大的综合性国有投资建设集团。其前身为中央人民政府建工部太原工程局、国家建工部华北工程管理局、国家建工部和国家建委第八工程局，组建于1953年，1970年下放山西，改称山西省建筑工程管理局。</p>
                            <a href="#info" @click="scrollToSection('info')">查看更多</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="language-switch">
            <span>山西建投集团中文网站</span>
            <span @click="switchLanguage('zh')" :class="{ active: currentLang === 'zh' }">中文</span> | 
            <span @click="switchLanguage('en')" :class="{ active: currentLang === 'en' }">EN</span> | 
            <span @click="switchLanguage('fr')" :class="{ active: currentLang === 'fr' }">Français</span>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <!-- 建投优势 -->
      <section class="advantages-section" id="advantages">
        <div class="container">
          <h3>建投优势</h3>
          <div class="advantages-grid">
            <div class="advantage-item" v-for="advantage in advantages" :key="advantage.title">
              <h4>{{ advantage.title }}</h4>
              <p>{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 改革成就时间轴 -->
      <section class="reform-section" id="reform">
        <div class="container">
          <h3>改革成就</h3>
          <div class="reform-timeline">
            <div class="timeline-item" v-for="(item, index) in reformTimeline" :key="index">
              <div class="timeline-date">{{ item.date }}</div>
              <div class="timeline-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 建投愿景使命 -->
      <section class="vision-mission" id="vision">
        <div class="container">
          <div class="vision-mission-grid">
            <div class="vision-item">
              <h4>建投愿景</h4>
              <h5>实力建筑 恒久传承</h5>
              <p>打造极具竞争优势，集投资、建设、运营为一体的"全产业链"建筑业龙头企业，蹚出山西建筑业转型发展新路，当好山西建筑产业现代化领头羊。</p>
            </div>
            <div class="mission-item">
              <h4>建投使命</h4>
              <h5>奉献精品 开创未来</h5>
              <p>实施品牌战略，营造时代精品。持续转型升级，持续创新创优，多为社会提供优质产品与服务，推动高质量发展，助力高品质生活。</p>
            </div>
            <div class="strategy-item">
              <h4>建投战略</h4>
              <p>加快建设世界一流企业，向"世界500强"迈进，向国内领先、国际知名、具有较强竞争力的"大建投"集团总目标迈进。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 建投视界 -->
      <section class="projects-showcase" id="projects">
        <div class="container">
          <h3>建投视界</h3>
          <div class="projects-grid">
            <div class="project-item" v-for="project in projects" :key="project.name">
              <div class="project-image">
                <div class="project-placeholder">{{ project.name.charAt(0) }}</div>
              </div>
              <h4>{{ project.name }}</h4>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 底部信息 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="contact-info">
            <h4>山西建设投资集团有限公司</h4>
            <p>奉献精品 开创未来</p>
            <h4>山西建投网站站群</h4>
            <div class="quick-links">
              <h4>我想......</h4>
              <ul>
                <li><a href="#news">查找相关服务</a></li>
                <li><a href="#service">成为合作伙伴</a></li>
                <li><a href="#tech">了解行业热点</a></li>
              </ul>
            </div>
            <div class="quick-links">
              <h4>快速通道</h4>
              <ul>
                <li><a href="#news">新闻中心</a></li>
                <li><a href="#special">学习宣传</a></li>
                <li><a href="#special">质量安全</a></li>
                <li><a href="#special">市场开拓</a></li>
              </ul>
            </div>
            <div class="contact-info">
              <h4>联系我们</h4>
              <p>地址：山西示范区新化路8号</p>
              <p>邮箱：sxjtjt@sxcig.com</p>
              <p>电话：+0351-2021831</p>
              <a href="#contact">更多联系方式</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>版权所有 Copyright(C)2009-2022 山西建设投资集团有限公司 晋ICP备05000881号 | 晋公网安备 14010602060615号</p>
          <div class="platform-links">
            <ul>
              <li><a href="#email">集团邮箱</a></li>
              <li><a href="#office">办公平台</a></li>
              <li><a href="#tech">技术质量共享平台</a></li>
              <li><a href="#service">筑服云</a></li>
              <li><a href="#service">保障农民工工资支付维权电话</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentLang: 'zh',
      isScrolled: false,
      advantages: [
        {
          title: '省属国企优势',
          description: '作为拥有70年历史的省属国有建筑企业，山西建投集团传承红色基因，践行国企职责，多次在山西省急难险阻等重点工程任务中发扬"建投铁军"精神，获奖数量均居山西同行之冠。'
        },
        {
          title: '具备资质优势',
          description: '拥有8个建筑、3个市政公用、1个石油化工，共12项工程施工总承包特级资质，煤炭工业设计、建筑工程设计、勘察、咨询、环境评价、地质灾害治理等50余项甲级设计资质及150多项总承包与专业承包一级资质，拥有国家商务部批准的对外工程承包和对外贸易经营权。'
        },
        {
          title: '建筑全产业链优势',
          description: '重组了两家省属设计单位、一家勘察单位和一家科研单位，全面形成了从科研、勘察、设计、建设到运营的"全产业链"一体化竞争优势。'
        },
        {
          title: '投融资引领优势',
          description: '完成对深圳一家投资公司的股权收购，对两家上市公司的控制，成立融资担保、融资租赁、商业保理、私募基金等多元化融资平台，金融授信额度突破1700亿元，资产负债率降至70%左右，连续多年被评为AAA级信用企业。'
        },
        {
          title: '装配式园区布局优势',
          description: '以150—200公里为半径在全省投资建设各具特色又相互协同的建筑产业现代化园区并投产运营，每年可为1000多万平方米的装配式建筑及市政管廊、道路桥梁、风电项目提供绿色建材支持。'
        },
        {
          title: '新业态平台优势',
          description: '山西建投集团组建园区建发、静态交通、城市运营、美丽乡村、低碳环保等新业态领域，发挥各专业投资平台公司作用，不断培育转型发展新动能。'
        },
        {
          title: '专业技术领域优势',
          description: '在园林古建、大网架钢结构、机电设备安装、机场场道、矿井建设、石油化工、炉窑砌筑、深基坑、光伏发电新能源等方面，持续做大做强传统建筑板块专业技术核心竞争力。'
        },
        {
          title: '国内国外区域布局优势',
          description: '坚持"立足山西、布局全国、开拓海外"的经营战略方针，成立华南、华东、北京三大区域总部，海外业务足迹遍及60个国家和地区，加快走出去步伐，培育发展动能。'
        },
        {
          title: '集中采购供应链优势',
          description: '依托2019年上线运行的集团"筑服云"平台，推进物资集中采购，并持续进行功能模块开发和系统优化，具备开展工程、货物、服务类线上采购功能。'
        },
        {
          title: '专业重组协同运营优势',
          description: '完成"建筑设计、科研、检测、工程监理、信息化、金融、房地产及集中采购"等八大专业化业务板块重组，发挥企业经营协同效应，改变同质化经营状况，有力提升了专业化板块综合竞争力。'
        }
      ],
      reformTimeline: [
        {
          date: '2018',
          title: '战略转型',
          description: '以"投资"引领和"大建设"理念，拓展新领域，建设现代化产业园区，向传统产业现代化、相关多元化经营转变。'
        },
        {
          date: '2019',
          title: '平台建设',
          description: '依托2019年上线运行的集团"筑服云"平台，推进物资集中采购，并持续进行功能模块开发和系统优化，具备开展工程、货物、服务类线上采购功能。'
        },
        {
          date: '2020.7',
          title: '重组塑优势',
          description: '重组两家省部属设计单位、一家勘察单位、一家规划设计单位和一家建筑科研单位，收购一家上市控股企业，形成"全产业链"航母巨舰；组建成立静态交通、美丽乡村、低碳环保等转型新业态企业，打造建投集团高质量发展新优势。'
        }
      ],
      projects: [
        {
          name: '山西•潇河新城',
          description: '现代化新城建设项目，展现山西建投在城市建设领域的综合实力。'
        },
        {
          name: '汾河太原城治理美化工程',
          description: '城市环境治理重点项目，体现企业社会责任和环保理念。'
        },
        {
          name: '毛里求斯晋非五星级公寓式酒店',
          description: '海外项目代表，展现山西建投国际化发展成果。'
        }
      ]
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    switchLanguage(lang) {
      this.currentLang = lang
      // 这里可以添加语言切换逻辑
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 100
    }
  },
  mounted() {
    // 滚动监听
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.homepage-container {
  min-height: 100vh;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
}

/* 头部样式 */
.header {
  background: #1e3a8a;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header.scrolled {
  background: rgba(30, 58, 138, 0.95);
  backdrop-filter: blur(10px);
}

.nav_box {
  background: #1e3a8a;
  padding: 1rem 0;
}

.nav_wrap {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo img {
  height: 40px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav_li {
  position: relative;
}

.nav_li > a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.nav_li > a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  color: #333;
  min-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.nav_li:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.mwrap {
  padding: 2rem;
}

.left {
  width: 40%;
}

.left ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.left li {
  margin: 0.5rem 0;
}

.left a {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 0;
  display: block;
  transition: color 0.3s;
}

.left a:hover {
  color: #1e3a8a;
}

.con {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.con dt {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.con dd a {
  color: #1e3a8a;
  text-decoration: none;
}

.right {
  width: 60%;
}

.infor {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
}

.tit p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 1rem;
}

.con p {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.con a {
  color: #1e3a8a;
  text-decoration: none;
  font-weight: bold;
}

.language-switch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
}

.language-switch span {
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: color 0.3s;
}

.language-switch span:hover,
.language-switch span.active {
  color: #f59e0b;
}

/* 主要内容样式 */
.main-content {
  background: #f8fafc;
}

/* 容器样式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 通用section样式 */
section {
  padding: 4rem 0;
}

section h3 {
  font-size: 2.5rem;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

section h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #3b82f6;
}

/* 优势区域样式 */
.advantages-section {
  background: white;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.advantage-item {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.advantage-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.advantage-item h4 {
  color: #1e3a8a;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 0.5rem;
}

.advantage-item p {
  color: #4b5563;
  line-height: 1.6;
}

/* 改革成就样式 */
.reform-section {
  background: #f1f5f9;
}

.reform-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.reform-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #3b82f6;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(odd) {
  flex-direction: row;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-date {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  margin: 0 2rem;
  min-width: 80px;
  text-align: center;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  flex: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.timeline-content h4 {
  color: #1e3a8a;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.timeline-content p {
  color: #4b5563;
  line-height: 1.6;
}

/* 愿景使命样式 */
.vision-mission {
  background: white;
}

.vision-mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.vision-item, .mission-item, .strategy-item {
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  transition: transform 0.3s;
}

.vision-item:hover, .mission-item:hover, .strategy-item:hover {
  transform: translateY(-4px);
}

.vision-item h4, .mission-item h4, .strategy-item h4 {
  color: #1e3a8a;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.vision-item h5, .mission-item h5 {
  color: #3b82f6;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-style: italic;
}

.vision-item p, .mission-item p, .strategy-item p {
  color: #4b5563;
  line-height: 1.6;
}

/* 项目展示样式 */
.projects-showcase {
  background: #f1f5f9;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.project-item:hover {
  transform: translateY(-4px);
}

.project-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #3b82f6, #1e3a8a);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.project-placeholder {
  color: white;
  font-size: 3rem;
  font-weight: bold;
}

.project-item h4 {
  color: #1e3a8a;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.project-item p {
  color: #4b5563;
  line-height: 1.6;
}

/* 底部样式 */
.footer {
  background: #1e293b;
  color: white;
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-content h4 {
  color: #3b82f6;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-content p {
  margin: 0.5rem 0;
  color: #cbd5e1;
}

.footer-content ul {
  list-style: none;
  padding: 0;
}

.footer-content li {
  margin: 0.5rem 0;
}

.footer-content a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-content a:hover {
  color: #3b82f6;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  color: #9ca3af;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
}

.platform-links ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.platform-links a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.platform-links a:hover {
  color: #3b82f6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav_wrap {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav ul {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .dropdown {
    min-width: 300px;
  }
  
  .mwrap {
    flex-direction: column;
  }
  
  .left, .right {
    width: 100%;
  }
  
  .advantages-grid,
  .vision-mission-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .reform-timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    flex-direction: column !important;
    align-items: flex-start;
  }
  
  .timeline-date {
    margin: 0 0 1rem 0;
  }
  
  .timeline-content {
    margin-left: 40px;
  }
  
  section h3 {
    font-size: 2rem;
  }
  
  .platform-links ul {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .nav_wrap {
    padding: 0 1rem;
  }
  
  .dropdown {
    min-width: 250px;
  }
  
  .mwrap {
    padding: 1rem;
  }
}
</style>