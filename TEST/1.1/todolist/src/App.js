import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {

  const [todos, setTodos] = useState([]);
  const [numUndone, setNumUndone] = useState(0);
  const [language, setLanguage] = useState("us");

  useEffect(() => {
    setNumUndone(todos.filter((todo) => !todo.done).length);
  }, [todos]);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(store);
  }, []);

  const addTodo = (todo, date) => {
    setTodos([...todos, todo]);
    localStorage.setItem('todos', JSON.stringify([...todos, todo]))
  }

  const toggleCompleted = (clickedIndex) => {
    setTodos(
      todos.map((todo, index) =>
        index === clickedIndex ? { ...todo, done: !todo.done } : todo
      )
    );
    localStorage.setItem('todos', JSON.stringify([...todos]));
  };

  const changeLanguage = () => {
    setLanguage(language === 'us' ? 'vn' : 'us');
  }

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader language={language} numUndone={numUndone}/>
        <TodoList language={language} todos={todos} toggleCompleted={toggleCompleted}/>
        <Form language={language} addTodo={addTodo}/>
      </div>
      <Footer language={language} onLanguageChange={changeLanguage}/>
    </div>
  );
};
