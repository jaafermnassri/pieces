const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middleware/isAuth");
const {
  AddPiece,
  getAllPieces,
  getOnePiece,
  deletePiece,
  updatePiece,
  SearchPiece,
} = require("../controllers/Pieces");

//add
router.post("/addpiece", isAuth(), AddPiece);

//get one piece
router.get("/:idPiece", isAuth(), getOnePiece);

//get all pieces
router.get("/", isAuth(), getAllPieces);

//delete piece
router.delete("/:idDelete", isAuth(), deletePiece);

// UPDATE piece
router.put("/:idUpdate", isAuth(), updatePiece);

//search piece
router.get("/search", isAuth(), SearchPiece);
module.exports = router;
