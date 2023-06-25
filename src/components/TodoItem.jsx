import React from "react";

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
    const { id, title, desc, isDone } = todo;
    return (
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button
                onClick={() => {
                    removeTodo(id);
                }}
            >
                삭제하기
            </button>
            {/* 왜 화살표 함수로? 인자 받아줘야 해서? */}
            <button onClick={() => {
                    toggleTodo(id);
                }}
            >
                {isDone ? "취소" : "완료"}
            </button>
        </div>
    );
};

export default TodoItem;
