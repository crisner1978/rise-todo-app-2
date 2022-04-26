import React from 'react'
import { useSelector } from 'react-redux'

const TodoCount = () => {
  const todos = useSelector((state) => state.todos)
  let count = todos.length
  let completed = todos.filter(todo => todo.completed)
  
  return (
    <div className='absolute top-0 right-0 text-gray-100 mt-1 mr-2 text-xs'>
      <p className='italic'>
        Total: <span className='text-pink-500 mr-2 animate-pulse'>{count} </span>Completed: <span className={`text-pink-500 ${completed.length !== 0 && "animate-pulse"}`}>{completed.length}</span>
      </p>
    </div>
  )
}

export default TodoCount