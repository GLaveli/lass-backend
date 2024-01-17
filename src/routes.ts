import { Router } from 'express';
import { ApiStatusController } from './controllers/ApiStatusController';
import { ColumnController } from './controllers/ColumnController';
import { LineController } from './controllers/LineController';
import { PartNumberController } from './controllers/PartNumberController';

const router = Router();

const apiStatusController = new ApiStatusController();
const columnController = new ColumnController();
const lineController = new LineController();
const partNumberController = new PartNumberController();

//api status
router.get('/status', apiStatusController.showStatus);
router.post('/column', columnController.create);
router.post('/line', lineController.create);

router.post('/partnumber', partNumberController.create);
router.get('/partnumber/:partnumber', partNumberController.getPartNumberWithLineAndColumn);
// router.get('/partnumber', partNumberController.listAll);
router.put('/partnumber/:id', partNumberController.update);
router.delete('/partnumber/:id', partNumberController.delete);

export { router };