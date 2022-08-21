export const UPDATE_FILTER = "update-filter";

export function filterReducer(state = null, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
