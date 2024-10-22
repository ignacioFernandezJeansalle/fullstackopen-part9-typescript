import { Patient } from "../types";

import { Typography } from "@mui/material";

interface Props {
  patient: Patient | null;
}

const PatientById = ({ patient }: Props) => {
  if (!patient) return null;

  return (
    <section>
      <Typography variant="h4" style={{ marginBlock: "0.5em" }}>
        {patient.name}
      </Typography>
      <Typography>Gender: {patient.gender}</Typography>
      <Typography>ssh: {patient.ssn}</Typography>
      <Typography>Occupation: {patient.occupation}</Typography>
    </section>
  );
};

export default PatientById;
