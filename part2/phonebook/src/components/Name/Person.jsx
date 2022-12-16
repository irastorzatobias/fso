const Person = ({ name, phone, listId, deletePerson }) => {
  return (
    <div style={{display: 'flex', gap: '10px'}}>
      <p style={{margin: 0}}>{name}</p>
      <p style={{margin: 0}}>{phone}</p>
      <button onClick={() => deletePerson(listId)}>delete</button>
    </div>
  );
};

export default Person;
