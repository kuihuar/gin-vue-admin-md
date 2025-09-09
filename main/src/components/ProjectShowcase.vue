<template>
  <section class="section home5">
    <div class="wp">
      <div class="tit4 miso_up">
        <h3>项目展示</h3>
        <div class="arr"></div>
      </div>
      <div class="content flex">
        <div class="left">
          <ul class="list13">
            <li v-for="(project, index) in projects" :key="index">
              <a :href="project.link" class="a">
                <div class="img slow img_zd">
                  <div class="img_hezi" :style="{ background: `url(${project.image})` }"></div>
                  <img :src="project.image" class="none" />
                </div>
                <div class="con">
                  <h4>{{ project.title }}</h4>
                  <p>{{ project.description }}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="box">
            <h4>精品工程</h4>
            <p>华苏建设承建了一大批国家和省、市重点工程，荣获多项国家级、省级奖项，在业界享有盛誉。</p>
            <a href="#" class="more2">查看更多项目</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectShowcase',
  data() {
    return {
      projects: [
        {
          title: '太原南站',
          description: '太原南站是山西省最大的铁路客运站，总建筑面积约20万平方米。',
          image: '/src/assets/images/project1.jpg',
          link: '#'
        },
        {
          title: '山西大剧院',
          description: '山西大剧院是山西省标志性文化建筑，总建筑面积约7.8万平方米。',
          image: '/src/assets/images/project2.jpg',
          link: '#'
        },
        {
          title: '太原国际机场T3航站楼',
          description: '太原国际机场T3航站楼是山西省重要的交通枢纽。',
          image: '/src/assets/images/project3.jpg',
          link: '#'
        },
        {
          title: '山西体育中心',
          description: '山西体育中心是山西省最大的综合性体育场馆。',
          image: '/src/assets/images/project4.jpg',
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
</style>
