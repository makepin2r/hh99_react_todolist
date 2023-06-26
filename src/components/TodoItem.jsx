import React from "react";
import "./TodoItem.css"
import "./Button.css"

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
    const { id, title, desc, isDone } = todo;
    return (
        <div className={`todo-item`}>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button className="btn" onClick={() => { removeTodo(id); }} > 삭제하기 </button>
                <button className={`btn ${isDone ? "btn--cancel" : "btn--complete"}`} onClick={() => { toggleTodo(id); }} > {isDone ? "취소" : "완료"} </button>
            </div>
        </div>
    );
};

export default TodoItem;
