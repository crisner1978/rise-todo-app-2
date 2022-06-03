import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import FlipMove from 'react-flip-move'
import SortButtons from './SortButtons'


const TodoList = () => {
  const [todos, { sort }] = useSelector((state) => [state.todos, state.sort])
  console.log("status", todos)
  return (
    <>
      <SortButtons />
      <ul className='max-w-lg mx-auto py-8 px-5 bg-white bg-opacity-10 rounded-3xl shadow-lg'>

        {todos.length > 0 && sort === "active" && (
          <FlipMove className='space-y-2' typeName="ul">
            {todos.map(({ id, text, completed }) => {
              return (
                completed === false && (
                  <TodoItem key={id} text={text} id={id} completed={completed} />
                )
              )
            })}
          </FlipMove>)}

        {todos.length > 0 && sort === "completed" && (
          <FlipMove className='space-y-2' typeName="ul">
            {todos.map(({ id, text, completed }) => {
              return (
                completed === true && (
                  <TodoItem key={id} text={text} id={id} completed={completed} />
                )
              )
            })}
          </FlipMove>)}

        {todos.length > 0 && sort === "all" && (
          <FlipMove className='space-y-2' typeName="ul">
            {todos.map(({ id, text, completed }) => (
              <TodoItem key={id} text={text} id={id} completed={completed} />
            ))}
          </FlipMove>)}

        {todos.length === 0 && (
          <li className='text-xl text-white text-center'>Nothing left todo but add todos</li>
        )}

      </ul>
    </>

  )
}

export default TodoList