package md

import (
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type MdProjectRouter struct{}

func (s *MdProjectRouter) InitMdProjectRouter(Router *gin.RouterGroup, PublicRouter *gin.RouterGroup) {
	mdProjectRouter := Router.Group("mdProject").Use(middleware.OperationRecord())
	mdProjectRouterWithoutRecord := Router.Group("mdProject")
	mdProjectRouterWithoutAuth := PublicRouter.Group("mdProject")
	{
		mdProjectRouter.POST("createMdProject", mdProjectApi.CreateMdProject)
		mdProjectRouter.DELETE("deleteMdProject", mdProjectApi.DeleteMdProject)
		mdProjectRouter.DELETE("deleteMdProjectByIds", mdProjectApi.DeleteMdProjectByIds)
		mdProjectRouter.PUT("updateMdProject", mdProjectApi.UpdateMdProject)
	}
	{
		mdProjectRouterWithoutRecord.GET("findMdProject", mdProjectApi.FindMdProject)
		mdProjectRouterWithoutRecord.GET("getMdProjectList", mdProjectApi.GetMdProjectList)
	}
	{
		mdProjectRouterWithoutAuth.GET("getMdProjectPublic", mdProjectApi.GetMdProjectPublic)
		mdProjectRouterWithoutAuth.GET("projectList", mdProjectApi.GetProjectList)
	}
}
