import { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import PersonForm from "./components/PersonForm/PersonForm";
import Persons from "./components/Persons/Persons";
import {
  getPersons,
  createPerson,
  deletePerson,
  updatePerson,
} from "./helpers";

const App = () => {
  const [persons, setPersons] = useState([]);

  const resetForm = (e) => {
    setNewName("");
    setNewPhone("");
    e.target.reset();
    getHook();
  };

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
    return persons.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = checkName(newName);
    let person = {};

    if (newPerson !== undefined) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        person = {
          name: newName,
          phone: newPhone,
        };
        handlePhoneUpdate(newPerson.id, person);
        resetForm(e);
        return;
      }
    }

    person = {
      name: newName,
      phone: newPhone,
    };

    postHook(person);
    resetForm(e);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDelete = (id) => {
    deletePerson(id);
    getHook();
  };

  const handlePhoneUpdate = (id, person) => {
    updatePerson(id, person);
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
      <Persons persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
