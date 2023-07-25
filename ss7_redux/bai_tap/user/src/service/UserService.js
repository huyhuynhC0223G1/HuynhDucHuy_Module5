import axios from "axios";

export const getListUser = async () => {
    const resolve = await axios.get('http://localhost:8080/users');
    return resolve.data;
}

export const deleteUser = async (id) => {
    const resolve = await axios.delete('http://localhost:8080/users/' + id);
    return resolve.data;
}
