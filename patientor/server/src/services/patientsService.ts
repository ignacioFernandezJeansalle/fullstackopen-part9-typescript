import { v4 as uuidv4 } from "uuid";
import patientsData from "../../data/patients";
import { Patient, NonSensitivePatient, NewPatient, Message } from "../types";

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

const getPatient = (id: string): Patient | Message => {
  const patient = patients.find((p) => p.id === id);

  if (!patient) return { message: "Error: Patient not found..." };

  return patient;
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
  getPatient,
  addPatient,
};
