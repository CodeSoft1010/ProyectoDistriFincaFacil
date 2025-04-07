import express from 'express';
import { welcome } from '../control/control.mjs';


const router = express.Router();


// Ruta principal
router.get('/', welcome);

export default router;