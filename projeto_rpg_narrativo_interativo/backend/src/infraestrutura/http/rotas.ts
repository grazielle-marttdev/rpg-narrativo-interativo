import express from 'express';
import { iniciarNovoJogo } from './controladores/controladorJogo';

const router = express.Router();

router.post('/iniciar', iniciarNovoJogo);

export default router;