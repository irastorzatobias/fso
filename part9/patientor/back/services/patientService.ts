import { Entry, Gender, NewPatient, Patient, PatientPreview } from '../types';
import patients from '../data/patients';
import { v1 as uuid } from 'uuid';

const getPatients = (): PatientPreview[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender: gender as Gender,
    occupation,
  }));
};

const getPatient = (id: string): Patient | undefined => {
  const foundPatient = patients.find((patient) => patient.id === id);

  return foundPatient
    ? {
      ...foundPatient,
      gender: foundPatient.gender as Gender,
      entries: foundPatient.entries as Entry[],
    }
    : undefined;
};

const addPatient = (entry: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...entry,
    entries: [],
  };

  patients.push(newPatient);

  return newPatient;
};

export { getPatients, getPatient, addPatient };
