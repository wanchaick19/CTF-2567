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
