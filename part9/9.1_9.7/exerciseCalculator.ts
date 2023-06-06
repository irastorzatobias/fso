export interface ExerciseArguments {
  target: number;
  hours: Array<number>;
}

export interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  success: boolean;
  rating: Rating;
}

export interface Rating {
  value: number;
  description: string;
}

const validateArguments = (exercise: ExerciseArguments): void => {
  const { hours, target } = exercise;

  if(hours.includes(NaN) || isNaN(target)) {
    throw new Error('malformatted parameters');
  }
};

export function calculateExercises(exercise: ExerciseArguments): ExerciseResult {
  validateArguments(exercise);
  const { hours, target } = exercise;

  const periodLength = hours.length;
  const trainingDays = hours.filter(hour => hour > 0).length;

  const average = hours.reduce((a, b) => a + b, 0) / periodLength;

  let rating: Rating;

  if (average >= target) {
    rating = { value: 3, description: 'Excellent! Target reached' };
  } else if (average >= target * 0.75) {
    rating = { value: 2, description: 'Not bad but could be better' };
  } else {
    rating = { value: 1, description: 'Needs improvement, keep working on it' };
  }

  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    target: target,
    average: average,
    success: average >= target,
    rating: rating
  };
}

// const hours = [3, 0, 2, 4.5, 0, 3, 1]
// const target = 2;

// const target = Number(process.argv[2]);
// const hours = process.argv.slice(3).map(hour => Number(hour));

// while (hours.length < 7) {
//   hours.push(0);
// }
