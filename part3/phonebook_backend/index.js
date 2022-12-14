const morgan = require('morgan');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


app.use(morgan(function (tokens, req, res) {
	return [
		tokens.method(req, res),
		tokens.url(req, res),
		tokens.status(req, res),
		tokens.res(req, res, 'content-length'), '-',
		JSON.stringify(req.body),
		tokens['response-time'](req, res), 'ms'
	].join(' ');
}));

let phones = [
	{
		id: 1,
		name: 'Arto Hellas',
		phone: '040-123456',
	},
	{
		id: 2,
		name: 'Ada Lovelace',
		phone: '39-44-5323523',
	},
	{
		id: 3,
		name: 'Dan Abramov',
		phone: '12-43-234345',
	},
	{
		id: 4,
		name: 'Mary Poppendieck',
		phone: '39-23-6423122',
	},
];

const generateId = () => {
	return Math.max(...phones.map((p) => p.id)) + 1;
};

const checkIfPhoneExists = (p) => {
	return phones.some((phone) => phone.phone === p);
};

const checkIfNameExists = (name) => {
	return phones.some(
		(phone) => phone.name.toLowerCase() === name.toLowerCase()
	);
};

app.get('/api/phonebook', (response, request) => {
	request.send(phones);
});

app.get('/api/phonebook/:id', (request, response) => {
	const phonebookId = Number(request.params.id);
	const phone = phones.find((phone) => phone.id === phonebookId);

	phone
		? response.send(phone)
		: response.status(400).json({ error: 'Not found' });
});

app.get('/info', (request, response) => {
	const phonebookLength = phones.length;
	const result = `<p>Phonebook has info for ${phonebookLength} people<p>`;
	response.send(result);
});

app.delete('/api/phonebook/:id', (request, response) => {
	const idNumber = Number(request.params.id);
	phones = phones.filter((phone) => phone.id !== idNumber);

	response.status(204).end();
});

app.post('/api/phonebook', (request, response) => {
	if (!request.body.name || !request.body.phone) {
		return response.status(400).json({
			error: 'missing required field(s)',
		});
	}

	if (checkIfPhoneExists(request.body.phone)) {
		return response.status(409).json({
			error: 'phone already exists',
		});
	}

	if (checkIfNameExists(request.body.name)) {
		return response.status(409).json({
			error: 'name already exists',
		});
	}

	const newPerson = {
		id: generateId(),
		name: request.body.name,
		phone: request.body.phone,
	};

	phones = phones.concat(newPerson);

	response.send(newPerson);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
