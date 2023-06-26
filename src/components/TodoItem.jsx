import React from "react";
import "./TodoItem.css"
import Button from "components/Button";

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
    const { id, title, desc, isDone } = todo;
    const deleteFunc = () => {
        removeTodo(id);
    }
    const toggleFunc = () => {
        toggleTodo(id);
    }
    return (
        <div className={`todo-item`}>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <Button classType={""} onClickFunc={deleteFunc} text="삭제하기"/>
                <Button classType={isDone ? "btn--cancel" : "btn--complete"} onClickFunc={toggleFunc} text={isDone ? "취소" : "완료"}/>
            </div>
        </div>
    );
};

export default TodoItem;
