import { ACTIONS } from "./todosReducer";

export const toggleTodoAction = (todo) => ({
  type: ACTIONS.UPDATE_TODO,
  payload: { ...todo, completed: !todo.completed },
});

export const deleteTodoAction = (todo) => ({
  type: ACTIONS.DELETE_TODO,
  payload: { id: todo.id },
});

export const addTodoAction = (title) => ({
  type: ACTIONS.ADD_TODO,
  payload: { title },
});
