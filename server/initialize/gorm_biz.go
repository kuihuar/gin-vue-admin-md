package initialize

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/md"
)

func bizModel() error {
	db := global.GVA_DB
	err := db.AutoMigrate(md.MdProject{})
	if err != nil {
		return err
	}
	return nil
}
