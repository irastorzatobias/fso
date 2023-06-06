type Weight = number; // Usar UpperCamelCase para los tipos
type Height = number; // Usar UpperCamelCase para los tipos

interface BmiResult {
  result: 'Underweight' | 'Normal' | 'Overweight' | 'Obese';
}

// Comprobar si los argumentos son correctos antes de realizar los cálculos.
const validateArguments = (height: Height, weight: Weight): void => {
  if (height <= 0 || weight <= 0) {
    throw new Error('Both height and weight must be positive numbers');
  }
}

const calculateBmi = (height: Height, weight: Weight): BmiResult => {
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

try {
  console.log(calculateBmi(180, 83));
} catch (e: any) {
  console.log('Something went wrong, error message:\n', e.message);
}
