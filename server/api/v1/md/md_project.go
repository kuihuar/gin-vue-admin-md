package md

import (
	
	"github.com/flipped-aurora/gin-vue-admin/server/global"
    "github.com/flipped-aurora/gin-vue-admin/server/model/common/response"
    "github.com/flipped-aurora/gin-vue-admin/server/model/md"
    mdReq "github.com/flipped-aurora/gin-vue-admin/server/model/md/request"
    "github.com/gin-gonic/gin"
    "go.uber.org/zap"
)

type MdProjectApi struct {}



// CreateMdProject 创建项目管理
// @Tags MdProject
// @Summary 创建项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data body md.MdProject true "创建项目管理"
// @Success 200 {object} response.Response{msg=string} "创建成功"
// @Router /mdProject/createMdProject [post]
func (mdProjectApi *MdProjectApi) CreateMdProject(c *gin.Context) {
    // 创建业务用Context
    ctx := c.Request.Context()

	var mdProject md.MdProject
	err := c.ShouldBindJSON(&mdProject)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	err = mdProjectService.CreateMdProject(ctx,&mdProject)
	if err != nil {
        global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败:" + err.Error(), c)
		return
	}
    response.OkWithMessage("创建成功", c)
}

// DeleteMdProject 删除项目管理
// @Tags MdProject
// @Summary 删除项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data body md.MdProject true "删除项目管理"
// @Success 200 {object} response.Response{msg=string} "删除成功"
// @Router /mdProject/deleteMdProject [delete]
func (mdProjectApi *MdProjectApi) DeleteMdProject(c *gin.Context) {
    // 创建业务用Context
    ctx := c.Request.Context()

	id := c.Query("id")
	err := mdProjectService.DeleteMdProject(ctx,id)
	if err != nil {
        global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败:" + err.Error(), c)
		return
	}
	response.OkWithMessage("删除成功", c)
}

// DeleteMdProjectByIds 批量删除项目管理
// @Tags MdProject
// @Summary 批量删除项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Success 200 {object} response.Response{msg=string} "批量删除成功"
// @Router /mdProject/deleteMdProjectByIds [delete]
func (mdProjectApi *MdProjectApi) DeleteMdProjectByIds(c *gin.Context) {
    // 创建业务用Context
    ctx := c.Request.Context()

	ids := c.QueryArray("ids[]")
	err := mdProjectService.DeleteMdProjectByIds(ctx,ids)
	if err != nil {
        global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败:" + err.Error(), c)
		return
	}
	response.OkWithMessage("批量删除成功", c)
}

// UpdateMdProject 更新项目管理
// @Tags MdProject
// @Summary 更新项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data body md.MdProject true "更新项目管理"
// @Success 200 {object} response.Response{msg=string} "更新成功"
// @Router /mdProject/updateMdProject [put]
func (mdProjectApi *MdProjectApi) UpdateMdProject(c *gin.Context) {
    // 从ctx获取标准context进行业务行为
    ctx := c.Request.Context()

	var mdProject md.MdProject
	err := c.ShouldBindJSON(&mdProject)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	err = mdProjectService.UpdateMdProject(ctx,mdProject)
	if err != nil {
        global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败:" + err.Error(), c)
		return
	}
	response.OkWithMessage("更新成功", c)
}

// FindMdProject 用id查询项目管理
// @Tags MdProject
// @Summary 用id查询项目管理
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param id query int true "用id查询项目管理"
// @Success 200 {object} response.Response{data=md.MdProject,msg=string} "查询成功"
// @Router /mdProject/findMdProject [get]
func (mdProjectApi *MdProjectApi) FindMdProject(c *gin.Context) {
    // 创建业务用Context
    ctx := c.Request.Context()

	id := c.Query("id")
	remdProject, err := mdProjectService.GetMdProject(ctx,id)
	if err != nil {
        global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败:" + err.Error(), c)
		return
	}
	response.OkWithData(remdProject, c)
}
// GetMdProjectList 分页获取项目管理列表
// @Tags MdProject
// @Summary 分页获取项目管理列表
// @Security ApiKeyAuth
// @Accept application/json
// @Produce application/json
// @Param data query mdReq.MdProjectSearch true "分页获取项目管理列表"
// @Success 200 {object} response.Response{data=response.PageResult,msg=string} "获取成功"
// @Router /mdProject/getMdProjectList [get]
func (mdProjectApi *MdProjectApi) GetMdProjectList(c *gin.Context) {
    // 创建业务用Context
    ctx := c.Request.Context()

	var pageInfo mdReq.MdProjectSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	list, total, err := mdProjectService.GetMdProjectInfoList(ctx,pageInfo)
	if err != nil {
	    global.GVA_LOG.Error("获取失败!", zap.Error(err))
        response.FailWithMessage("获取失败:" + err.Error(), c)
        return
    }
    response.OkWithDetailed(response.PageResult{
        List:     list,
        Total:    total,
        Page:     pageInfo.Page,
        PageSize: pageInfo.PageSize,
    }, "获取成功", c)
}

// GetMdProjectPublic 不需要鉴权的项目管理接口
// @Tags MdProject
// @Summary 不需要鉴权的项目管理接口
// @Accept application/json
// @Produce application/json
// @Success 200 {object} response.Response{data=object,msg=string} "获取成功"
// @Router /mdProject/getMdProjectPublic [get]
func (mdProjectApi *MdProjectApi) GetMdProjectPublic(c *gin.Context) {
    // 创建业务用Context
    ctx := c.Request.Context()

    // 此接口不需要鉴权
    // 示例为返回了一个固定的消息接口，一般本接口用于C端服务，需要自己实现业务逻辑
    mdProjectService.GetMdProjectPublic(ctx)
    response.OkWithDetailed(gin.H{
       "info": "不需要鉴权的项目管理接口信息",
    }, "获取成功", c)
}
// GetProjectList 我的项目列表
// @Tags MdProject
// @Summary 我的项目列表
// @Accept application/json
// @Produce application/json
// @Param data query mdReq.MdProjectSearch true "成功"
// @Success 200 {object} response.Response{data=object,msg=string} "成功"
// @Router /mdProject/projectList [GET]
func (mdProjectApi *MdProjectApi)GetProjectList(c *gin.Context) {
    // 创建业务用Context
    ctx := c.Request.Context()
    // 请添加自己的业务逻辑
    err := mdProjectService.GetProjectList(ctx)
    if err != nil {
        global.GVA_LOG.Error("失败!", zap.Error(err))
   		response.FailWithMessage("失败", c)
   		return
   	}
   	response.OkWithData("返回数据",c)
}


