const calculateBmi = (height: number, weight: number): string => {
  try {
    if (height <= 0 || weight <= 0) throw new Error("Some of the values provided are not in a positive number!");

    const bmi = weight / Math.pow(height * 0.01, 2); // bmi = weight (Kg) / height^2 (m^2)

    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 25) return "Normal Weight";
    if (bmi >= 25 && bmi < 30) return "Overweight";
    return "Obesity";
  } catch (error: unknown) {
    let errorMessage = "Something went wrong: ";
    if (error instanceof Error) errorMessage += error.message;
    return errorMessage;
  }
};

export default calculateBmi;
