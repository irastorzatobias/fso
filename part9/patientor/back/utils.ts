import { NewPatient } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};


const parseStringField = (fieldValue: unknown, fieldName: string): string => {
  if (!fieldValue || !isString(fieldValue)) {
    throw new Error(`Incorrect or missing ${fieldName}: ${fieldValue}`);
  }
  return fieldValue;
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {

    throw new Error(`Incorrect date: ${date}`);
  }

  return date;
};

const toNewPatient = (object: unknown): NewPatient => {
  const patient = object as Partial<NewPatient>;

  if (!patient) {
    throw new Error('Incorrect or missing data');
  }

  return {
    name: parseStringField(patient.name, 'name'),
    dateOfBirth: parseDate(patient.dateOfBirth),
    ssn: parseStringField(patient.ssn, 'ssn'),
    gender: parseStringField(patient.gender, 'gender'),
    occupation: parseStringField(patient.occupation, 'occupation'),
  };
};

export { toNewPatient };
