package entity

import "gorm.io/gorm"

type Flags struct {
	gorm.Model
	Flag string `json:"Flag"`
}	
