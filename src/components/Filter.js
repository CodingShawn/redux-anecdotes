import { connect } from "react-redux";
import { updateFilter } from "../reducers/filterReducer";

function Filter(props) {
  function handleFilterChange(event) {
    props.updateFilter(event.target.value);
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

const mapDispatchToProps = {
  updateFilter,
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
