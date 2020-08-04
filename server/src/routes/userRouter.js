import express from 'express';
import { createUser, updateUserByPk, deleteUserByPk, getUserByPk } from "../controllers/user.js";
import { validateUserOnUpdate, validateUserOnCreate } from "../middlewares/user/validateUser";

const userRouter = express.Router();

userRouter.post('/', validateUserOnCreate, createUser);
userRouter.patch('/:userId', validateUserOnUpdate, updateUserByPk);
userRouter.get('/:userId', getUserByPk);
userRouter.delete('/:userId', deleteUserByPk);

export default userRouter;