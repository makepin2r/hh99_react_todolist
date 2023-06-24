import React from 'react'

const TodoItem = ({todo}) => {
    const {text} = todo;
    console.log(text)
    return (
      <div>{text}</div>
    );
  }

export default TodoItem