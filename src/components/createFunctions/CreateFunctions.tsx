import React, {useEffect, useState} from 'react'
import {RootState} from '../../redux/store'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, removeTodo} from '../../redux/reducers/createFunctionsReducer'

export function CreateFunctions() {
   const dispatch = useDispatch()
   const todoList = useSelector((state: RootState) => state.todoReducer.todoList)
   const [inputValue, setInputvalue] = useState('')

   const handleChange = (e) => {
       setInputvalue(e.target.value)
   }

    const handleAddTodo = () => {
        dispatch(addTodo(inputValue))
        setInputvalue('')
    }

    const handleRemove = (item) => {
        dispatch(removeTodo(item))
    }

   return (
       <div>
          <h3>Create action, Create reducer</h3>
           <input placeholder={'...add todo'} value={inputValue} onChange={handleChange}/>
           <button onClick={handleAddTodo}>Add todo</button>
           <div style={{textAlign: 'center'}}>
               {todoList.map((item, index)=> {
                   return <p key={index} style={{display: 'flex', justifyContent: 'space-between', width: 400, margin: '15px auto'}}>
                       {item}
                       <button onClick={() => handleRemove(item)}>remove</button>
                   </p>
               })}
           </div>
       </div>
   )
}