import TodoLayout from '@/layouts/todo'
import React, { useContext } from 'react'
import TodoContext from '@/context/todo'
import styles from '@/styles/Todo.module.css';

const Completed = () => {
    const todoContext = useContext(TodoContext)  
    return (
        <div>
            {todoContext.todoList.length !== 0 ? todoContext.todoList
            .filter(( item ) => item.status===true)
            .map((item) => {
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
Completed.Layout = TodoLayout

export default Completed;
