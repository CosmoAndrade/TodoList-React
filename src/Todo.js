import React, { useState } from "react";
import Card from "./Card";
import List from "./List";
import './Todo.css'
import TodoForm from "./TodoForm";
import Item from './Item'

function Todo() {

  const [items, setItems] = useState([])

 function onAddItem(text){

      let it = new Item(text)

      setItems([...items,it])
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


