import diagnosisData from "../../data/diagnosis";
import { Diagnosis } from "../types";

const diagnosis: Diagnosis[] = diagnosisData;

const getEntries = (): Diagnosis[] => {
  return diagnosis;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry,
};
