<template>
  <section class="section home6 fp-auto-height">
    <div class="wp">
      <section class="list16_box_btn">
        <section class="list16_box swiper-container">
          <ul class="list16 swiper-wrapper">
            <li class="swiper-slide" v-for="(topic, index) in topics" :key="index">
              <a :href="topic.link" class="a">
                <div class="img slow img_zd">
                  <div class="img_hezi" :style="{ background: `url(${topic.image})` }"></div>
                  <img :src="topic.image" class="none" />
                </div>
              </a>
            </li>
          </ul>
        </section>

        <div class="miso_btn miso_btn2">
          <div class="miso_arrow prev" @click="prevTopic"></div>
          <div class="miso_arrow next" @click="nextTopic"></div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopicSection',
  data() {
    return {
      topics: [
        {
          image: '/src/assets/images/list16_img1.jpg',
          link: '#',
          title: '学习宣传'
        },
        {
          image: '/src/assets/images/list16_img2.jpg',
          link: '#',
          title: '市场开拓'
        },
        {
          image: '/src/assets/images/list16_img3.jpg',
          link: '#',
          title: '党建学习'
        },
        {
          image: '/src/assets/images/list16_img4.jpg',
          link: '#',
          title: '质量安全'
        },
        {
          image: '/src/assets/images/list16_img5.jpg',
          link: '#',
          title: '专题学习'
        }
      ]
    }
  },
  methods: {
    prevTopic() {
      // 上一个专题逻辑
      console.log('上一个专题')
    },
    nextTopic() {
      // 下一个专题逻辑
      console.log('下一个专题')
    }
  }
}
</script>

<style>
@import '/src/assets/css/reset.css';
@import '/src/assets/css/style.css';
</style>
