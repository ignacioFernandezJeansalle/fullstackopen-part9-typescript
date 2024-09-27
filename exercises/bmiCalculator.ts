interface bmiValues {
  height: number;
  weight: number;
}

const parseBmiValues = (args: string[]): bmiValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbres!");
  }
};

const calculateBmi = (height: number, weight: number): string => {
  if (height <= 0 || weight <= 0) throw new Error("Some of the values provided are not in a positive number!");

  // bmi = weight (Kg) / height^2 (m^2)
  const bmi = weight / Math.pow(height * 0.01, 2);

  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi < 25) return "Normal Weight";
  if (bmi >= 25 && bmi < 30) return "Overweight";
  return "Obesity";
};

try {
  const { height, weight } = parseBmiValues(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
