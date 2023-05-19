import React, {useState} from "react";

const Form = ({ addTodo }, props) => {

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
            placeholder={
                props.language === 'us' ? 'Enter tasks ... ' : 'Nhập việc cần làm ...'
            }
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} />
            <input 
            placeholder={
                props.language === 'us' ? 'Due date ' : 'Ngày đến hạn'
            }
            onChange={(e) => setdueDate(e.target.value)} />
            <button>{ props.language === 'us' ? 'Submit' : 'Bấm' }</button>
        </form>
    );
};
  
export default Form;
  