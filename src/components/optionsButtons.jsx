import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { showAllTodo } from '../features/todo/todoSlice';
import { showCompletedTodo } from '../features/todo/todoSlice';

const OptionsButtons = () => {
    const dispatch = useDispatch();

    const showAllTodoHandler = () => {
        dispatch(showAllTodo())
    }

    const showCompletedTodoHandler = () => {
        dispatch(showCompletedTodo())
    }
    return (
        <div className="todo__options__buttons">
            <button onClick={() => showAllTodoHandler()} type="button">all</button>
            <button onClick={() => showCompletedTodoHandler()} type="button">done</button>
            <button type="button">todo</button>
        </div>
    )
}

export default OptionsButtons;