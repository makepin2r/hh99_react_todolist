import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    console.log("todos", todos)
    return(
        <div>
            {todos.map(item => <TodoItem key={item.id} todo={item}/>)}
        </div>
    );
}

export default TodoList