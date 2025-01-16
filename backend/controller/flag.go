package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/tanapon395/sa-67-example/config"
	"github.com/tanapon395/sa-67-example/entity"
)

// GET /genders
func ListFlags(c *gin.Context) {
	var flags []entity.Flags

	db := config.DB()

	db.Find(&flags)

	c.JSON(http.StatusOK, &flags)
}

func FlagAjanParin(c *gin.Context) {

	// Define a struct to hold the result set
	var flag struct {
		Flag 	string 			
	}

	// Get the database connection
	db := config.DB()

	results := db.Table("flags").
		Select("flags.flag").
		Where("flags.id = 3 "). 
		Scan(&flag) 

	// Check for errors in the query
	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}

	// Return the results as JSON
	c.JSON(http.StatusOK, flag)
}


func CheckAjanParin(c *gin.Context) {
	var request struct {
		Answer string `json:"Answer"` // ใช้ JSON tag สำหรับการแปลงค่าจาก JSON
	}

	// Bind JSON payload
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: " + err.Error()})
		return
	}

	// Define a struct to hold the result set from the database
	var flag struct {
		Flag string `json:"flag"`
	}

	// Get the database connection
	db := config.DB()

	// Query the database to get the correct answer
	if err := db.Table("flags").
		Select("flags.flag").
		Where("flags.id = ?", 3). 
		Scan(&flag).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve correct answer: " + err.Error()})
		return
	}

	// ตรวจสอบคำตอบ
	if request.Answer == flag.Flag {
		c.JSON(http.StatusOK, gin.H{
			"message": "correct", 
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "wrong",
	})
}

//========================================================== por ============================================================
func CheckKeyLevel5(c *gin.Context) {
	var request struct {
		Answer string `json:"KeyLevel6"` // ใช้ JSON tag สำหรับการแปลงค่าจาก JSON
	}

	// Bind JSON payload
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: " + err.Error()})
		return
	}

	// Define a struct to hold the result set from the database
	var flag struct {
		Flag string `json:"flag"`
	}

	// Get the database connection
	db := config.DB()

	// Query the database to get the correct answer
	if err := db.Table("flags").
		Select("flags.flag").
		Where("flags.id = ?", 4). 
		Scan(&flag).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve correct answer: " + err.Error()})
		return
	}

	// ตรวจสอบคำตอบ
	if request.Answer == flag.Flag {
		c.JSON(http.StatusOK, gin.H{
			"message": "correct", 
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "wrong",
	})
}

func GetkeyLevel5(c *gin.Context) {

	// Define a struct to hold the result set
	var flag struct {
		Key 	string 			
	}

	// Get the database connection
	db := config.DB()

	results := db.Table("keys").
		Select("keys.key").
		Where("keys.id = 4 "). 
		Scan(&flag) 

	// Check for errors in the query
	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}

	// Return the results as JSON
	c.JSON(http.StatusOK, flag)
}



func CheckKeyLevel6(c *gin.Context) {
	var request struct {
		Answer string `json:"Answer6"` // ใช้ JSON tag สำหรับการแปลงค่าจาก JSON
	}

	// Bind JSON payload
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: " + err.Error()})
		return
	}

	// Define a struct to hold the result set from the database
	var flag struct {
		Flag string `json:"flag"`
	}

	// Get the database connection
	db := config.DB()

	// Query the database to get the correct answer
	if err := db.Table("flags").
		Select("flags.flag").
		Where("flags.id = ?", 5). 
		Scan(&flag).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve correct answer: " + err.Error()})
		return
	}

	// ตรวจสอบคำตอบ
	if request.Answer == flag.Flag {
		c.JSON(http.StatusOK, gin.H{
			"message": "correct", 
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "wrong",
	})
}






func CheckKeyLevel62(c *gin.Context) {
	var request struct {
		Answer string `json:"Answer62"` // ใช้ JSON tag สำหรับการแปลงค่าจาก JSON
	}

	// Bind JSON payload
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: " + err.Error()})
		return
	}

	// Define a struct to hold the result set from the database
	var flag struct {
		Flag string `json:"flag"`
	}

	// Get the database connection
	db := config.DB()

	// Query the database to get the correct answer
	if err := db.Table("flags").
		Select("flags.flag").
		Where("flags.id = ?", 6). 
		Scan(&flag).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve correct answer: " + err.Error()})
		return
	}

	// ตรวจสอบคำตอบ
	if request.Answer == flag.Flag {
		c.JSON(http.StatusOK, gin.H{
			"message": "correct", 
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "wrong",
	})
}





func GetkeyLevelHelp6(c *gin.Context) {

	var Keys entity.Keys

	db := config.DB()

	results := db.Select("id, key").Where("id = ?", 5).Find(&Keys)

	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, Keys)
}


func CheckKeyLevel7(c *gin.Context) {
	var request struct {
		Answer string `json:"Answer7"` // ใช้ JSON tag สำหรับการแปลงค่าจาก JSON
	}

	// Bind JSON payload
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: " + err.Error()})
		return
	}

	// Define a struct to hold the result set from the database
	var flag struct {
		Flag string `json:"flag"`
	}

	// Get the database connection
	db := config.DB()

	// Query the database to get the correct answer
	if err := db.Table("flags").
		Select("flags.flag").
		Where("flags.id = ?", 7). 
		Scan(&flag).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve correct answer: " + err.Error()})
		return
	}

	// ตรวจสอบคำตอบ
	if request.Answer == flag.Flag {
		c.JSON(http.StatusOK, gin.H{
			"message": "correct", 
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "wrong",
	})
}