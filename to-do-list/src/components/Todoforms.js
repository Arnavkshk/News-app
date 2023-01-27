import React,{useState} from 'react'

function Todoforms(props) {
const[input,setInput]=useState('');

const handlechange = e=>{
    setInput(e.target.value);
}
const handlesubmit = e=>{
    e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input
    })
    setInput('');

}
  return (
    <div>
      <form className='todo-form'onSubmit={handlesubmit}>
        <input 
        type='text'
        placeholder='Add a To-Do'
        value={input}
        name='text'
        className='todo-inp'
        onChange={handlechange}
        />
        <button className='todo-button'>Add to-do</button>
      </form>
    </div>
  )
}

export default Todoforms;
