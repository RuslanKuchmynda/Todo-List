import React, {useState, useEffect, useRef} from "react";
import {ITodo} from "../types/data";
import TodoList from "./TodoLIst";

const App: React.FC = (props) =>{
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])
    const inputRef = useRef<HTMLInputElement>(null)


    const addTodo = (): void =>{
        if (value){
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }
    }
    const removeTodo = (id: number): void =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleTodo = (id: number): void =>{
        setTodos(todos.map((todo) =>{
            if(todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) =>{

        if (e.key === 'Enter'){
            addTodo()
        }
    }

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }, []);
    return (
        <div>
            <div className='flex flex-col items-center border-b p-1'>
                <h1 className='font-medium text-4xl italic tracking-tight'>Add Task</h1>
                <input className='border-2 rounded-md outline-1 p-[5px]' value={value} onChange={handleChange} onKeyDown={handleKeyDown} type="text" ref={inputRef}/>
                <button className='p-y-[5px] border-2 w-20 rounded-md mt-1' onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};

export default App;
