const calculateBmi = (height: number, weight: number): string => {
  if (height <= 0 || weight <= 0) throw new Error("Some of the values provided are not in a positive number!");

  // bmi = weight (Kg) / height^2 (m^2)
  const bmi = weight / Math.pow(height * 0.01, 2);

  // Underweight < 18.5
  if (bmi < 18.5) return "Underweight";

  // Normal Weight >= 18.5 and < 25
  if (bmi >= 18.5 && bmi < 25) return "Normal Weight";

  // Overweight >= 25 and < 30
  if (bmi >= 25 && bmi < 30) return "Overweight";

  // Obesity >= 30
  return "Obesity";
};

try {
  console.log(calculateBmi(180, 74));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
