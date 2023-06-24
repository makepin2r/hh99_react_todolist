import { useState } from "react";
import "./App.css";
import Template from "components/Template";
import TodoList from "components/TodoList";
import TodoInput from "components/TodoInput";


let nextID = 1; 
const App = () => {
    const  [todos, setTodos] = useState([])
    // 데이터의 형태
    // {
    //   id: 1,
    //   text: "test",
    //   isDone: false
    // }

    // 인풋에서 값 받아오는 함수
    const insertTodo = (val) => {
      if(val !== "") {
        console.log("isertTodo val", val);
        const todo = {
          id: nextID,
          text: val,
          isDone: false
        }
        console.log(todo)
        setTodos(todos => todos.concat(todo)); // 불변성을 지키기 위해서 push 대신 concat 사용
        ++nextID;
      }
    }

    return (
        <Template>
            <TodoInput insertTodo={insertTodo}/>
            <TodoList todos={todos}/>
        </Template>
    );
};

export default App;