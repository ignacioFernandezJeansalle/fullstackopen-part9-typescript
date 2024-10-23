import diagnosisData from "../../data/diagnosis";
import { Diagnosis } from "../types";

const diagnoses: Diagnosis[] = diagnosisData;

const getEntries = (): Diagnosis[] => {
  return diagnoses;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry,
};
