const express = require("express");
const morgan = require("morgan");
const app = express();

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(express.json());
app.use(morgan('tiny'));

// app.use(requestLogger);

let persons = [
  {
    id: 1,
    name: "tobias",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.get("/", (request, response) => {
  response.send("<h1>Phonebook backend</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id) || 0;

  if (id === 0) {
    response.send("wrong parameter");
  }

  const person = persons.find((p) => p.id === id);

  if (person) {
    response.json(person);
  }

  response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id) || 0;

  if (id === 0) {
    response.send("wrong parameter");
  }

  persons = persons.filter((p) => p.id !== id);

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  let errorMessage = '';
  let newPerson = '';

  if (!body.name) {
    errorMessage = "name missing";
  } else if (!body.phone) {
    errorMessage = "phone missing";
  }

  if (!errorMessage) {
    const newName = request.body.name.toLowerCase();
    const newPhone = request.body.phone;
    const personNames = persons.map((p) => p.name.toLowerCase());

    if (personNames.includes(newName)) {
      errorMessage = "name already in bdd";
    } else {
      newPerson = {
        id: generateId(),
        name: newName,
        phone: newPhone,
      };

      persons = persons.concat(newPerson);
    }
  }

  if (errorMessage) {
    response.status(400).json({ error: errorMessage });
  } else {
    response.json(newPerson);
  }
});

app.get("/info", (request, response) => {
  let personsLength = persons.length;
  response.send(
    `<p>Phonebook has info for ${personsLength} people</p> ${new Date()}`
  );
});

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
