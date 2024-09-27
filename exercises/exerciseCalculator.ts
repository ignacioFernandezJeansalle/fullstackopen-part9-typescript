interface exercisesValues {
  hoursByDay: number[];
  targetHoursByDay: number;
}

const parseExercisesValues = (args: string[]): exercisesValues => {
  if (args.length < 4) throw new Error("Not enough arguments");

  const targetHoursByDay = Number(args[2]);
  const hoursByDay = [...args].slice(3).map((el) => Number(el));

  if (!isNaN(targetHoursByDay) && hoursByDay.every((el) => !isNaN(el))) {
    return {
      hoursByDay,
      targetHoursByDay,
    };
  } else {
    throw new Error("Provided values were not numbres!");
  }
};

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (hoursByDay: number[], targetHoursByDay: number): Result => {
  if (hoursByDay.length === 0 || targetHoursByDay <= 0)
    throw new Error("The values for the calculation are incorrect.");

  const periodLength = hoursByDay.length;

  const trainingDays = hoursByDay.reduce((accumulator, currentValue) => {
    if (currentValue > 0) return accumulator + 1;
    return accumulator;
  }, 0);

  const average = hoursByDay.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / periodLength;

  const target = targetHoursByDay;

  const success = average >= target;

  const averageVsTarget = average / target;
  let rating = 1;
  if (averageVsTarget >= 0.8) rating += 1;
  if (averageVsTarget >= 1) rating += 1;

  let ratingDescription = "Should improve a lot.";
  if (rating === 2) ratingDescription = "It's not that bad but it could be better.";
  if (rating === 3) ratingDescription = "Perfect, keep it up.";

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

try {
  const { hoursByDay, targetHoursByDay } = parseExercisesValues(process.argv);
  console.log(calculateExercises(hoursByDay, targetHoursByDay));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
