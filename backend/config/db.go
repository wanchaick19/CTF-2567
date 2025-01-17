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
		{Flag: "testflag"},
		{Flag: "testflag2"},
		{Flag: "cc26fe5e527612aef91542b11eaf501440ff6a03ef8ec20a358bfdf85d9f7813"},
		{Flag: "295fddf4cfe33042da56b0f17cdecc64154d474b559a9521fbc7e15f4f029b98"},
		{Flag: "079-8-16457-0 K PLUS"},
		{Flag: "4LiB4LmH4LmE4LiU4LmJ4LmB4LiE4LmI4LmB4LiB4LmJ4LmC4LiI4LiX4Lii4LmM4LmB4Lil4Liw4LmE4Lih4LmI4LmE4LiU4LmJ4LmB4LiB4LmJ4Lic4LmJ4Liy4LmA4LiE4LmJ4Liy4Lir4Lij4Lit4LiBCgo="},
		{Flag: "NVXOUExP2TTnlwuMySAFBQ=="},
	}

	for _, flag := range flags {
		db.FirstOrCreate(&flag, entity.Flags{Flag: flag.Flag})
	}

	// Insert default tags
	keys := []entity.Keys{
		{Key: "testflag"},
		{Key: "testflag2"},
		{Key: "key-ajanparin"},
		{Key: "aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMTBmZjBJTXZfS1dQYnJOUThfWnFMcjBfSHN4dkVsZnhUbG56NTBLaDBJRFkvZWRpdD9naWQ9MCNnaWQ9MA=="},
		{Key: "4LiB4LmH4LmE4LiU4LmJ4LmB4LiE4LmI4LmB4LiB4LmJ4LmC4LiI4LiX4Lii4LmM4LmB4Lil4Liw4LmE4Lih4LmI4LmE4LiU4LmJ4LmB4LiB4LmJ4Lic4LmJ4Liy4LmA4LiE4LmJ4Liy4Lir4Lij4Lit4LiBCgo="},
		{Key: "CPEZAZA4537"},
	}

	for _, key := range keys {
		db.FirstOrCreate(&key, entity.Keys{Key: key.Key})
	}

}
