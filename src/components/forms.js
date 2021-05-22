import React from 'react';
import todos from './todos';

const forms =({inputItem , todos ,settodos ,setinputItem,setstatus})=> {

  const inputChange=(e)=>{
    setinputItem(e.target.value);
  }
  const submited=(e)=>{
    e.preventDefault();
    settodos([
        ...todos, 
        {text:inputItem, completed: false, id:Math.random()*1000}
    ]);
    
    setinputItem('');
    
  };

  const statusHandler=(e)=>{
    setstatus(e.target.value);
  }

  return(
    <form>
      <input onChange={inputChange} type="text" className="todo-input" value={inputItem} placeholder="Add Item"/>
      <button onClick={submited} className="todo-button" type="submit">
        <i className="fas fa-plus-circle blue-color" ></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default forms;