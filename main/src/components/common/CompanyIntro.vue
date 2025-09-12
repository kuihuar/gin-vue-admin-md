<template>
  <section class="section home2">
    <div class="wp">
      <div class="box">
        <h3>华苏建设</h3>
        <h2>奉献精品 开创未来</h2>
        <p class="ps3">
          华苏建设有限公司是山西省规模最大的综合性国有投资设集团、山西省管重要骨干企业，是中国企业500强、中国承包商80强企业，美国《工程新闻记录》（ENR）全球承包商250强和国际承包商250强企业，也是AAA主体信用等级企业。
        </p>
        <a href="#">
          <div class="arr"></div>
        </a>
      </div>

      <ul class="list5">
        <li v-for="(item, index) in achievements" :key="index">
          <a class="a">
            <div class="num">
              <span class="number">{{ item.number }}</span>{{ item.unit }}
            </div>
            <div class="d">{{ item.description }}</div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CompanyIntro',
  data() {
    return {
      achievements: [
        {
          number: '500',
          unit: '强',
          description: '中国企业'
        },
        {
          number: '80',
          unit: '强',
          description: '中国承包商'
        },
        {
          number: '250',
          unit: '强',
          description: 'ENR全球承包商'
        },
        {
          number: '250',
          unit: '强',
          description: 'ENR国际承包商'
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
