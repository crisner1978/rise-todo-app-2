import React from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch(
      addTodo({
        text: input,
      })
    );
    setInput('')
  };
  return (
    <form className="max-w-lg flex space-x-2 items-center justify-center mx-auto px-10 pt-5">
      <input
        className="min-w-md w-full rounded-lg p-2 focus:outline-none bg-purple-100 font-mono text-lg"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
        value={input}
        type="text"
      />
      <button className="hover:scale-110 active:scale-95 transform transition-all ease-out duration-150" onClick={onSubmit} type="submit">
        <PlusCircleIcon className="h-10 w-10 text-purple-900/90 bg-purple-200 rounded-full" />
      </button>
    </form>
  );
};

export default TodoForm;
