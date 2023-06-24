import { useState } from "react";
import "./App.css";
import Template from "components/Template";
import TodoList from "components/TodoList";

const App = () => {
    const  [todos, setTodos] = useState([
      {
        id: 1,
        text: "test",
        isDone: false
      },
      {
        id: 2,
        text: "test2",
        isDone: true
      }
    ])

    return (
        <Template>
            <TodoList todos={todos}/>
        </Template>
    );
};

export default App;
