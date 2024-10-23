import { Box, Typography } from "@mui/material";
import { Patient } from "../../types";

interface Props {
  patient: Patient;
}

const Entries = ({ patient }: Props) => {
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
              <ul>
                {entry.diagnosisCodes?.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default Entries;
