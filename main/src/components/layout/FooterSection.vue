 <template>
  <section class="section footer fp-auto-height">
    <div class="wp">
      <div class="foot1 flex">
        <div class="box1">
          <div class="t1">华苏建设有限公司</div>
          <div class="t2">奉献精品 开创未来</div>
          <div class="share">
            <span class="wx"></span>
            <span class="qq"></span>
            <span class="wb"></span>
          </div>
          <div class="btn">
            <a href="#">
              了解更多
              <span class="icon"></span>
            </a>
          </div>
        </div>
        
        <div class="box2">
          <dl v-for="(group, index) in linkGroups" :key="index">
            <dt>{{ group.title }}</dt>
            <dd v-for="(link, linkIndex) in group.links" :key="linkIndex">
              <a :href="link.href" :target="link.target">{{ link.title }}</a>
            </dd>
          </dl>
        </div>
        
        <div class="box3">
          <div class="tel">联系我们</div>
          <dl>
            <dd>地址：山西省太原市迎泽区迎泽大街300号</dd>
            <dd>电话：0351-12345678</dd>
            <dd>邮箱：info@huasu.com</dd>
          </dl>
          <div class="more">
            更多联系方式
            <span class="icon"></span>
          </div>
        </div>
      </div>
      
      <div class="foot2">
        <div class="copyright">
          <p>&copy; 2024 华苏建设有限公司 版权所有</p>
          <p>晋ICP备12345678号-1</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      linkGroups: [
        {
          title: '关于华苏',
          links: [
            { title: '集团简介', href: '#', target: '_self' },
            { title: '组织架构', href: '#', target: '_self' },
            { title: '集团荣誉', href: '#', target: '_self' },
            { title: '联系华苏', href: '#', target: '_self' }
          ]
        },
        {
          title: '华苏动态',
          links: [
            { title: '新闻中心', href: '#', target: '_self' },
            { title: '国企资讯', href: '#', target: '_self' },
            { title: '公司要闻', href: '#', target: '_self' }
          ]
        },
        {
          title: '全产业链服务',
          links: [
            { title: '三大支柱', href: '#', target: '_self' },
            { title: '六大支撑', href: '#', target: '_self' }
          ]
        },
        {
          title: '科技创新',
          links: [
            { title: '科技成果', href: '#', target: '_self' },
            { title: '创新体系', href: '#', target: '_self' },
            { title: '成果推广', href: '#', target: '_self' },
            { title: '科技动态', href: '#', target: '_self' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/reset.css';
@import '@/assets/css/style.css';
/* 隐藏 fullpage.js 水印 */
.fp-watermark {
  display: none !important;
}
</style>
