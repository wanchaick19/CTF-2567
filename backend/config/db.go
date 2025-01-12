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
	)

		// Insert default tags
		flags := []entity.Flags{
			{Flag: "testflag"},

		}
	
		for _, flag := range flags {
			db.FirstOrCreate(&flag, entity.Flags{Flag: flag.Flag})
		}
	
}
