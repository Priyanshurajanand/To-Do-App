import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  markCompleted,
  markIncomplete,
  updateTodo,
} from "../redux/actions";
import { FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isHoveredDelete, setIsHoveredDelete] = useState(false);
  const [isHoveredEdit, setIsHoveredEdit] = useState(false);
  const [isHoveredMarkCompleted, setIsHoveredMarkCompleted] = useState(false);
  const [isHoveredMarkIncompleted, setIsHoveredMarkIncompleted] =
    useState(false);

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8 relative">
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded hover:bg-blue-600"
          onClick={() => {
            const newText = prompt("Enter the new text for the todo:");

            if (newText !== null) {
              dispatch(updateTodo({ id: index, text: newText }));
            }
          }}
          onMouseEnter={() => setIsHoveredEdit(true)}
          onMouseLeave={() => setIsHoveredEdit(false)}
        >
          <FiEdit />
          {isHoveredEdit && (
            <span className="absolute top-[-20px] left-0 text-black">
              Edit
            </span>
          )}
        </button>

        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded hover:bg-red-600 "
          onClick={() => dispatch(removeTodo(index))}
          onMouseEnter={() => setIsHoveredDelete(true)}
          onMouseLeave={() => setIsHoveredDelete(false)}
        >
          <FaTrash />
          {isHoveredDelete && (
            <span className="absolute top-[-20px] left-[50px] text-black">
              Delete
            </span>
          )}
        </button>

        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded hover:bg-green-600"
            onClick={() => dispatch(markCompleted(index))}
            onMouseEnter={() => setIsHoveredMarkCompleted(true)}
            onMouseLeave={() => setIsHoveredMarkCompleted(false)}
          >
            <FaCheck />
            {isHoveredMarkCompleted && (
              <span className="absolute top-[-40px] left-[60px] text-black">
                Mark Completed
              </span>
            )}
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded hover:bg-yellow-600"
            onClick={() => dispatch(markIncomplete(index))}
            onMouseEnter={() => setIsHoveredMarkIncompleted(true)}
            onMouseLeave={() => setIsHoveredMarkIncompleted(false)}
          >
            <FaTimes />
            {isHoveredMarkIncompleted && (
              <span className="absolute top-[-40px] left-[60px] text-black">
                Mark Incomplete
              </span>
            )}
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
