
import './App.css';

import Todo from './components/Todo';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
const [todo,setTodo] = useState([])


useEffect(() => {

    console.log(todo)
  
}, [todo])
  return (
    <>

    <div className='w-full h-screen flex justify-center items-center'>
    
    
    <Todo todo = {todo} setTodo ={setTodo}/>

    </div>
    
    </>
  );
}

export default App;
