
import React from 'react';
import Todo from './todo';

const todos =({todos,inputItem,setinputItem,settodos,filterTodos})=> {
  return(
    
        <div className="todo-container">
            <ul className="todo-list">
              {
               filterTodos.map((val)=>(
                 <Todo 
                 text={val.text}
                 todos={todos} 
                 val={val}
                 inputItem={inputItem} 
                 setinputItem={setinputItem}
                 settodos={settodos}
                 />
               ))
              }
            </ul>
        </div>
  );
}

export default todos;
