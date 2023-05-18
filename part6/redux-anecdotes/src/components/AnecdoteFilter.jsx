import { useDispatch } from "react-redux";
import { setFilter } from "../store/reducers/filterReducer";

const AnecdoteFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className="mb-2">
      filter{" "}
      <input
        onChange={handleChange}
        className="border-indigo-700 border rounded-md px-1"
      />
    </div>
  );
};

export default AnecdoteFilter;
