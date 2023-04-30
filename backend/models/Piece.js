const mongoose = require('mongoose')
const User = require("../models/User")
const pieceSchema = new mongoose.Schema({
    name: { type: String, required: true, uppercase: true, trim: true }, // String is shorthand for {type: String}
    file: { type: String },
    createdOn: { type: Date, default: Date.now },
    largeur:{type:Number},
    longueur:{type:Number},
    hauteur:{type:Number},
    material: {
    type: String,
    default: "Fer",
    enum: ["Aliminium","Fer","Inox","Plastique"],
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user",required:true },
  category: {
    type: String,
    default: "Usinage CNC",
    enum: ["Usinage CNC","Impression 3D","Tolerie","Moulage Par Injection","Moulage Sous Pression"],
  },
});
module.exports = Piece = mongoose.model("piece", pieceSchema);
