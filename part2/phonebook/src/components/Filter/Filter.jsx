const Filter = ({ handleFilter }) => {
  return (
    <form
      onSubmit={handleFilter}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "1rem",
      }}
    >
      <input onChange={handleFilter} />
      <div>
        <button type="submit">search by name</button>
      </div>
    </form>
  );
};

export default Filter;
