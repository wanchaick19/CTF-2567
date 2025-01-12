package entity

import "gorm.io/gorm"

type User struct {
	gorm.Model
	UserName  				string 		`json:"UserName"`
	Keys					string		`json:"Keys"`
}