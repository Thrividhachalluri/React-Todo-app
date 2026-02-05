import { useState } from "react";
import styles from './Form.module.css'
export default function Form({todos,setTodos}){

 const[todo,setTodo]=useState({name:"",done:false});


function eventHandler(e){
 e.preventDefault();
 setTodos([...todos,todo]);
setTodo({name:"",done:false});  
}
  return( 

<form  className={styles.formContainer} 
onSubmit={eventHandler} >

  <div className={styles.container}>
            
<input className={styles.input}
onChange={(e)=>setTodo({name:e.target.value, Done:false})}
 type="text"
value={todo.name}
placeholder="enter to do list..."
/>
<button  className={styles.addButton} type="submit">add</button>
 </div>
 </form>
 );
}
        
        
       