import React from 'react';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = (props) => {
    return (
        <div className={styles.todo_item} onClick={() => {
            props.handleStatus()
        }}>
            <input type="checkbox" checked={props.todoItem.status} onChange={() => {
                props.handleStatus()
            }}
                onClick={() => {
                    props.handleStatus()
                }}
            />
            <span className={props.todoItem.status ? styles.checked : ''}>{props.todoItem.title}</span>
        </div>
    )
}

export default TodoItem;