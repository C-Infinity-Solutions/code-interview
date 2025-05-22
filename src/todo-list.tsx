import React, { useEffect, useState } from "react";

import "./App.scss";

const ListItem = ({ content }: any) => {
  return <li className="todo-item">{content}</li>;
};

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [todoText, setTodoText] = useState('')
  const [time, setTime] = useState(new Date());

  const listWithDefaultItems = ['Buy milk', ...todos]

  const clearTodos = () => {
    setTodos([])
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="todo">
      <div className="todo_container">
        <ul className="todo--list">
          <ListItem content="Buy eggs" />
          {listWithDefaultItems.map(todo => {
            return <ListItem content={todo} />
          })}
        </ul>
      </div>
      <input placeholder="Add new To-do Item" onChange={(event) => {
        setTodoText(event.target.value)
      }} />
      <button onClick={() => {
        setTodos([...todos, todoText])
      }}>Add</button>
      <div>{time.toLocaleTimeString()}</div>
      <button onClick={() => clearTodos()}>Clear</button>
    </div>
  );
}

export default App;
