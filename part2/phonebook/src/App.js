import { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";
import Persons from "./components/Persons/Persons";
import { getPersons, createPerson } from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([]);

  const getHook = () => {
    (async () => {
      let res = await getPersons();
      setPersons(res);
    })();
  };

  useEffect(() => {
    getHook();
  }, []);

  const postHook = async (person) => {
    await createPerson(person);
  };

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

    const person = {
      name: newName,
      phone: newPhone,
    };

    postHook(person);
    getHook();
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
      <Filter handleFilter={handleFilter} />
      <PersonForm
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
