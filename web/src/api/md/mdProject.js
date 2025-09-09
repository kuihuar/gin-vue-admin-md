import service from '@/utils/request'
// @Tags MdProject
// @Summary 创建项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data body model.MdProject true "创建项目管理"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /mdProject/createMdProject [post]
export const createMdProject = (data) => {
  return service({
    url: '/mdProject/createMdProject',
    method: 'post',
    data
  })
}

// @Tags MdProject
// @Summary 删除项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data body model.MdProject true "删除项目管理"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /mdProject/deleteMdProject [delete]
export const deleteMdProject = (params) => {
  return service({
    url: '/mdProject/deleteMdProject',
    method: 'delete',
    params
  })
}

// @Tags MdProject
// @Summary 批量删除项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除项目管理"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /mdProject/deleteMdProject [delete]
export const deleteMdProjectByIds = (params) => {
  return service({
    url: '/mdProject/deleteMdProjectByIds',
    method: 'delete',
    params
  })
}

// @Tags MdProject
// @Summary 更新项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data body model.MdProject true "更新项目管理"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /mdProject/updateMdProject [put]
export const updateMdProject = (data) => {
  return service({
    url: '/mdProject/updateMdProject',
    method: 'put',
    data
  })
}

// @Tags MdProject
// @Summary 用id查询项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data query model.MdProject true "用id查询项目管理"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /mdProject/findMdProject [get]
export const findMdProject = (params) => {
  return service({
    url: '/mdProject/findMdProject',
    method: 'get',
    params
  })
}

// @Tags MdProject
// @Summary 分页获取项目管理列表
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取项目管理列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /mdProject/getMdProjectList [get]
export const getMdProjectList = (params) => {
  return service({
    url: '/mdProject/getMdProjectList',
    method: 'get',
    params
  })
}

// @Tags MdProject
// @Summary 不需要鉴权的项目管理接口
// @Accept application/json
// @Produce application/json
// @Param data query mdReq.MdProjectSearch true "分页获取项目管理列表"
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /mdProject/getMdProjectPublic [get]
export const getMdProjectPublic = () => {
  return service({
    url: '/mdProject/getMdProjectPublic',
    method: 'get',
  })
}
// GetProjectList 我的项目列表
// @Tags MdProject
// @Summary 我的项目列表
// @Accept application/json
// @Produce application/json
// @Success 200 {object} response.Response{data=object,msg=string} "成功"
// @Router /mdProject/projectList [GET]
export const projectList = () => {
  return service({
    url: '/mdProject/projectList',
    method: 'GET'
  })
}
