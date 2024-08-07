import { useState } from "react"
import {nanoid} from "nanoid"
import ListItem from "./components/ListItem";

function App() {

  const [toDoList, setToDoList] = useState([
    {id:nanoid(5), content:"item 1"},
    {id:nanoid(5), content:"item 2"},
    {id:nanoid(5), content:"item 3"},
  ])

  const [todo, setToDo] = useState("");

  const [showValidation, setShowValidation] = useState(false);

  function deleteTodo(id){
    setToDoList(toDoList.filter(todo => todo.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(todo === ""){
      setShowValidation(true);
      return
    }
    setToDoList([...toDoList,  {id:nanoid(), content : todo}]);
    setToDo("");
    setShowValidation(false);
  }

  return (
    <>
      <div className="h-screen ">
        <div className="max-w-4x1mx-auto pt-20 px-6">
          <h1 className="text-xl text-slate-100 mb-4">
            La To-Do Liste
            <form onSubmit={handleSubmit} className="mb-10">
              <label htmlFor="todo-item" 
              className="text-slate-50">
                Ajouter une chose à faire
              </label>
              <input 
              value={todo}
              onChange={(e) => setToDo(e.target.value)}
              type="text" 
              className="mt-1 block w-full rounded text-slate-950" />
              {showValidation && 
              <p className="text-red-700 mt-3 ml-2 mr-2">Ajouter d'abord du contenu à votre tâche</p>}
              <button className="text-slate-950 ml-2 mr-2 mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
                Ajouter 
              </button>
            </form>
            {( toDoList.length === 0 && 
                  <p className="text-slate-50 text-md ml-2 mr-2 ">
                    Pas d'items à afficher...
                  </p>
              )}

            <ul>
               {toDoList.length > 0 && 
               toDoList.map(item => (
                <ListItem key={item.id} itemData={item} 
                deleteTodo={deleteTodo} />
              ))}
            </ul>
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
