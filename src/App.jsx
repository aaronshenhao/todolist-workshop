import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([ // React function
    {
      id: 1,
      title: "Buy Milk",
      done: false,
    },
    {
      id: 2,
      title: "Call Alistair",
      done: false,
    },
  ]);
  const [title, setTitle] = useState("");

  const createToDo = (e) => {
    e.preventDefault() // Prevent page refresh on click
    const lastTodoId = todos[todos.length - 1].id
    const newTodo = {
      id: lastTodoId + 1,
      title: title,
      done: false
    };
    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <form onSubmit={(e) => createToDo(e)}>
        <input 
          placeholder="Enter a new task"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value)
            console.log(title)
          }}></input>
        <button type="submit">New Entry</button>
      </form>
      <ul>
        {todos.map((task, i) => (
          <li key={task.id}>
            {i + 1}. {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
