import React, { useContext } from 'react'
import TodoLayout from '@/layouts/todo';
import TodoItem from '@/components/TodoItem';
import TodoContext from '@/context/todo';

const All = () => {
    const todoContext = useContext(TodoContext);
    return (
        <>
            {todoContext.todoList.length !== 0 ? todoContext.todoList.map((item, index) => {
                return <TodoItem todoItem={{
                    ...item,
                    index
                }}
                    handleStatus={() => {
                        todoContext.setTodo('UPDATE', {
                            index
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

export default All;
All.Layout = TodoLayout;