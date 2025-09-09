
<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="elSearchFormRef" :inline="true" :model="searchInfo" class="demo-form-inline" @keyup.enter="onSubmit">

        <template v-if="showAllQuery">
          <!-- 将需要控制显示状态的查询条件添加到此范围内 -->
        </template>

        <el-form-item>
          <el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button icon="refresh" @click="onReset">重置</el-button>
          <el-button link type="primary" icon="arrow-down" @click="showAllQuery=true" v-if="!showAllQuery">展开</el-button>
          <el-button link type="primary" icon="arrow-up" @click="showAllQuery=false" v-else>收起</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
        <div class="gva-btn-list">
            <el-button  type="primary" icon="plus" @click="openDialog()">新增</el-button>
            <el-button  icon="delete" style="margin-left: 10px;" :disabled="!multipleSelection.length" @click="onDelete">删除</el-button>
            
        </div>
        <el-table
        ref="multipleTable"
        style="width: 100%"
        tooltip-effect="dark"
        :data="tableData"
        row-key="id"
        @selection-change="handleSelectionChange"
        >
        <el-table-column type="selection" width="55" />
        
            <el-table-column align="left" label="id字段" prop="id" width="120" />

            <el-table-column align="left" label="项目全称" prop="title" width="120" />

            <el-table-column align="left" label="项目简称" prop="short_title" width="120" />

            <el-table-column align="left" label="客户" prop="client" width="120" />

            <el-table-column align="left" label="项目位置" prop="location" width="120" />

            <el-table-column label="项目描述" prop="short_description" width="200">
   <template #default="scope">
      [富文本内容]
   </template>
</el-table-column>
            <el-table-column label="项目详细描述" prop="full_description" width="200">
   <template #default="scope">
      [富文本内容]
   </template>
</el-table-column>
            <el-table-column align="left" label="开始时间" prop="start_date" width="180">
   <template #default="scope">{{ formatDate(scope.row.start_date) }}</template>
</el-table-column>
            <el-table-column align="left" label="结束时间" prop="end_date" width="180">
   <template #default="scope">{{ formatDate(scope.row.end_date) }}</template>
</el-table-column>
            <el-table-column align="left" label="项目状态" prop="status" width="120" />

            <el-table-column label="标签" prop="tags" width="200">
    <template #default="scope">
        [JSON]
    </template>
</el-table-column>
            <el-table-column label="项目图片" prop="images" width="200">
   <template #default="scope">
      <div class="multiple-img-box">
         <el-image preview-teleported v-for="(item,index) in scope.row.images" :key="index" style="width: 80px; height: 80px" :src="getUrl(item)" fit="cover"/>
     </div>
   </template>
</el-table-column>
            <el-table-column label="封面" prop="cover_image_url" width="200">
    <template #default="scope">
      <el-image preview-teleported style="width: 100px; height: 100px" :src="getUrl(scope.row.cover_image_url)" fit="cover"/>
    </template>
</el-table-column>
            <el-table-column label="视频" prop="video" width="200">
   <template #default="scope">
    <video
       style="width: 100px; height: 100px"
       muted
       preload="metadata"
       >
         <source :src="getUrl(scope.row.video) + '#t=1'">
       </video>
   </template>
</el-table-column>
            <el-table-column label="项目文件" prop="document" width="200">
    <template #default="scope">
         <div class="file-list">
           <el-tag v-for="file in scope.row.document" :key="file.uid" @click="onDownloadFile(file.url)">{{ file.name }}</el-tag>
         </div>
    </template>
</el-table-column>
            <el-table-column align="left" label="平米数" prop="size" width="120" />

            <el-table-column align="left" label="造价" prop="value" width="120" />

            <el-table-column align="left" label="浏览量" prop="view_count" width="120" />

            <el-table-column align="left" label="排序" prop="display_order" width="120" />

            <el-table-column align="left" label="is_featured" prop="is_featured" width="120">
    <template #default="scope">{{ formatBoolean(scope.row.is_featured) }}</template>
</el-table-column>
            <el-table-column label="TAG" prop="tags" width="200">
    <template #default="scope">
        [JSON]
    </template>
