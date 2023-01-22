import React,{useState} from 'react'
import {RiCloseCircleLine}from 'react-icons/ri'
import {TiEdit}from 'react-icons/ti'
import Todoforms from './Todoforms';

function Todo({todos,completeTodo,removetodo,updatetodo}) {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    });

const SubmitUpdate = value=>{
    updatetodo(edit.id,value);
    setEdit({
        id:null,
        value:''
    });
};
 
if(edit.id){
    return<Todoforms edit={edit} onSubmit={SubmitUpdate}/>
}

  return todos.map((todo,index)=>(
    <div className={todo.iscomplete ? 'todo-row complete':'todo-row'} key={index}>
        <div key={todo.id} onClick={()=>completeTodo(Todo.id)}>todo.text</div>
        <div className="icons">
            <RiCloseCircleLine onClick={()=>removetodo(todo.id)}className='delete-icon'/>
            <TiEdit onClick={()=>setEdit({id: todo.id, value: todo.text})}className='edit-icon'/>
        </div>
    </div>
  ))
}

export default Todo
