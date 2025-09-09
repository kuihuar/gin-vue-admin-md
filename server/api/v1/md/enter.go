package md

import "github.com/flipped-aurora/gin-vue-admin/server/service"

type ApiGroup struct{ MdProjectApi }

var mdProjectService = service.ServiceGroupApp.MdServiceGroup.MdProjectService
