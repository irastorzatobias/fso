// BmiCalculator.ts
export type Weight = number;
export type Height = number;

export interface BmiResult {
  result: 'Underweight' | 'Normal' | 'Overweight' | 'Obese';
}

export const validateArguments = (height: Height, weight: Weight): void => {
  if (height <= 0 || weight <= 0) {
    throw new Error('Both height and weight must be positive numbers');
  }
};

export const calculateBmi = (height: Height, weight: Weight): BmiResult => {
  validateArguments(height, weight);
  const bmi = weight / (height / 100) ** 2;
  if (bmi < 18.5) {
    return { result: 'Underweight' };
  } else if (bmi < 25) {
    return { result: 'Normal' };
  } else if (bmi < 30) {
    return { result: 'Overweight' };
  } else {
    return { result: 'Obese' };
  }
};
