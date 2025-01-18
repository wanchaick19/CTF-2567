package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/tanapon395/sa-67-example/config"
	"github.com/tanapon395/sa-67-example/controller"
)

const PORT = "8000"

func main() {

	// open connection database
	config.ConnectionDB()

	// Generate databases
	config.SetupDatabase()

	r := gin.Default()

	r.Use(CORSMiddleware())

	r.PUT("/checkflaglevel3", controller.ChecFlagLevel3) // 3

	r.GET("/keylevel4", controller.KeyLevel4) //4

	r.PUT("/checkflaglevel4", controller.ChecFlagLevel4) //4

	r.GET("/lv1-encrypted-text", controller.GetLV1EncryptedText)

	r.PUT("/lv1-check-ans", controller.Lv1CheckAns)

	r.GET("/get-key-level5", controller.GetkeyLevel5) // 5

	r.PUT("/check-key-level5", controller.CheckKeyLevel5)

	r.GET("/get-key-level6", controller.GetkeyLevelHelp6) // 6

	r.PUT("/check-key-level62", controller.CheckKeyLevel62)

	r.PUT("/check-help-level6", controller.CheckKeyLevel6)

	r.PUT("/check-key-level7", controller.CheckKeyLevel7)//7

	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)
	})

	// Run the server

	r.Run("localhost:" + PORT)

}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
