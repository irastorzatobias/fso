const PersonForm = ({handleSubmit, handleNameChange, handlePhoneChange}) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <div>
        name: <input onChange={handleNameChange} />
      </div>
      <div>
        phone: <input onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
