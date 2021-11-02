import React from "react";


function List (props){
    return(
        <>
            
      <ul className='list-group mt-3'>
        {props.items.map(item => (
        
          <li key='item.id' className='list-group-item w-50 mt-2'>{item.text}</li>
        ))}
      </ul>
        
        </>
    )
}

export default List;