import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"

export async function getListContracts(){
    const resolve = await axios.get("/contracts")
    return resolve.data;
}

export async function deleteContract(id){
    const resolve = await axios.delete("/contracts/" + id)
    return resolve.data;
}
export async function createContract(contract) {
    const resolve = await axios.post("/contracts", contract)
    return resolve.data;
}
export async function updateContract(id, contract) {
    const resolve = await axios.patch("/contracts/" + id, contract)
    return resolve.data;
}
export async function getContractById(id) {
    const resolve = await axios.get("/contracts/" + id)
    return resolve.data
}