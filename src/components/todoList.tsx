import Todo from "../models/todo";

interface Props {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList = ({ todos, onDeleteTodo }: Props) => {
const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };

    return new Intl.DateTimeFormat("EU", options).format(new Date(dateString));
};

  return (
    <div>
      <h1>Todo List</h1>
      <h2>All my todo's</h2>
    <ul className="list-group">
        {todos.map((todo) => (
            <li className="list-group-item" key={todo._id}>
                {todo.title}
                {todo.date && <p>{formatDate(todo.date.toString())}</p>}
                <button
                    onClick={() => onDeleteTodo(todo._id)}
                    className="btn btn-danger"
                >
                    Delete this todo
                </button>
            </li>
        ))}
    </ul>
    </div>
  );
};

export default TodoList;
