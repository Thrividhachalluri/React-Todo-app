import styles from './Todoitem.module.css'
export default function TodoItem({item,setTodos,todos}){
    function deleteHandle(item){
     setTodos(todos.filter((Thrividha)=>Thrividha!== item)); 
    console.log("button clicked",item)
   }

   function handleClick(name){
   const newArray= todos.map((pretend)=>
      pretend.name===name
   ?{...pretend,done: !pretend.done}
      : pretend
   );
   setTodos(newArray);
   console.log(newArray);
 console.log("item clicked",name);
  
 
   }
   const className=item.done? styles.completed: ""
    return (
    <div className={styles.TodoItem}>
       <div className={styles.item}>
         <span className={className}onClick={()=>handleClick(item.name)}>{item.name}</span> 
         <span>
            <button onClick={()=>deleteHandle(item)}
            
             className={styles.deleteButton}>x</button>
            </span> 
            </div>
       <hr className={styles.line}/>
    </div>
    );
}