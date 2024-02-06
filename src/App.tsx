import { useEffect, useState } from "react";
import TodoList from "./components/todoList";
import Todo from "./models/todo";
import todoService from "./services/api_service";
import NewTodo from "./components/newTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await todoService.getAll();
    setTodos(todos);
  };

  const deleteTodo = async (id: string) => {
    await todoService.delete(id);
    loadTodos();
  };

  const addTodo = async (title: string) => {
    const newTodo = await todoService.create(title);
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      <NewTodo onAddTodo={addTodo} />
    </>
  );
}

export default App;