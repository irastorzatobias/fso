import { useState } from "react";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";
import Persons from "./components/Persons/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "3585329897" },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");


  const checkName = (name) => {
    return persons.some((person) => person.name === name);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkName(newName)) {
      alert(`${newName} already exists in phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, phone: newPhone }));
    setNewName("");
    setNewPhone("");
    e.target.reset();
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
      <PersonForm
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  );
};

export default App;
