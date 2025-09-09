
package md

import (
	"context"
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/md"
    mdReq "github.com/flipped-aurora/gin-vue-admin/server/model/md/request"
)

type MdProjectService struct {}
// CreateMdProject 创建项目管理记录
// Author [yourname](https://github.com/yourname)
func (mdProjectService *MdProjectService) CreateMdProject(ctx context.Context, mdProject *md.MdProject) (err error) {
	err = global.GVA_DB.Create(mdProject).Error
	return err
}

// DeleteMdProject 删除项目管理记录
// Author [yourname](https://github.com/yourname)
func (mdProjectService *MdProjectService)DeleteMdProject(ctx context.Context, id string) (err error) {
	err = global.GVA_DB.Delete(&md.MdProject{},"id = ?",id).Error
	return err
}

// DeleteMdProjectByIds 批量删除项目管理记录
// Author [yourname](https://github.com/yourname)
func (mdProjectService *MdProjectService)DeleteMdProjectByIds(ctx context.Context, ids []string) (err error) {
	err = global.GVA_DB.Delete(&[]md.MdProject{},"id in ?",ids).Error
	return err
}

// UpdateMdProject 更新项目管理记录
// Author [yourname](https://github.com/yourname)
func (mdProjectService *MdProjectService)UpdateMdProject(ctx context.Context, mdProject md.MdProject) (err error) {
	err = global.GVA_DB.Model(&md.MdProject{}).Where("id = ?",mdProject.Id).Updates(&mdProject).Error
	return err
}

// GetMdProject 根据id获取项目管理记录
// Author [yourname](https://github.com/yourname)
func (mdProjectService *MdProjectService)GetMdProject(ctx context.Context, id string) (mdProject md.MdProject, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&mdProject).Error
	return
}
// GetMdProjectInfoList 分页获取项目管理记录
// Author [yourname](https://github.com/yourname)
func (mdProjectService *MdProjectService)GetMdProjectInfoList(ctx context.Context, info mdReq.MdProjectSearch) (list []md.MdProject, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
    // 创建db
	db := global.GVA_DB.Model(&md.MdProject{})
    var mdProjects []md.MdProject
    // 如果有条件搜索 下方会自动创建搜索语句
    
	err = db.Count(&total).Error
	if err!=nil {
    	return
    }

	if limit != 0 {
       db = db.Limit(limit).Offset(offset)
    }

	err = db.Find(&mdProjects).Error
	return  mdProjects, total, err
}
func (mdProjectService *MdProjectService)GetMdProjectPublic(ctx context.Context) {
    // 此方法为获取数据源定义的数据
    // 请自行实现
}

// GetProjectList 我的项目列表
// Author [yourname](https://github.com/yourname)
func (mdProjectService *MdProjectService)GetProjectList(ctx context.Context) (err error) {
	// 请在这里实现自己的业务逻辑
	db := global.GVA_DB.Model(&md.MdProject{})
    return db.Error
}


