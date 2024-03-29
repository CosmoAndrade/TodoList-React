import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import List from "./components/List";
import './Todo.css'
import TodoForm from "./components/TodoForm";
import Item from './components/Item'

const SALVED_ITEMS = 'salvedItems'

function Todo() {

  const [items, setItems] = useState([])

  useEffect(()=>{
      let salvedItems = JSON.parse(localStorage.getItem(SALVED_ITEMS))
      if(salvedItems){
        setItems(salvedItems)
      }
  },[]);

  useEffect(()=>{
      localStorage.setItem(SALVED_ITEMS,JSON.stringify(items))
  },[items])



 function onAddItem(text){

      let it = new Item(text)

      setItems([...items,it])
 }


 function onItemDelete(item){
     let  filteredItems = items.filter(it => it.id != item.id)
      setItems(filteredItems)
 }

 function onDone(item){
     let  updatedItems = items.map(it=>{
        if(it.id === item.id){
          it.done = !it.done;
        }
        return it;
      })

      setItems(updatedItems)
 }

  return(
    <div className="container">
       
       <Card/>
        
        <TodoForm onAddItem={onAddItem} />
        
        <List onDone={onDone} onItemDelete={onItemDelete} items={items}/>
     
    </div>
  )
  
}



export default Todo;


