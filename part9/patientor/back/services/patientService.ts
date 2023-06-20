import { NewPatient, Patient, PatientPreview } from '../types';
import patients from '../data/patients';
import { v1 as uuid } from 'uuid';

const getPatients = (): PatientPreview[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...entry,
  };

  patients.push(newPatient);

  return newPatient;
};

export { getPatients, addPatient };
