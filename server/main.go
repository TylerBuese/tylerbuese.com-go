package main

import (
	"log"
	"net/http"

	"github.com/tylerbuese/tylerbuese.com/routes"
)

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
