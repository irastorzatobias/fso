import { PatientPreview } from '../types';
import patients  from '../data/patients';



const getPatients = (): PatientPreview[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

// const getPatients = (): PatientPreview[] => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   return patients.map(({ssn, ...rest}) => rest);
// };


export { getPatients };