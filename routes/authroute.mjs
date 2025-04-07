import express from 'express';
import { loginUser } from '../control/control.mjs';

const router = express.Router();

router.post('/login', loginUser);

export default router;
