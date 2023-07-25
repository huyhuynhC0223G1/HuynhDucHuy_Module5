import axios from "axios";

export async function getListBook() {
    const resolve = await axios.get("http://localhost:8081/books")
    return resolve.data;
}
export async function createNewBook(book) {
    const resolve = await axios.post("http://localhost:8081/books/", book)
    return resolve.data;
}
export async function deleteBook(id) {
    const resolve = await axios.delete("http://localhost:8081/books/" + id)
    return resolve.data;
}

export async function updateBook(id, book) {
    const resolve = await axios.patch("http://localhost:8081/books/" + id, book)
    return resolve.data;
}
export async function getBookById(id) {
    const resolve = await axios.patch("http://localhost:8081/books/" + id)
    return resolve.data;
}
