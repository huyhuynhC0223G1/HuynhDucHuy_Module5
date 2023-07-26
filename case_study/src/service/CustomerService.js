import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"

export async function getListCustomer(){
    const resolve = await axios.get("/customers")
    return resolve.data;
}

export async function deleteCustomerById(id){
    const resolve = await axios.delete("/customers" + id)
    return resolve.data;
}