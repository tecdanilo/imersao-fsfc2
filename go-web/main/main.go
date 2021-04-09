package main

import "net/http"

func handler(w http.ResponseWriter, r *http.Request) {
	fs := http.FileServer(http.Dir("static"))
	mux := http.NewServeMux()
	mux.Handle("/static/", http.StripPrefix("/static/", fs))
}

func main() {
	fs := http.FileServer(http.Dir("static"))
	mux := http.NewServeMux()
	mux.Handle("/", http.StripPrefix("/", fs))
	http.ListenAndServe(":8000", mux)
}
