import axios from "axios";

class TodoService {
    http = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    //Getall todos
    async getTodos() {
        return this.http.get("/todos");
    }

    //Create a todo

    //Delete a todo
}

export default new TodoService();