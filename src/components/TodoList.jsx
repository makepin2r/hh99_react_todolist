import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todos, removeTodo}) => {
    console.log("todos", todos)
    return(
        <div>
            {todos.map(item => <TodoItem key={item.id} todo={item} removeTodo={removeTodo}/>)}
        </div>
    );
}

export default TodoList