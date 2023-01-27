import React,{useState} from 'react';
import Todoforms from './Todoforms';
import Todo from './Todo';

export default function List() {
    const [todos,setTodos]=useState([])
    const addtodo =todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newtodo =[todo, ...todos]
        setTodos(newtodo);
      };
    const updatetodo = (todoId,newValue)=>{
      if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
      }
      setTodos(prev=>prev.map(item =>(item.id===todoId ? newValue : item))
      );
    };

    const removetodo = id =>{
      const removeArr = [...todos].filter(todo=>todo.id !== id)

      setTodos(removeArr);
    };


    const completeTodo = id=>{
      let updatedtodos = todos.map(todo=>{
        if(todo.id===id){
          todo.iscomplete=!todo.iscomplete
        }
        return todo;
      });
      setTodos(updatedtodos);
    };

  return (
    <div>
      <h1>What's the plan today..?</h1>
      <Todoforms onSubmit={addtodo}/>
      <Todo todos={todos} completeTodo={completeTodo} removetodo={removetodo} updatedtodos={updatetodo}/>
    </div>
  )
}
