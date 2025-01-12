package config

import (
	"fmt"

	"github.com/tanapon395/sa-67-example/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func ConnectionDB() {
	database, err := gorm.Open(sqlite.Open("sa.db?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println("connected database")
	db = database
}

func SetupDatabase() {

	db.AutoMigrate(
		&entity.Flags{},
		&entity.Keys{},
		&entity.User{},
	)

		// Insert default tags
		flags := []entity.Flags{
			{Flag: "testflag"},{Flag: "testflag2"},{Flag: "cc26fe5e527612aef91542b11eaf501440ff6a03ef8ec20a358bfdf85d9f7813"},
		}
	
		for _, flag := range flags {
			db.FirstOrCreate(&flag, entity.Flags{Flag: flag.Flag})
		}

		// Insert default tags
		keys := []entity.Keys{
			{Key: "testflag"},{Key: "testflag2"},{Key: "key-ajanparin"},

		}
	
		for _, key := range keys {
			db.FirstOrCreate(&key, entity.Keys{Key: key.Key})
		}
	
}
