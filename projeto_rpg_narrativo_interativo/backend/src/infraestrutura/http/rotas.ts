import express from 'express';
import { iniciarNovoJogo } from './controladores/controladorJogo';
import { escolherOpcao } from './controladores/controladorJogo';

const router = express.Router();

router.post('/iniciar', iniciarNovoJogo);
router.post('/escolher', escolherOpcao);

export default router;