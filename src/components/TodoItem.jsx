import React from "react";
import done from '../icons/done.svg';
import remove from '../icons/remove.svg';
import {useDispatch} from "react-redux";

import {completedTodo} from "../features/todo/todoSlice";
import {removeTodo} from "../features/todo/todoSlice";


const TodoItem = ({todo}) => {

  const dispatch = useDispatch();

  const completedTodoHandler = (id) => {
    dispatch(completedTodo(id));
  }

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id))
  }


  return (
    <li className={`todo__task__item ${todo.completed ? 'completed1' : ''}`}>
      <div className="left__part">
        <div className="line">
          <p className="number"></p>
          <p className="task">{todo.text}</p>
        </div>
        <div className="date">{new Date().toLocaleDateString()}</div>
      </div>
      <div className="right__part">
        <button className="done" onClick={() => completedTodoHandler(todo.id)}>
          <img src={done} alt="done"/>
        </button>
        <button className="remove" onClick={() => removeTodoHandler(todo.id)}>
          <img src={remove} alt="remove"/>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
