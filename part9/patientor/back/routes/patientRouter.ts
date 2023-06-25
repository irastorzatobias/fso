import express from 'express';
import { addPatient, getPatient, getPatients } from '../services/patientService';
import { toNewPatient } from '../utils';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.send(getPatients());
});

patientRouter.get('/:id', (req, res) => {
  res.send(getPatient(req.params.id));
});

patientRouter.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);

    const addedPatient = addPatient(newPatient);

    res.json(addedPatient);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({'error': error.message});
    }
  }
});

export default patientRouter;
