import React, { useContext } from 'react';
import TodoContext from '@/context/todo';
import TodoLayout from '@/layouts/todo';
import TodoItem from '@/components/TodoItem';

const Active = () => {
    const todoContext = useContext(TodoContext);
    const todoItemActive = todoContext.todoList.filter((item) => item.status === false);
    return (
        <>
            {todoContext.todoList.length !== 0 ? todoItemActive.map((item, index) => {
                return <TodoItem todoItem={{
                    ...item,
                    index
                }}
                    handleStatus={() => {
                        todoContext.setTodo('UPDATE', {
                            index: todoContext.todoList.findIndex(it => it.id === item.id)
                        })
                    }}
                    key={item.id}
                />
            })
                : <>Empty</>
            }
        </>
    )
}

export default Active;
Active.Layout = TodoLayout;