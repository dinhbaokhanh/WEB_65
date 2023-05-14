import { createContext } from "react";
const TodoContext = createContext({
    todoList: [],
    setTodo: () => {
    }
});
export default TodoContext;