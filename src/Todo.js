import React, { useState } from "react";
import './Todo.css'

function Todo() {

  const [text, seText] = useState('')
  const [items, setItems] = useState([])

  function handleChange(event){
      let t = event.target.value;
      seText(t)

  }

  function addItem(event){
    event.preventDefault();
    if(text){
      setItems([...items,text])
      seText('')
    }
    
  }

  return(
    <div className="container">
      <div className="card bg-primary mt-2 mb-3">
      
        <h1 className='text-white text-center'>Todo List</h1>
        
      </div>
      
      <form className='d-flex'>
        <input className="form-control w-50 " type="text" onChange={handleChange} value={text}>
        </input>
        <button className='btn btn-primary mx-3 ' onClick={addItem}> Add</button>
      </form>

      <ul className='list-group mt-3'>
        {items.map(item => (
        
          <li className='list-group-item w-50 mt-2'>{item}</li>
        ))}
      </ul>
     
    </div>
  )
  
}

export default Todo;


