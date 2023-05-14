import React, { useState } from 'react';
import styles from '@/styles/Todo.module.css';
import Link from 'next/link';
import TodoContext from '@/context/todo';

const TodoLayout = (props) => {
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState({
        todoName: '',
        status: false,
    })

    const handleTodoList = (todoName) => {
        setTodoList(todoList.map((item) =>
            item.todoName === todoName ? { ...item, status: !item.status } : item
        ))
    };
    
    const handelSubmit = (e) => {
        e.preventDefault();
        todoList.push(task);
        setTodoList([...todoList]);
    }
    return (
        <TodoContext.Provider value={{ todoList, setTodoList: handleTodoList}}>
            <div className={styles.container_app}>
                <form onSubmit = {handelSubmit}>
                    <input type="text" value={task.todoName} name="todoItem" onChange={(e) => {
                        setTask({
                            ...task,
                            todoName: e.target.value
                        })
                    }}/>
                    <button>ADD</button>
                </form>
                <div className={styles.tab_nav}>
                    <ul>
                        <li><Link href={'/todo/all'}>All</Link></li>
                        <li><Link href={'/todo/active'}>Active</Link></li>
                        <li><Link href={'/todo/completed'}>Completed</Link></li>
                    </ul>
                </div>
                <div className={styles.show_todo_list}>
                    {/* <div className={styles.item}>
                        <input type="checkbox" />
                        <span>Todo item</span>
                    </div> */}
                    {props.children}
                </div>
            </div>            
        </TodoContext.Provider>
    )
}

export default TodoLayout