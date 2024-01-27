import {useState, useEffect, useRef} from "react";
import {ITodo} from "../types/data";
import TodoList from "./TodoLIst";

const App: React.FC = (props) =>{
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const addTodo = () =>{
        if (value){
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }


    }

    return(
        <div>
            <div>
                <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos}/>
        </div>
    );
};

export default App;
