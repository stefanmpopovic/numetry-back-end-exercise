import { Router } from 'express';
import assignmentController from './assignment.controller';

const router: Router = Router();

router.get('/', assignmentController.get);
router.get('/:id', assignmentController.getById);
router.post('/', assignmentController.post);
router.put('/:id', assignmentController.put);
router.delete('/:id', assignmentController.remove);

export default { router };
