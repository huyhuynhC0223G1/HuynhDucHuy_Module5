import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"

export async function getListCustomer() {
    const resolve = await axios.get("/customers")
    return resolve.data;
}

export async function deleteCustomerById(id) {
    await axios.delete("/customers/" + id)
}

export async function createCustomer() {
    const resolve = await axios.post("/customers")
    return resolve.data;
}
export async function updateCustomer(id, customer) {
    const resolve = await axios.patch("/customers/" + id, customer)
    return resolve.data;
}
export async function getCustomerById(id) {
    const resolve = await axios.get("/customers/" + id)
    return resolve.data
}
