package app

import (
    "github.com/GoogleCloudPlatform/go-endpoints/endpoints"
    "github.com/paulcadman/cost-logger-backend/costlogger"
)

func init() {
    if _, err := costlogger.RegisterService(); err != nil {
        panic(err.Error())
    }
    endpoints.HandleHTTP()
}
