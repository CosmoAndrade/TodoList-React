import React from "react";


function List (props){

 

    return(
        <>
            
      <ul className='list-group mt-3'>
        {props.items.map(item => (
        
          <li key='item.id' className='list-group-item w-50 mt-2'>
            {item.text}
            <button style={{marginLeft:15}} className='btn btn-danger' onClick={()=> {props.onItemDelete(item)}}>
            <i class="bi bi-trash-fill" ></i>
            </button>
           
            </li>
        ))}
      </ul>
        
        </>
    )
}

export default List;