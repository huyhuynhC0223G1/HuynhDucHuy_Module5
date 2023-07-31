import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"

export async function getListService() {
    const resolve = await axios.get("/services")
    return resolve.data;
}



export async function deleteServiceById(id) {
    const resolve = await axios.delete("/services/" + id)
    return resolve.data;
}
export async function createService(service) {
    const resolve = await axios.post("/services", service)
    return resolve.data;
}
export async function updateService(id, service) {
    const resolve = await axios.patch("/services/" + id, service)
    return resolve.data;
}
export async function getServiceById(id) {
    const resolve = await axios.get("/services/" + id)
    return resolve.data
}

// type server
export async function getListTypeService() {
    const resolve = await axios.get("/Type_Service")
    return resolve.data;
}
export async function getTypeServiceById(id) {
    const resolve = await axios.get("/Type_Service/" + id)
    return resolve.data;
}