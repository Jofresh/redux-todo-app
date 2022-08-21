import { connect } from "react-redux";
import { setFilterAction } from "../store/filterActions";
import { filterSelector } from "../store/filterSelectors";

export function TodoFilter({ value, onChange }) {
  return (
    <div>
      <button disabled={value === null} onClick={() => onChange(null)}>
        All
      </button>
      <button disabled={value === true} onClick={() => onChange(true)}>
        Completed
      </button>
      <button disabled={value === false} onClick={() => onChange(false)}>
        To do
      </button>
    </div>
  );
}

export const TodoFilterStore = connect(
  (state) => ({
    value: filterSelector(state),
  }),
  (dispatch) => ({
    onChange: (value) => dispatch(setFilterAction(value)),
  })
)(TodoFilter);
