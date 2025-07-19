 import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWRmMmEwNGZkYjRjYjFlOWExMjliZjkyNzE0MThlZiIsIm5iZiI6MTc0ODA3MTE0OC4wMDYsInN1YiI6IjY4MzE3MmVjMDg4OWQzYjRiNzQxMzhiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L-AQEQTG3UqmmNG4Ga2KC4ANoInHeQaAmQzXjbmyAnM'
  }
});

export default instance;