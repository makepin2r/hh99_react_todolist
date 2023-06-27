# React로 Todolist 만들기

본 프로젝트는 항해99 리액트 1주차의 투두리스트 만들기 과제입니다.
[프로젝트 방문하기](https://hh99-react-todolist.vercel.app/)


![image](https://github.com/makepin2r/hh99_react_todolist/assets/39889583/affff13f-81f1-496c-aec0-f803f63d630a)

## 프로젝트 개요
### 컴포넌트 구조
```
node_modules/
public/
    assets/             : 이미지 파일 등 리소스 파일
    index.html
src/                    : 코드 파일
    components/         : 컴포넌트 파일 (jsx, css)    
        Button.jsx      : 공통 요소인 버튼 컴포넌트
        Template.jsx    : 레이아웃 담당 컴포넌트
        TodoInput.jsx   : 제목/설명 입력 및 저장하는 컴포넌트
        TodoItem.jsx    : 리스트에 출력되는 투두 컴포넌트
        TodoList.jsx    : TodoItem들이 모여 출력되는 컴포넌트
        Button.css
        Template.css
        TodoItem.css
        TodoList.css
    App.jsx
    App.css
    index.js
```
