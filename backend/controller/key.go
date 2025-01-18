package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/tanapon395/sa-67-example/config"
)

func KeyLevel4(c *gin.Context) {

	// Define a struct to hold the result set
	var flag struct {
		Key 	string 			
	}

	// Get the database connection
	db := config.DB()

	results := db.Table("keys").
		Select("keys.key").
		Where("keys.id = 2 "). 
		Scan(&flag) 

	// Check for errors in the query
	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}

	// Return the results as JSON
	c.JSON(http.StatusOK, flag)
}