import { Router } from 'express'

const router = Router();

import * as alumnosCtr from '../controllers/alumno.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/',  checkToken, alumnosCtr.readAllAlumnos);
router.get("/:id",  checkToken, alumnosCtr.readAlumno);
router.delete("/:id",  checkToken, alumnosCtr.delAlumno)
router.post("/",  checkToken, alumnosCtr.createAlumno);
router.put("/:id",  checkToken, alumnosCtr.updateAlumno)

export default router;