import React, {useState} from "react";

const Form = ({ addTodo }) => {

    const [newTodo, setNewTodo] = useState('');
    const [dueDate, setdueDate] = useState('');

    const handleSubmit = (event) => {
        if (newTodo.trim()) {
            addTodo({
                id: Date.now(),
                text: newTodo,
                done: false,
                date: dueDate
            });
            setNewTodo('');
        }
    };


    return (
        <form className="form" onClick={handleSubmit}>
            <input 
            placeholder="Enter task ..." 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} />
            <input 
            placeholder="Due date" 
            onChange={(e) => setdueDate(e.target.value)} />
            <button>Submit</button>
        </form>
    );
};
  
export default Form;
  