import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"

export async function getListService(){
    const resolve = await axios.get("/services")
    return resolve.data;
}

export async function deleteServiceById(id){
    const resolve = await axios.delete("/services" + id)
    return resolve.data;
}