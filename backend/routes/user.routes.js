import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getOnlineUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", protectRoute, getOnlineUsers);


export default router;

