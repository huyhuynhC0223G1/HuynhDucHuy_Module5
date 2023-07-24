import axios from "axios";
export function getListTodo(){
    const getTodot= axios.get("http://localhost:8080/todoList")
    return getTodot.data;
}