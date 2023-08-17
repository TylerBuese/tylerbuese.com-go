package routes

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/tylerbuese/tylerbuese.com/handlers"
)

func Routes() http.Handler {
	mux := chi.NewRouter()
	mux.Get("/status", handlers.Status)
	return mux
}
