import React from "react";
import { useState } from "react/cjs/react.development";


function TodoForm(props){

            
    const [text, seText] = useState('')
   

      function handleChange(event){
        let t = event.target.value;
        seText(t)

    }

    function addItem(event){
      event.preventDefault();
      if(text){
      props.onAddItem(text)
        seText('')
      }
      
    }

  return(
    <>
    
    <form className='d-flex'>
      <input className="form-control w-50 " type="text" onChange={handleChange} value={text}>
      </input>
      <button className='btn btn-primary mx-3 ' onClick={addItem}> Add</button>
    </form>
    
    </>


  )
}

export default TodoForm;