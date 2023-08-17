package main

import (
	"log"
	"net/http"
	"time"

	"github.com/tylerbuese/tylerbuese.com/routes"
)

type Status struct {
	StartTime time.Time
	Events    []Event
}

type Event struct {
	EventDate time.Time
	EventText string
}

func main() {
	serv := &http.Server{
		Addr:    ":8080",
		Handler: routes.Routes(),
	}

	err := serv.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}
