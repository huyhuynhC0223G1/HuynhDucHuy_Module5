import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"

export async function getListContracts(){
    const resolve = await axios.get("/contracts")
    return resolve.data;
}

export async function deleteContracts(id){
    const resolve = await axios.delete("/contracts" + id)
    return resolve.data;
}