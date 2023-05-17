  const filterReducer = (state = "", action) => {
    switch (action.type) {
      case "SET_FILTER":
        return action.text.trim();
      default:
        return state;
    }
  };

  export default filterReducer;
