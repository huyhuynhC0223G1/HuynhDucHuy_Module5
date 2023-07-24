import axios from "axios";

export async function getListBook() {
    const resolve = await axios.get("http://localhost:8081/books")
    return resolve.data;
}
export async function createNewBook(book) {
    const res = await axios.post("http://localhost:8081/books/", book)
    return res.data;
}
export async function deleteBook(id) {
    const res = await axios.delete("http://localhost:8081/books/" + id)
    alert("You confirm you want to delete?")
    return res.data;
}

export async function updateBook(id, book) {
    const res = await axios.patch("http://localhost:8081/books/" + id, book)
    return res.data;
}
