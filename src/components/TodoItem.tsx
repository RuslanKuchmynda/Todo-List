import {ITodo} from "../types/data";

interface ITodoItem extends ITodo{
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    index: number
}
const TodoItem: React.FC<ITodoItem> = (props) =>{
    const {id, title, complete, removeTodo, toggleTodo, index} = props

    return(
        <div className='m-auto w-[500px]'>
            <div className='flex justify-center items-center border-b border-t m-1'>
                <p className='px-3 text-2xl'>{index})</p>
                <input className='' type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
                <p className='w-[400px] p-2 text-2xl'>{title}</p>
                <button className='text-4xl' onClick={() => removeTodo(id)}>X</button>
            </div>
        </div>
    );
};

export default TodoItem;
