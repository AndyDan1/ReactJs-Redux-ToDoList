import React, {useState} from "react";
import "./App.scss";
import {useSelector, useDispatch} from "react-redux";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import useTheme from "./hooks/useTheme";
import clsx from "clsx";


function App() {
  const {isDark,setIsDark} = useTheme()
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch()

  const [showCompleted, setShowCompleted] = useState(false)
  const [showTodo, setShowTodo] = useState(false)
  const [showAll, setShowAll] = useState(true)

const handlerShowAll = () =>{
  setShowAll(true)
  setShowTodo(false)
  setShowCompleted(false)
}

const handlerShowCompleted = () =>{
  setShowAll(false)
  setShowTodo(false)
  setShowCompleted(true)
}
const handlerShowTodo = () =>{
  setShowAll(false)
  setShowTodo(true)
  setShowCompleted(false)
}

  const completedTasks = todos.filter(todo => todo.completed);
  const tasks = todos.filter(todo => !todo.completed);

  return (
    <section className="background">
      <div className="todo__body">
        <button className={clsx('btn_change',{
          light:isDark===false
        })}
        onClick={()=>setIsDark(!isDark)}
        >
          Change Theme
        </button>
        <div className="todo__header">
          <h2>ToDo List</h2>
          <Form/>
          <div className="todo__options">
            <div className="todo__counters">
              <p>todo:<span>{tasks.length}</span></p>
              <p>done:<span>{completedTasks.length}</span></p>
            </div>
            <div className="todo__options__buttons">
              <button onClick={() => handlerShowAll()} type="button">all</button>
              <button onClick={() => handlerShowCompleted()} type="button">done</button>
              <button onClick={()=>handlerShowTodo()} type="button">todo</button>
            </div>
          </div>
        </div>

        <ul className="todo__list">

        {showCompleted
          &&
          todos?.map(todo => (
            todo.completed
              ?
              <TodoItem
                key={todo.id}
                todo={todo}
              />
              :
              null
          ))
        }
        {showTodo
          &&
          todos?.map(todo => (
            !todo.completed
              ?
              <TodoItem
                key={todo.id}
                todo={todo}
              />
              :
              null
          ))
        }
        {showAll
          &&
          todos?.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))
        }
        </ul>


      </div>
    </section>
  )
}

export default App;
