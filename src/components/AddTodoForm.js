import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todosActions";

export function AddTodoForm() {
  const dispatch = useDispatch();
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.current.value === "") return;
    dispatch(addTodoAction(input.current.value));
    input.current.value = "";
    input.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task" ref={input} />
      <button>Add</button>
    </form>
  );
}
