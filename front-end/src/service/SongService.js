import axios from "axios";

export async function getListSong() {
    const res = await axios.get("http://localhost:8080/song")
    return res.data;
}
export  async function searchSong(name){
    const res = await axios.get("http://localhost:8080/song?name_like=" + name)
    return res.data;
}

export async function createSong(song) {
    const res = await axios.post("http://localhost:8080/song", song)
    return res.data;
}

export async function updateStatus(id) {
    const res = await axios.put("http://localhost:8080/song/" + id)
    return res.data;
}

export async function deleteSong(id) {
    const res = await axios.delete("http://localhost:8080/song/" + id)
    return res.data;
}

// export  async function getSongById(id){
//     const res = await axios.get("http://localhost:8080/song/"+id)
//     return res.data;
// }