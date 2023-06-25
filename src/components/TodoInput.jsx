import React, {useState} from 'react'

const TodoInput = ({insertTodo}) => {
    const [value, setValue] = useState("");
    const changeValueHandler = (e) => {
        setValue(e.target.value);
    }
    const submitTodo = (e) => {
        e.preventDefault(); // form 내 submit 버튼이므로 새로고침되기 때문에 이를 방지함
        insertTodo(value); // 값 넣어주기
        setValue(""); // 인풋 초기화
    }

    return (<div>
        <form onSubmit={submitTodo}>
            <input value={value} onChange={changeValueHandler} placeholder='제목을 입력해주세요...'/>
            <button type="submit">Add</button>
        </form>
    </div>);
}

export default TodoInput