import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";
interface ITodoListProps{
    items: ITodo[];
    toggleTodo: (id:number) => void;
    removeTodo: (id:number) => void;
}
const TodoList: React.FC<ITodoListProps> = (props) =>{
    const {items, removeTodo, toggleTodo} = props;
    return(
        <div>
            {items.map((todo, index) => (
                <TodoItem
                    key = {todo.id}
                    toggleTodo = {toggleTodo}
                    removeTodo = {removeTodo}
                    index = {index + 1}
                    {...todo}/>
                ))
            }
        </div>
    );
};

export default TodoList;
