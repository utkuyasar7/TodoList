
import { useState } from "react"
function Todo ({todo,setTodo}){
const [todoTitle,setTodoTitle]= useState("")
const [error,setError] = useState()


function addTodo() {
    if (!todoTitle) {
        setError(true)
        return
      }
    
    const newTodo = {
      title: todoTitle,
      active: true
    };

    
    setTodo([...todo, newTodo]);
   
    
    
    
    setError(false)
    setTodoTitle("")
  }

function removeTodo(index){
    const newTodoList = todo.filter((el,i) => i!==index)
    setTodo(newTodoList)
}

function markTodoItemDone(index) {
    const newTodoList = todo.map((el, i) => {
      if (i === index) {
        return {
          ...el,
          active: !el.active
        }
      }
      return el;
    });
    setTodo(newTodoList);
  }
  function handleKeyDown(event) {
    if (event.keyCode === 13) { // Enter tuşuna basıldığında
      addTodo();
    }
  }
  

    return(
        <>
        {error==true &&(

<div className="p-4 mb-4 w-1/3 flex justify-center top-12 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 absolute" role="alert">
<span className="font-medium">Uyarı:</span> Lütfen bir Todo başlığı giriniz!
</div>
        )}
<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
  <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
    <div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
          Add
        </button>
      </div>
    </div>
    <div>
        {todo.map((el,index)=>(
            <div className="flex mb-4 items-center">
            {el.active &&(
                <>
                <p className="w-full text-grey-darkest">
                {el.title}
              </p>
              <button onClick={()=> markTodoItemDone(index)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
              Done
            </button>
            </>
            )}
            {!el.active &&(
                <>
                
                <p class="w-full line-through text-green">{el.title}</p>
                <button onClick={()=> markTodoItemDone(index)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
              Not Done
            </button>
                </>
            )}
            
            
            <button onClick={() => removeTodo(index)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
              Remove
            </button>
          </div>

        ))}
      
      
      
    </div>
  </div>
</div>

        </>
    )
}



export default Todo