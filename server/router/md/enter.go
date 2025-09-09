package md

import api "github.com/flipped-aurora/gin-vue-admin/server/api/v1"

type RouterGroup struct{ MdProjectRouter }

var mdProjectApi = api.ApiGroupApp.MdApiGroup.MdProjectApi
