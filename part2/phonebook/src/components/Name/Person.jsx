const Person = ({ name, phone }) => {
  return (
    <div style={{display: 'flex', gap: '10px'}}>
      <p style={{margin: 0}}>{name}</p>
      <p style={{margin: 0}}>{phone}</p>
    </div>
  );
};

export default Person;
