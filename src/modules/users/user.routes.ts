import express, { Router } from 'express';
import * as userController from './user.controller';
import { userValidator } from './user.validation';

const router: Router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userValidator, userController.createUser);

export { router as userRouter };