const voteAction = (id) => {
  return {
    type: "VOTE",
    id: id,
  };
};


export default voteAction;