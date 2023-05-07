import React, {useState} from "react";
import qs from 'query-string'

const TodoList = ({todos, toggleCompleted}) => {
  const [showNotFinishedOnly, setShowNotFinishedOnly] = useState(false);
  const params = qs.parse(window.location.search);
  const show = params.withDone === '1';
  
  const handleCheck = (e) => {
    setShowNotFinishedOnly(e.target.checked)
  }

  let filtered = todos;
  if(showNotFinishedOnly){
    filtered = todos.filter((todo) => !todo.done)
  }
  if(show){
    filtered = todos.filter((todo) => todo.done)
  }

  return (
    <>
      <div className="todo-list-container">
        {filtered.map((todo, index) => (
          <div className="todo-item-container">
            <div 
            key={todo.id}
            style={{textDecoration: todo.done ? 'line-through' : 'none', cursor: "pointer"}}
            onClick={() => toggleCompleted(index)}
            >
              <div className="item-title">
                <span>{todo.text}</span>
                <span>{todo.dueDate}</span>
              </div>
              {!showNotFinishedOnly}
            </div>
          </div>
        ))}
      </div>
      <label style={{marginLeft: 10}}>
        <input type="checkbox" checked={showNotFinishedOnly} onChange={handleCheck}/> Not finished only
      </label>
    </>
    
  );
};

export default TodoList;