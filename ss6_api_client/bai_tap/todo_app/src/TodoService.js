import axios from "axios";

export async function getListTodo(){
    const resolve= await axios.get("http://localhost:8080/todoList")
    return resolve.data;
}

export async function createTodo(todo){
    const resolve= await axios.post("http://localhost:8080/todoList", todo)
    
}