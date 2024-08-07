
export default function ListItem({itemData, deleteTodo}) {
  return (
    <li className="p-2 bg-zinc-200 mb-2 rounded flex">
        <span className="text-slate-950">{itemData.content}</span>
        <button onClick={() => deleteTodo(itemData.id)} className="ml-auto bg-red-600 w-6 h-6 rounded 
        text-zinx-200 text-slate-950">X</button>
    </li>
     
    
  )
}
