import express from 'express';
import { getPatients } from '../services/patientService';

const patientRouter = express.Router();


patientRouter.get('/', (_req, res) => {
  res.send(getPatients());
});


export default patientRouter;