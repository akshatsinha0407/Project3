 import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWRmYTMwYWVhZjUwOWMxOTU5M2Q3OTU5MTM0NTc1YiIsIm5iZiI6MTc0ODI3MTg1Ny45Miwic3ViIjoiNjgzNDgyZjE3M2ZjM2EwOTM5YjZiOTFlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TzizS6nvdLAxAZ_QqzNSf_hSOUVHxSYdgLZdrMEvD9s'
  }
});

export default instance;