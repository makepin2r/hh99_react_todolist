import React from 'react'

const TodoItem = ({todo}) => {
    const {id, text} = todo;
    console.log(id)
    console.log(text)
    return (
      <div>{text}</div>
    );
  }

export default TodoItem