import React from "react";


function List (props){
    return(
        <>
            
      <ul className='list-group mt-3'>
        {props.items.map(item => (
        
          <li className='list-group-item w-50 mt-2'>{item}</li>
        ))}
      </ul>
        
        </>
    )
}

export default List;