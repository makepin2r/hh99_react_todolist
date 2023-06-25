import { useState } from "react";
import "./App.css";
import Template from "components/Template";
import TodoList from "components/TodoList";
import TodoInput from "components/TodoInput";

let nextID = 1;
const App = () => {
    const [todos, setTodos] = useState([]);
    // 데이터의 형태
    // {
    //   id: 1,
    //   title: "title"
    //   text: "test",
    //   isDone: false
    // }

    // 인풋에서 값 받아오는 함수
    const insertTodo = (title, desc) => {
        if (title !== "" && desc !== "") {
            console.log("insertTodo", title, desc);
            const todo = {
                id: nextID,
                title: title,
                desc: desc,
                isDone: false,
            };
            setTodos((todos) => todos.concat(todo)); // 불변성을 지키기 위해서 push 대신 concat 사용
            ++nextID;
        }
    };

    // 투두 완료 토글 함수
    const toggleTodo = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: !todo.isDone };
                } else {
                    return todo;
                }
            })
        );
    };

    // 투두 아이템 삭제 함수
    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    return (
        <Template>
            <TodoInput insertTodo={insertTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </Template>
    );
};

export default App;
