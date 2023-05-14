import todoListReducer from "./todolist";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoList: todoListReducer
})
export default rootReducer;