</el-table-column>
        <el-table-column align="left" label="操作" fixed="right" :min-width="appStore.operateMinWith">
            <template #default="scope">
            <el-button  type="primary" link class="table-button" @click="getDetails(scope.row)"><el-icon style="margin-right: 5px"><InfoFilled /></el-icon>查看</el-button>
            <el-button  type="primary" link icon="edit" class="table-button" @click="updateMdProjectFunc(scope.row)">编辑</el-button>
            <el-button   type="primary" link icon="delete" @click="deleteRow(scope.row)">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
        <div class="gva-pagination">
            <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :current-page="page"
            :page-size="pageSize"
            :page-sizes="[10, 30, 50, 100]"
            :total="total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            />
        </div>
    </div>
    <el-drawer destroy-on-close :size="appStore.drawerSize" v-model="dialogFormVisible" :show-close="false" :before-close="closeDialog">
       <template #header>
              <div class="flex justify-between items-center">
                <span class="text-lg">{{type==='create'?'新增':'编辑'}}</span>
                <div>
                  <el-button :loading="btnLoading" type="primary" @click="enterDialog">确 定</el-button>
                  <el-button @click="closeDialog">取 消</el-button>
                </div>
              </div>
            </template>

          <el-form :model="formData" label-position="top" ref="elFormRef" :rules="rule" label-width="80px">
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
          </el-form>
    </el-drawer>

    <el-drawer destroy-on-close :size="appStore.drawerSize" v-model="detailShow" :show-close="true" :before-close="closeDetailShow" title="查看">
            <el-descriptions :column="1" border>
                    <el-descriptions-item label="id字段">
    {{ detailForm.id }}
</el-descriptions-item>
                    <el-descriptions-item label="项目全称">
    {{ detailForm.title }}
</el-descriptions-item>
                    <el-descriptions-item label="项目简称">
    {{ detailForm.short_title }}
</el-descriptions-item>
                    <el-descriptions-item label="客户">
    {{ detailForm.client }}
</el-descriptions-item>
                    <el-descriptions-item label="项目位置">
    {{ detailForm.location }}
</el-descriptions-item>
                    <el-descriptions-item label="项目描述">
    <RichView v-model="detailForm.short_description" />
</el-descriptions-item>
                    <el-descriptions-item label="项目详细描述">
    <RichView v-model="detailForm.full_description" />
</el-descriptions-item>
                    <el-descriptions-item label="开始时间">
    {{ detailForm.start_date }}
</el-descriptions-item>
                    <el-descriptions-item label="结束时间">
    {{ detailForm.end_date }}
</el-descriptions-item>
                    <el-descriptions-item label="项目状态">
    {{ detailForm.status }}
</el-descriptions-item>
                    <el-descriptions-item label="标签">
    {{ detailForm.tags }}
</el-descriptions-item>
                    <el-descriptions-item label="项目图片">
    <el-image style="width: 50px; height: 50px; margin-right: 10px" :preview-src-list="returnArrImg(detailForm.images)" :initial-index="index" v-for="(item,index) in detailForm.images" :key="index" :src="getUrl(item)" fit="cover" />
</el-descriptions-item>
                    <el-descriptions-item label="封面">
    <el-image style="width: 50px; height: 50px" :preview-src-list="returnArrImg(detailForm.cover_image_url)" :src="getUrl(detailForm.cover_image_url)" fit="cover" />
</el-descriptions-item>
                    <el-descriptions-item label="视频">
    {{ detailForm.video }}
</el-descriptions-item>
                    <el-descriptions-item label="项目文件">
    <div class="fileBtn" v-for="(item,index) in detailForm.document" :key="index">
        <el-button type="primary" text bg @click="onDownloadFile(item.url)">
          <el-icon style="margin-right: 5px"><Download /></el-icon>
          {{ item.name }}
        </el-button>
    </div>
</el-descriptions-item>
                    <el-descriptions-item label="平米数">
    {{ detailForm.size }}
</el-descriptions-item>
                    <el-descriptions-item label="造价">
    {{ detailForm.value }}
</el-descriptions-item>
                    <el-descriptions-item label="浏览量">
    {{ detailForm.view_count }}
</el-descriptions-item>
                    <el-descriptions-item label="排序">
    {{ detailForm.display_order }}
</el-descriptions-item>
                    <el-descriptions-item label="is_featured">
    {{ detailForm.is_featured }}
</el-descriptions-item>
                    <el-descriptions-item label="TAG">
    {{ detailForm.tags }}
</el-descriptions-item>
            </el-descriptions>
        </el-drawer>

  </div>
