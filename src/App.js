import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStaus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;    
    }
  }

  //Use effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);


  return (
    <div className="App">
      <header>
      <h1>Todo List.v2</h1>
    </header> 
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStaus}
     
      />
      <TodoList 
      filteredTodos={filteredTodos} 
      setTodos={setTodos} 
      todos={todos}

      />
    </div>
  );
}

export default App;
