import { createSelector } from "reselect";
import { filterSelector } from "./filterSelectors";

export const todosSelector = ({ todos }) => todos;

// no rerender if todos and filtered are the same
export const filteredTodosSelector = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    if (filter === null) return todos;
    return todos.filter((todo) => todo.completed === filter);
  }
);

/*
export const filteredTodosSelector = ({ todos, filter }) => {
  if (filter === null) return todos;
  return todos.filter((todo) => todo.completed === filter);
};
*/
