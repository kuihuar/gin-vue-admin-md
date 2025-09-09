
<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="id字段:" prop="id">
    <el-input v-model.number="formData.id" :clearable="true" placeholder="请输入id字段" />
</el-form-item>
        <el-form-item label="项目全称:" prop="title">
    <el-input v-model="formData.title" :clearable="true" placeholder="请输入项目全称" />
</el-form-item>
        <el-form-item label="项目简称:" prop="short_title">
    <el-input v-model="formData.short_title" :clearable="true" placeholder="请输入项目简称" />
</el-form-item>
        <el-form-item label="客户:" prop="client">
    <el-input v-model="formData.client" :clearable="true" placeholder="请输入客户" />
</el-form-item>
        <el-form-item label="项目位置:" prop="location">
    <el-input v-model="formData.location" :clearable="true" placeholder="请输入项目位置" />
</el-form-item>
        <el-form-item label="项目描述:" prop="short_description">
    <RichEdit v-model="formData.short_description"/>
</el-form-item>
        <el-form-item label="项目详细描述:" prop="full_description">
    <RichEdit v-model="formData.full_description"/>
</el-form-item>
        <el-form-item label="开始时间:" prop="start_date">
    <el-date-picker v-model="formData.start_date" type="date" style="width:100%" placeholder="选择日期" :clearable="true" />
</el-form-item>
        <el-form-item label="结束时间:" prop="end_date">
    <el-date-picker v-model="formData.end_date" type="date" style="width:100%" placeholder="选择日期" :clearable="true" />
</el-form-item>
        <el-form-item label="项目状态:" prop="status">
    <el-input v-model="formData.status" :clearable="true" placeholder="请输入项目状态" />
</el-form-item>
        <el-form-item label="标签:" prop="tags">
    // 此字段为json结构，可以前端自行控制展示和数据绑定模式 需绑定json的key为 formData.tags 后端会按照json的类型进行存取
    {{ formData.tags }}
</el-form-item>
        <el-form-item label="项目图片:" prop="images">
    <SelectImage
     multiple
     v-model="formData.images"
     file-type="image"
     />
</el-form-item>
        <el-form-item label="封面:" prop="cover_image_url">
    <SelectImage
     v-model="formData.cover_image_url"
     file-type="image"
    />
</el-form-item>
        <el-form-item label="视频:" prop="video">
    <SelectImage
    v-model="formData.video"
    file-type="video"
    />
</el-form-item>
        <el-form-item label="项目文件:" prop="document">
    <SelectFile v-model="formData.document" />
</el-form-item>
        <el-form-item label="平米数:" prop="size">
    <el-input v-model="formData.size" :clearable="true" placeholder="请输入平米数" />
</el-form-item>
        <el-form-item label="造价:" prop="value">
    <el-input v-model="formData.value" :clearable="true" placeholder="请输入造价" />
</el-form-item>
        <el-form-item label="浏览量:" prop="view_count">
    <el-input v-model.number="formData.view_count" :clearable="true" placeholder="请输入浏览量" />
</el-form-item>
        <el-form-item label="排序:" prop="display_order">
    <el-input v-model.number="formData.display_order" :clearable="true" placeholder="请输入排序" />
</el-form-item>
        <el-form-item label="is_featured:" prop="is_featured">
    <el-switch v-model="formData.is_featured" active-color="#13ce66" inactive-color="#ff4949" active-text="是" inactive-text="否" clearable ></el-switch>
</el-form-item>
        <el-form-item label="TAG:" prop="tags">
    // 此字段为json结构，可以前端自行控制展示和数据绑定模式 需绑定json的key为 formData.tags 后端会按照json的类型进行存取
    {{ formData.tags }}
</el-form-item>
        <el-form-item>
          <el-button :loading="btnLoading" type="primary" @click="save">保存</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {
  createMdProject,
  updateMdProject,
  findMdProject
} from '@/api/md/mdProject'

defineOptions({
    name: 'MdProjectForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
// 图片选择组件
import SelectImage from '@/components/selectImage/selectImage.vue'
// 文件选择组件
import SelectFile from '@/components/selectFile/selectFile.vue'
// 富文本组件
import RichEdit from '@/components/richtext/rich-edit.vue'


const route = useRoute()
const router = useRouter()

// 提交按钮loading
const btnLoading = ref(false)

const type = ref('')
const formData = ref({
            id: undefined,
            title: '',
            short_title: '',
            client: '',
            location: '',
            short_description: '',
            full_description: '',
            start_date: new Date(),
            end_date: new Date(),
            status: '',
            tags: {},
            images: [],
            cover_image_url: "",
            video: "",
            document: [],
            size: '',
            value: '',
            view_count: undefined,
            display_order: undefined,
            is_featured: false,
            tags: {},
        })
// 验证规则
const rule = reactive({
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findMdProject({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
      btnLoading.value = true
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return btnLoading.value = false
            let res
           switch (type.value) {
             case 'create':
               res = await createMdProject(formData.value)
               break
             case 'update':
               res = await updateMdProject(formData.value)
               break
             default:
               res = await createMdProject(formData.value)
               break
           }
           btnLoading.value = false
           if (res.code === 0) {
             ElMessage({
               type: 'success',
               message: '创建/更改成功'
             })
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>
