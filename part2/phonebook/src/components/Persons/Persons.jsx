import Person from "../Name/Person";

const Persons = ({ persons, filter, handleDelete }) => {
  const personsFinal =
    filter !== ""
      ? persons.filter((p) =>
          p.name.toLowerCase().includes(filter.toLowerCase())
        )
      : persons;
  return (
    <>
      {personsFinal.length > 0 ? (
        personsFinal.map((p) => (
          <Person
            key={p.id}
            name={p.name}
            phone={p.number}
            listId={p.id}
            deletePerson={handleDelete}
          />
        ))
      ) : (
        <p>No people</p>
      )}
    </>
  );
};

export default Persons;
