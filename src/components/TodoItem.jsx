import React from 'react'

const TodoItem = ({todo, removeTodo}) => {
    const {id, text} = todo;
    return (
      <div>
        {text}
        <button onClick={() => {removeTodo(id)}}>삭제하기</button> 
        {/* 왜 화살표 함수로? 인자 받아줘야 해서? */}
        <button>완료</button>
      </div>
    );
  }

export default TodoItem