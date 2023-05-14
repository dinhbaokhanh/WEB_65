import React from 'react';
import styles from '@/styles/Todo.module.css';

const App = () => {
    return (
        <div className={styles.container_app}>
            <form>
                <input type="text" name="todoItem" />
                <button>ADD</button>
            </form>
            <div className={styles.tab_nav}>
                <ul>
                    <li>All</li>
                    <li>Active</li>
                    <li>Completed</li>
                </ul>
            </div>
            <div className={styles.show_todo_list}>
                <div className={styles.item}>
                    <input type="checkbox" />
                    <span>Todo item</span>
                </div>
            </div>
        </div>
    )
}

export default App;