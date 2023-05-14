import TodoContext from '@/context/todo';
import TodoLayout from '@/layouts/todo';
import React, { useContext } from 'react'
import styles from '@/styles/Todo.module.css';

const All = () => {
    const todoContext = useContext(TodoContext)
    return (
        <div>
            {todoContext.todoList.length !== 0 ? todoContext.todoList.map((item) => {
                return (
                    <div className={styles.item} >
                        <input type='checkbox' 
                        defaultChecked = {item.status}
                        onClick={() => {todoContext.setTodoList(item.todoName)}}/>
                        <span>{item.todoName}</span>
                    </div>
                )
            }) : <>Chưa có gì</>
            }
        </div>
    )
}

All.Layout = TodoLayout;
export default All;