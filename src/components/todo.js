import React from 'react';

const todo = ({text,todos,settodos,val}) => {
    
    const deleteList=()=>{
      settodos(todos.filter((ele)=>ele.id!==val.id));   
    }
//mapping for the items in jsx
    const completeHandler =()=>{
     settodos(todos.map((item)=>{
         if(item.id===val.id)
         return {
        ...item,completed: !item.completed
         }
         return item;
     }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${val.completed ? "completed" : "" }` }> {text} </li>
            <button onClick={completeHandler} className="complete-btn">
               <i className="fas fa-check blue-color"></i>  
            </button>
            <button onClick={deleteList} className="trash-btn">
               <i className="fas fa-trash blue-color/"></i>  
            </button>
        </div>
    );
}

export default todo;
