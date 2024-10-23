import { Box, Typography } from "@mui/material";
import { Diagnosis, Patient } from "../../types";

interface Props {
  patient: Patient;
  diagnoses: Diagnosis[];
}

const Entries = ({ patient, diagnoses }: Props) => {
  const getDiagnosisNameBy = (code: string): string => {
    const diagnosis = diagnoses.find((d) => d.code === code);
    if (!diagnosis) return "No result...";

    return diagnosis.name;
  };

  return (
    <Box>
      <Typography variant="h5" marginBlock="8px">
        Entries
      </Typography>

      {patient.entries?.length === 0 ? (
        <Typography>No entries...</Typography>
      ) : (
        <>
          {patient.entries?.map((entry) => (
            <Box component="article" key={entry.id}>
              <p>
                {entry.date} - {entry.description}
              </p>
              {entry.diagnosisCodes && (
                <ul>
                  {entry.diagnosisCodes.map((diagnosisCode) => (
                    <li key={diagnosisCode}>
                      {diagnosisCode} - {getDiagnosisNameBy(diagnosisCode)}
                    </li>
                  ))}
                </ul>
              )}
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default Entries;
