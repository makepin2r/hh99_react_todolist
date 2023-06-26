import React, { useState } from "react";
import Button from "components/Button";
import "./TodoInput.css";

const TodoInput = ({ insertTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const changeTitleHandler = (e) => {
        setTitle(e.target.value);
    };
    const changeDescHandler = (e) => {
        setDesc(e.target.value);
    };
    const submitTodo = (e) => {
        e.preventDefault(); // form 내 submit 버튼이므로 새로고침되기 때문에 이를 방지함
        insertTodo(title, desc); // 값 넣어주기
        // 인풋 초기화
        setTitle("");
        setDesc("");
    };

    return (
        <div>
            <form onSubmit={submitTodo} className="input-box">
                <p>제목</p>
                <input value={title} onChange={changeTitleHandler} placeholder="제목을 입력해주세요" />
                <p>설명</p>
                <input value={desc} onChange={changeDescHandler} placeholder="설명을 입력해주세요" />
                <Button classType={""} text="Add" type="submit"/>
            </form>
        </div>
    );
};

export default TodoInput;
