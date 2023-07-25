import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/users";

export const getListUser = async () => {
    const resolve = await axios.get('/users');
    return resolve.data;
}
