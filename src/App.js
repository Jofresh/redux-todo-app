import { Provider } from "react-redux";
import store from "./store";

import { TodoList } from "./components/TodoList";
import { TodoFilterStore } from "./components/TodoFilter";
import { AddTodoForm } from "./components/AddTodoForm";

export default function App() {
  return (
    <Provider store={store}>
      <AddTodoForm />
      <TodoFilterStore />
      <TodoList />
    </Provider>
  );
}
