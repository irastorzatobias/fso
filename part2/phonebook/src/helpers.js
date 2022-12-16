import axios from "axios";

export const getPersons = () => {
  return axios
    .get("http://localhost:3001/persons")
    .then((response) => response.data)
    .catch((e) => console.log(e));
};

export const createPerson = (person) => {
    return axios
        .post('http://localhost:3001/persons', {
            name: person.name,
            phone: person.phone
        })
        .then((response) => response)
        .catch((e) => console.log(e))
}

export const deletePerson = (id) => {
    return axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then((response => response))
    .catch((e) => console.log(e))
}

export const updatePerson = (id, person) => {
    return axios
    .put(`http://localhost:3001/persons/${id}`, {
        name: person.name,
        phone: person.phone
        })
    .then((response => response))
    .catch((e) => console.log(e))
}


