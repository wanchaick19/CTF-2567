package entity

import "gorm.io/gorm"

type Keys struct {
	gorm.Model
	Key string
}	
