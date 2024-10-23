import { Diagnosis, Patient } from "../../types";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import patientService from "../../services/patients";
import diagnosisService from "../../services/diagnoses";
import { Box, Divider, Typography } from "@mui/material";
import GenderIcon from "./GenderIcon";
import Entries from "./Entries";

const PatientDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    if (id) {
      const fetchPatientById = async () => {
        const patient = await patientService.getById(id);
        setPatient(patient);
      };
      void fetchPatientById();
    }
  }, [id]);

  useEffect(() => {
    const fecthDiagnosis = async () => {
      const diagnoses = await diagnosisService.getAll();
      setDiagnoses(diagnoses);
    };
    void fecthDiagnosis();
  }, []);

  if (!patient)
    return (
      <Typography variant="h4" style={{ marginBlock: "0.5em" }}>
        Not found...
      </Typography>
    );

  return (
    <Box component="section" marginBlock="32px">
      <Typography variant="h4" gutterBottom display="flex" alignItems="center" columnGap="8px">
        {patient.name}
        <GenderIcon gender={patient.gender} />
      </Typography>

      <Typography>SSN: {patient.ssn}</Typography>
      <Typography>Occupation: {patient.occupation}</Typography>

      <Divider />

      <Entries patient={patient} diagnoses={diagnoses} />
    </Box>
  );
};

export default PatientDetailsPage;
