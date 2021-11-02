import React, { useState } from "react";
import Card from "./Card";
import List from "./List";
import './Todo.css'
import TodoForm from "./TodoForm";

function Todo() {

  const [items, setItems] = useState([])

 function onAddItem(item){
      setItems([...items,item])
 }

  return(
    <div className="container">
       
       <Card/>
        
        <TodoForm onAddItem={onAddItem} />
        
        <List items={items}/>
     
    </div>
  )
  
}



export default Todo;


