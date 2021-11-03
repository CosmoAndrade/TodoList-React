import React from "react";




function DoneIng(props){

  if(props.done){
        return  ( <i class="bi bi-check-circle "></i>)
  }else{
    return   (<i class="bi bi-x-circle "></i>)
  }

}



function List (props){

    return(
        <>
            
      <ul className='list-group mt-3'>
        {props.items.map(item => (
        
          <li key='item.id'  id={item.done?'done':''} className='list-group-item w-50 mt-2'>
            {item.text}

            <button style={{marginLeft:15}} className='btn btn-success' onClick={()=>{props.onDone(item)}}>
              <DoneIng done={item.done}></DoneIng>
            </button>

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