import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { addTodo } from '../features/todo/todoSlice';
import { v4 } from 'uuid';


const Form = () => {
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState('')

    const addTodoHandler = () => {
        const todo = {
            id: v4(),
            text: todoValue,
            completed: false,
        }
        dispatch(addTodo(todo));
        setTodoValue('');
    }

    return (
        <form onSubmit={e => e.preventDefault()} className="todo__task__input">
            <input 
                type="text" 
                value={todoValue}
                placeholder='add to do'
                onChange={(e) => setTodoValue(e.target.value)}
                />
            <button 
            type="submit"
            onClick={() => addTodoHandler()}
            >
            </button>
        </form>
    )
}

export default Form;