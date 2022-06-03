import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleComplete, editTodo } from "../features/todoSlice";
import { TrashIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import { forwardRef } from "react";
import { setSort } from "../features/sortSlice";

const TodoItem = forwardRef(({ id, text, completed }, ref) => {
  const [todos, { sort }] = useSelector((state) => [state.todos, state.sort])
  let complete = todos.filter(todo => todo.completed)

  const dispatch = useDispatch();
  const inputRef = useRef(true);

  console.log("text", typeof (text))

  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
    if (todos.length - 1 === complete.length && sort !== "all") {
      dispatch(setSort("completed"))
    } else if ( complete.length === 1 && todos.length > 0) {
      dispatch(setSort("active"))
    }
  };

  const handleDelete = () => {
    if (todos.length === 1) {
      dispatch(setSort("active"))
      dispatch(deleteTodo({ id: id }));
    } else {
      dispatch(deleteTodo({ id: id }));
    }
  };

  const handleUpdate = (id, value, e) => {
    if (e.which === 13) {
      dispatch(editTodo({ id, text: value }));
      inputRef.current.disabled = true;
    }
  };

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  return (
    <li ref={ref}
      className="rounded-lg bg-white bg-opacity-30 py-2 flex justify-between 
     items-center px-3 shadow-md shadow-gray-500">
      <span
        className={`flex items-center w-full font-mono text-md font-bold ${completed && "text-green-600 line-through"
          }`}>
        <input
          className="mr-4 w-4 h-4"
          type="checkbox"
          checked={completed}
          onChange={handleComplete}
        />
        <textarea
          onKeyDown={(e) => handleUpdate(id, inputRef.current.value, e)}
          className="w-full mr-4 px-2 my-2 rounded-lg bg-white focus:outline-none"
          defaultValue={text}
          ref={inputRef}
          disabled={inputRef}
          rows="2"
        />
      </span>
      <div onClick={changeFocus}
        className="btn">
        <PencilIcon className="h-7 w-7" />
      </div>
      <div className="btn--red">
        <TrashIcon
          className="w-7 h-7"
          onClick={handleDelete}
        />
      </div>
    </li>
  );
});

export default TodoItem;
