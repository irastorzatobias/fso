import express from 'express';
import { calculateBmi, BmiResult } from './BmiModule';
import { ExerciseArguments, calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello fullstack');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;

  if(!height || !weight) {
    res.status(400).send({ error: 'missing parameters' });
  }

  if (isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).send({ error: 'NaN parameters' });
  }

  try {
    const result: BmiResult = calculateBmi(Number(height), Number(weight));

    res.send({
      weight,
      height,
      bmi: result
    });
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send({ error: e.message as string });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { hours, target } = req.body;

  if (!hours || !target) {
    res.status(400).send({ error: 'missing parameters' });
  }

  if (!Array.isArray(hours) || isNaN(Number(target))) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const params: ExerciseArguments = {  hours, target };



  try {
    const result = calculateExercises(params);
    res.send(result);
  } catch {
    res.status(400).send({ error: 'malformatted parameters' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