</template>

<script setup>
import {
  createMdProject,
  deleteMdProject,
  deleteMdProjectByIds,
  updateMdProject,
  findMdProject,
  getMdProjectList
} from '@/api/md/mdProject'
import { getUrl } from '@/utils/image'
// 图片选择组件
import SelectImage from '@/components/selectImage/selectImage.vue'
// 富文本组件
import RichEdit from '@/components/richtext/rich-edit.vue'
import RichView from '@/components/richtext/rich-view.vue'
// 文件选择组件
import SelectFile from '@/components/selectFile/selectFile.vue'

// 全量引入格式化工具 请按需保留
import { getDictFunc, formatDate, formatBoolean, filterDict ,filterDataSource, returnArrImg, onDownloadFile } from '@/utils/format'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'
import { useAppStore } from "@/pinia"




defineOptions({
    name: 'MdProject'
})

// 提交按钮loading
const btnLoading = ref(false)
const appStore = useAppStore()

// 控制更多查询条件显示/隐藏状态
const showAllQuery = ref(false)

// 自动化生成的字典（可能为空）以及字段
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
const elSearchFormRef = ref()

// =========== 表格控制部分 ===========
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({})
// 重置
const onReset = () => {
  searchInfo.value = {}
  getTableData()
}

// 搜索
const onSubmit = () => {
  elSearchFormRef.value?.validate(async(valid) => {
    if (!valid) return
    page.value = 1
    if (searchInfo.value.is_featured === ""){
        searchInfo.value.is_featured=null
    }
    getTableData()
  })
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

// 修改页面容量
const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async() => {
  const table = await getMdProjectList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

// ============== 表格控制部分结束 ===============

// 获取需要的字典 可能为空 按需保留
const setOptions = async () =>{
}

// 获取需要的字典 可能为空 按需保留
setOptions()


// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
    multipleSelection.value = val
}

// 删除行
const deleteRow = (row) => {
    ElMessageBox.confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
            deleteMdProjectFunc(row)
        })
    }

// 多选删除
const onDelete = async() => {
  ElMessageBox.confirm('确定要删除吗?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async() => {
      const ids = []
      if (multipleSelection.value.length === 0) {
        ElMessage({
          type: 'warning',
          message: '请选择要删除的数据'
        })
        return
      }
      multipleSelection.value &&
        multipleSelection.value.map(item => {
          ids.push(item.id)
        })
      const res = await deleteMdProjectByIds({ ids })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        if (tableData.value.length === ids.length && page.value > 1) {
          page.value--
        }
        getTableData()
      }
      })
    }

// 行为控制标记（弹窗内部需要增还是改）
const type = ref('')

// 更新行
const updateMdProjectFunc = async(row) => {
    const res = await findMdProject({ id: row.id })
    type.value = 'update'
    if (res.code === 0) {
        formData.value = res.data
        dialogFormVisible.value = true
    }
}


// 删除行
const deleteMdProjectFunc = async (row) => {
    const res = await deleteMdProject({ id: row.id })
    if (res.code === 0) {
        ElMessage({
                type: 'success',
                message: '删除成功'
            })
            if (tableData.value.length === 1 && page.value > 1) {
            page.value--
        }
        getTableData()
    }
}

// 弹窗控制标记
const dialogFormVisible = ref(false)

// 打开弹窗
const openDialog = () => {
    type.value = 'create'
    dialogFormVisible.value = true
}

// 关闭弹窗
const closeDialog = () => {
    dialogFormVisible.value = false
    formData.value = {
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
        }
}
// 弹窗确定
const enterDialog = async () => {
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
                closeDialog()
                getTableData()
              }
      })
}

const detailForm = ref({})

// 查看详情控制标记
const detailShow = ref(false)


// 打开详情弹窗
const openDetailShow = () => {
  detailShow.value = true
}


// 打开详情
const getDetails = async (row) => {
  // 打开弹窗
  const res = await findMdProject({ id: row.id })
  if (res.code === 0) {
    detailForm.value = res.data
    openDetailShow()
  }
}


// 关闭详情弹窗
const closeDetailShow = () => {
  detailShow.value = false
  detailForm.value = {}
}


</script>

<style>

.file-list{
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.fileBtn{
  margin-bottom: 10px;
}

.fileBtn:last-child{
  margin-bottom: 0;
}

</style>
