import express from "express";
import { createUser, getAllUsers, getUserProfile, loginUser, logoutUser, postACommentOnAnAsset } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = express.Router();

router.post('/signup', upload.single('profilePic'),createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser)
router.get('/profile/:email', getUserProfile);
router.get('/getallusers', getAllUsers);
router.post('postcommentonasset/:commenterId/:assetId', postACommentOnAnAsset);

export default router