import axios from "axios";

const rawBaseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const baseURL = rawBaseURL.replace(/\/$/, "").endsWith("/api")
  ? rawBaseURL.replace(/\/$/, "")
  : `${rawBaseURL.replace(/\/$/, "")}/api`;

const API = axios.create({
  baseURL,
});

export const getBooks = () => API.get("/books");
export const getBookById = (id) => API.get(`/books/${id}`);
export const createBook = (bookData) => API.post("/books", bookData);
export const updateBook = (id, bookData) => API.put(`/books/${id}`, bookData);
export const deleteBook = (id) => API.delete(`/books/${id}`);

export default API;
