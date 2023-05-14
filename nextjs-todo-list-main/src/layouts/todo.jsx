import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { uuid } from '@/utils';
import TodoContext from '@/context/todo';
import styles from '@/styles/Todo.module.css';

const TodoLayout = ({ children }) => {
    const router = useRouter();
    const [todoList, setTodoList] = useState([]);
    const handleTodoList = useCallback((action, data) => {
        switch (action) {
            case 'UPDATE':
                todoList[data.index].status = !todoList[data.index].status;
                setTodoList([...todoList]);
                break;
            default:
                break;
        }
    }, [todoList]);
    const [newTodo, setNewTodo] = useState({
        title: '',
        status: false,
        id: uuid()
    })
    return (
        <TodoContext.Provider value={{ todoList, setTodo: handleTodoList }}>
            <div className={styles.todo_layout}>
                <form className={styles.form_add} onSubmit={(e) => {
                    e.preventDefault();
                    todoList.push(newTodo)
                    setTodoList([...todoList]);
                    setNewTodo({
                        title: '',
                        status: false,
                        id: uuid()
                    })
                    router.push({
                        pathname: router.basePath,
                        query: {
                            q: newTodo.title
                        }
                    })
                }}>
                    <input type="text" name="nameTodo" placeholder="New task..." value={newTodo.title} onChange={(e) => {
                        setNewTodo({
                            ...newTodo,
                            title: e.target.value
                        })
                    }} />
                    <button className={styles.btn_add}>ADD</button>
                </form>
                <div className={styles.all_content}>
                    <div className={styles.tab}>
                        <ul>
                            <li className={router.pathname === '/todo/all' ? styles.active : ''}><Link href={'all'} >ALL</Link></li>
                            <li className={router.pathname === '/todo/active' ? styles.active : ''}><Link href={'active'} >ACTIVE</Link></li>
                            <li className={router.pathname === '/todo/completed' ? styles.active : ''}><Link href={'completed'} >COMPLETED</Link></li>
                        </ul>
                    </div>
                </div>
                {children}
            </div >
        </TodoContext.Provider>
    )
}

export default TodoLayout;