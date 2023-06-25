import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ title, todos, removeTodo, toggleTodo }) => {
    console.log("todos", todos);
    return (
        <div>
            <h2>{title}</h2>
            {todos.map((item) => (
                <TodoItem key={item.id} todo={item} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            ))}
        </div>
    );
};

export default TodoList;
