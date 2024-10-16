import { v4 as uuidv4 } from "uuid";
import patientsData from "../../data/patients";
import { Patient, NonSensitivePatient, NewPatient } from "../types";

const patients: Patient[] = patientsData;

const getEntries = (): Patient[] => {
  return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  const id = uuidv4() as string;

  const newPatient = {
    id,
    ...entry,
  };

  patientsData.push(newPatient);

  return newPatient;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
};
