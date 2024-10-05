import express from "express";
import calculateBmi from "./src/utils/bmiCalculator";
import { exerciseInput, exerciseResult, calculateExercises } from "./src/utils/exerciseCalculator";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
    res.json({ error: "malformatted parameters" });
    return;
  }

  const bmi = calculateBmi(Number(height), Number(weight));

  if (bmi.includes("Something went wrong")) {
    res.json({ error: bmi });
    return;
  }

  res.json({
    weight,
    height,
    bmi,
  });
});

app.post("/exercises", (req, res) => {
  const reqBody: exerciseInput = req.body;

  const result: exerciseResult = calculateExercises(reqBody);

  if (!result.success) {
    res.json({ error: result.message });
    return;
  }

  res.json(result.result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
