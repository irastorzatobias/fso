import Person from "../Name/Person";

const Persons = ({persons, filter}) => {
    const personsFinal = filter !== '' ? persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase())) : persons;
    return (
        <>
        {personsFinal ? personsFinal.map((p) => <Person key={p.name} name={p.name} phone={p.phone}/>) : []}
        </>
    )
}

export default Persons;