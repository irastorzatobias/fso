const filterAction = (text) => {
  return {
    type: "SET_FILTER",
    text: text,
  };
};

export default filterAction;