import React ,{useState, useEffect} from 'react';
import './App.css';
import Forms from './components/forms' ;
import todo from './components/todo';
import Todos from './components/todos' ;

function App() {
  const [inputItem, setinputItem] = useState(''); 
  const [todos, settodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filterTodos, setfilterTodos] = useState([]);
  
  useEffect(()=>{
    filterHandler();
  },[todos,status])

  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setfilterTodos(todos.filter((todo)=>todo.completed===true))
        break;
      case 'uncompleted':
        setfilterTodos(todos.filter((todo)=>todo.completed!==true))
        break;
      default:
        setfilterTodos(todos);
      }
  }
  return (
    <div className="App">
    <header>
      <h1> To Do List </h1>
    </header>
    <Forms inputItem={inputItem} todos={todos} settodos={settodos} 
    setinputItem={setinputItem}
    setstatus={setstatus}
    />
    <Todos 
    todos={todos} 
    inputItem={inputItem} 
    setinputItem={setinputItem}
    settodos={settodos}
    filterTodos={filterTodos}
    />
    </div>
  );
}

export default App;
