import { useDispatch } from "react-redux";
import { updateFilter } from "../reducers/filterReducer";

function Filter() {
  const dispatch = useDispatch();

  function handleFilterChange(event) {
    dispatch(updateFilter(event.target.value));
  }

  const style = {
    marginTop: 10,
    marginBottom: 10,
  };

  return (
    <div style={style}>
      Filter <input onChange={handleFilterChange}></input>
    </div>
  );
}

export default Filter;
