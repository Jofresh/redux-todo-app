import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, toggleTodoAction } from "../store/todosActions";
import { filteredTodosSelector, todosSelector } from "../store/todosSelectors";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <span>{todo.title}</span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
}

export function TodoList() {
  const todos = useSelector(filteredTodosSelector);
  const dispatch = useDispatch();
  const onToggle = useCallback((todo) => {
    dispatch(toggleTodoAction(todo));
  }, []);
  const onDelete = useCallback((todo) => {
    dispatch(deleteTodoAction(todo));
  }, []);

  return (
    <div className="todo-list">
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

/**
export const TodoListStore = connect(
  (state) => ({
    todos: todosSelectors(state),
  }),
  (dispatch) => ({
    onToggle: (todo) => dispatch(toggleTodoAction(todo)),
  })
)(TodoList);
*/
