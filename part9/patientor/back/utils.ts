import { Entry, Gender, NewPatient } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
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

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error(`Gender error: ${gender}`);
  }

  return gender;
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
    gender: parseGender(patient.gender),
    occupation: parseStringField(patient.occupation, 'occupation'),
    entries: [] as Entry[],
  };
};

export { toNewPatient };
