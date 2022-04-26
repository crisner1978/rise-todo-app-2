import { BadgeCheckIcon, ViewListIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../features/sortSlice";

const SortButtons = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  let completed = todos.filter(todo => todo.completed)
  console.log("completed", completed)

  return (
    <div className='max-w-lg mx-auto flex justify-evenly py-4'>
      <button onClick={() => dispatch(setSort({ sort: "active" }))} className='flex items-center bg-yellow-500/90 p-1 px-4 shadow-lg rounded-full text-gray-100 font-semibold hover:scale-105 active:scale-95 transform transition-all ease-out duration-150'>Active<StarIcon className='w-6 h-6 ml-2' /></button>
      <button disabled={!completed.length} onClick={() => dispatch(setSort({ sort:"completed" }))} className={`${!completed.length ? "bg-gray-500 flex items-center  p-1 px-4 shadow-lg rounded-full text-gray-100 font-semibold " : "bg-green-500/80 flex items-center  p-1 px-4 shadow-lg rounded-full text-gray-100 font-semibold hover:scale-105 active:scale-95 transform transition-all ease-out duration-150"}`}>Complete<BadgeCheckIcon className='w-6 h-6 ml-2' /></button>
      
      <button onClick={() => dispatch(setSort({ sort: "all" }))} className='flex items-center bg-white bg-opacity-30 shadow-lg p-1 px-4 rounded-full text-gray-100 font-semibold hover:scale-105 active:scale-95 transform transition-all ease-out duration-150'>All<ViewListIcon className='w-6 h-6 ml-2' /></button>

    </div>
  )
}

export default SortButtons