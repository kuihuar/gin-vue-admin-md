// 自动生成模板MdProject
package md

import (
	"time"

	"gorm.io/datatypes"
)

// 项目管理 结构体  MdProject
type MdProject struct {
	Id               *int32         `json:"id" form:"id" gorm:"primarykey;column:id;"`                                             //id字段
	Title            *string        `json:"title" form:"title" gorm:"column:title;size:255;"`                                      //项目全称
	ShortTitle       *string        `json:"short_title" form:"short_title" gorm:"column:short_title;size:100;"`                    //项目简称
	Client           *string        `json:"client" form:"client" gorm:"column:client;size:255;"`                                   //客户
	Location         *string        `json:"location" form:"location" gorm:"column:location;size:255;"`                             //项目位置
	ShortDescription *string        `json:"short_description" form:"short_description" gorm:"column:short_description;type:text;"` //项目描述
	FullDescription  *string        `json:"full_description" form:"full_description" gorm:"column:full_description;type:text;"`    //项目详细描述
	StartDate        *time.Time     `json:"start_date" form:"start_date" gorm:"column:start_date;"`                                //开始时间
	EndDate          *time.Time     `json:"end_date" form:"end_date" gorm:"column:end_date;"`                                      //结束时间
	Status           *string        `json:"status" form:"status" gorm:"column:status;"`                                            //项目状态
	Tags             datatypes.JSON `json:"tags" form:"tags" gorm:"column:tags;" swaggertype:"object"`                             //标签
	Images           datatypes.JSON `json:"images" form:"images" gorm:"column:images;" swaggertype:"array,object"`                 //项目图片
	CoverImageUrl    string         `json:"cover_image_url" form:"cover_image_url" gorm:"column:cover_image_url;"`                 //封面
	Video            string         `json:"video" form:"video" gorm:"column:video;"`                                               //视频
	Document         datatypes.JSON `json:"document" form:"document" gorm:"column:document;" swaggertype:"array,object"`           //项目文件
	Size             *string        `json:"size" form:"size" gorm:"column:size;size:100;"`                                         //平米数
	Value            *string        `json:"value" form:"value" gorm:"column:value;size:100;"`                                      //造价
	ViewCount        *int64         `json:"view_count" form:"view_count" gorm:"column:view_count;"`                                //浏览量
	DisplayOrder     *int64         `json:"display_order" form:"display_order" gorm:"column:display_order;"`                       //排序
	IsFeatured       *bool          `json:"is_featured" form:"is_featured" gorm:"column:is_featured;"`                             //is_featured
}

// TableName 项目管理 MdProject自定义表名 md_project
func (MdProject) TableName() string {
	return "md_project"
}
