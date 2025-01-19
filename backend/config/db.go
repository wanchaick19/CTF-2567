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
		{Flag: "https://www.youtube.com/watch?v=6KgiGR_ngBc"},
		{Flag: "0be64ae89ddd24e225434de95d501711339baeee18f009ba9b4369af27d30d60"},
		{Flag: "295fddf4cfe33042da56b0f17cdecc64154d474b559a9521fbc7e15f4f029b98"},
		{Flag: "079-8-16457-0 K PLUS"},
		{Flag: "4LiB4LmH4LmE4LiU4LmJ4LmB4LiE4LmI4LmB4LiB4LmJ4LmC4LiI4LiX4Lii4LmM4LmB4Lil4Liw4LmE4Lih4LmI4LmE4LiU4LmJ4LmB4LiB4LmJ4Lic4LmJ4Liy4LmA4LiE4LmJ4Liy4Lir4Lij4Lit4LiBCgo="},
		{Flag: `"Shadow Tempest"12.345, 98.76503:00 (Local Time)Phantom SquadronDeploy EMPConfirm mission`},
		{Flag: "NVXOUExP2TTnlwuMySAFBQ=="},
	}

	for _, flag := range flags {
		db.FirstOrCreate(&flag, entity.Flags{Flag: flag.Flag})
	}

	for _, flag := range flags {
		db.FirstOrCreate(&flag, entity.Flags{Flag: flag.Flag})
	}

	// Insert default tags
	keys := []entity.Keys{
		{Key: "testflag"},
		{Key: "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAnzflxSue216vObudi4QozbXO7esQmCzHX96ay0Bx3LzK2vmmzL9M2GYDQN3DnUc7Hk6XvjfII0+kY/CeJLigRQIDAQABAkAqR5KpUBMIF9WaFBsa4EZhkeTYQvKOJl3vNFKQpJVX0xKvaaN9dIg19P5IOuPeetKkVcci+7IfeVLZgqMTrCthAiEA3YnQQuIZ4OzzaajS5A/v7NsHBwri5QeG+aVMptwBG9kCIQC3/Fpn4w4xHcDTJrpdBh2U2rMAPG6oXlrwhGVhabVATQIgfmeuDxuXjIFm+fi8LCjzyv/GaLxLbkb3OuaYb/TEJTECIH7WHY0Y3qPFmzT1seyHVsVTr6st/itcQN0mqK1rLmTRAiEAi52ESAWlIqOxhiQC0fChFL4VQ9kCOYLqfrnitE73HSE="}, // ของอาร์ม
		{Key: "-"}, //ไม่ใช้แล้ว
		{Key: "aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMTBmZjBJTXZfS1dQYnJOUThfWnFMcjBfSHN4dkVsZnhUbG56NTBLaDBJRFkvZWRpdD9naWQ9MCNnaWQ9MA=="},
		{Key: "4LiB4LmH4LmE4LiU4LmJ4LmB4LiE4LmI4LmB4LiB4LmJ4LmC4LiI4LiX4Lii4LmM4LmB4Lil4Liw4LmE4Lih4LmI4LmE4LiU4LmJ4LmB4LiB4LmJ4Lic4LmJ4Liy4LmA4LiE4LmJ4Liy4Lir4Lij4Lit4LiBCgo="},
		{Key: "CPE27ZAZA4537"},
		{Key: "kfJaP5jRCNyB7uglPY5Gcg=="},
	}

	for _, key := range keys {
		db.FirstOrCreate(&key, entity.Keys{Key: key.Key})
	}

}
