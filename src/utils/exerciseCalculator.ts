export interface exerciseInput {
  daily_exercises: number[];
  target: number;
}

export interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export interface exerciseResult {
  success: boolean;
  message?: string;
  result?: Result;
}

const validate = (daily_exercises: number[], target: number): void => {
  if (daily_exercises === undefined || target === undefined) throw new Error("parameters missing");

  const dailyExercisesIsAllNumber = daily_exercises.every((el) => typeof el === "number");
  const dailyExercisesNotEmpty = daily_exercises.length > 0;
  const targetIsNumberAndNotZero = typeof target === "number" && target > 0;

  if (!(dailyExercisesIsAllNumber && dailyExercisesNotEmpty && targetIsNumberAndNotZero))
    throw new Error("malformatted parameters");
};

const calculate = (hoursByDay: number[], targetHoursByDay: number): Result => {
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

export const calculateExercises = (input: exerciseInput): exerciseResult => {
  try {
    validate(input.daily_exercises, input.target);
    return {
      success: true,
      result: calculate(input.daily_exercises, input.target),
    };
  } catch (error: unknown) {
    let errorMessage = "";

    if (error instanceof Error) {
      errorMessage += error.message;
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
};
