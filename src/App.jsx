import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] =useState(()=> 0);
  const [lists, setList] = useState(['one', 'two', 'three']);
  const [name, setName] = useState(()=>"four");
 const addName= () =>{
  setList([...lists,name]);
  setName("");
 }
  return (
    <>
    <div>
      <button onClick={() =>setCounter((counter)=>counter +1)}> +</button>
      <h1>{counter}</h1>
      <button onClick ={()=> setCounter((counter)=>counter -1)}> - </button>
    </div>
    <div>
      <ul>
          {lists.map((list)=>{
            return <li key={list}> {list} </li>
          })}
      </ul>
    </div>    
    <div>
      <input className='input' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button className='btn' onClick={() => addName()} >Add</button>      
      </div>
    </>
  )
}

export default App
