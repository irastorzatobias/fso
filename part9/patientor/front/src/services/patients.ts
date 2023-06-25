import axios from "axios";
import { Diagnose, Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async (): Promise<Patient[]> => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};

const getPatient = async (id: string): Promise<Patient> => {
  const { data } = await axios.get<Patient>(
    `${apiBaseUrl}/patients/${id}`
  )

  return data;
}

const getDiagnoses = async (): Promise<Diagnose[]> => {
  const { data } = await axios.get(
    `${apiBaseUrl}/diagnoses`
  )
  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll, getDiagnoses, getPatient, create
};

