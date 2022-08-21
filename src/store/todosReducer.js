let id = 6;
const initialState = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: true,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
  {
    id: 4,
    title: "Todo 4",
    completed: false,
  },
  {
    id: 5,
    title: "Todo 5",
    completed: false,
  },
  {
    id: 6,
    title: "Todo 6",
    completed: false,
  },
];

export const ACTIONS = {
  ADD_TODO: "add-todo",
  UPDATE_TODO: "update-todo",
  DELETE_TODO: "delete-todo",
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, { id: ++id, completed: false, ...action.payload }];
    case ACTIONS.UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
