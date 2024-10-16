/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientsService from "../services/patientsService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientsService.getNonSensitiveEntries());
});

router.post("/", (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;

  const addedEntry = patientsService.addEntry({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
  });

  res.json(addedEntry);
});

export default router;
