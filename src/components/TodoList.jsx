import TodoItem from "./TodoItem"
import styles from './Todolist.module.css'
export default function TodoList({todos,setTodos}){
    const sortedTodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return(
        <div className={styles.todocard}>
             {sortedTodos.map((item)=>(
            <TodoItem 
            key={item.item} 
            item={item}
             todos={todos} 
             setTodos={setTodos}/>
              ))}
        </div>
    );
}