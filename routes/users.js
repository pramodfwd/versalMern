import express from "express";
import {
  createUsers,
  deleteUsers,
  getAllUsers,
  getUsersById,
  replaceUsers,
  updateUsers,
} from "../controller/users.js";

const router = express.Router();

router
  .get("/", getAllUsers)
  .get("/:id", getUsersById)
  .post("/", createUsers)
  .put("/:id", replaceUsers)
  .patch("/:id", updateUsers)
  .delete("/:id", deleteUsers);

export const usersRoutes = router;
