import React from 'react';

import './App.css';
// import { Usuario } from './usuario';
import { Todo } from './todo';
import { TodoForm } from './form';

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className='app'>
     <div className='todo-list' >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} /> 
        <hr></hr>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Usuario />
//       <Usuario />
//       <Usuario />
//       <Usuario />
//     </div>
//   );
// }
