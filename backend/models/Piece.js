const mongoose = require('mongoose')
const User = require("../models/User")
const pieceSchema = new mongoose.Schema({
    fichier: { type: String , required: true},
    createdOn: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user",required:true },
    largeur:{type:Number},
    longueur:{type:Number},
    hauteur:{type:Number},
    surface:{type:String},
    couleur:{type:String},
    etat:{type:String ,
      default:"acceptée",
      enum: ["acceptée","refusée"]
    },
    typematerial:{type:String,
      default:"Alu 110",
      enum:["Alu 110","Alu 120","Alu 130","Acier 210","Acier 220", "Plast 310","Plast 320"]
    },
    material: {
    type: String,
    default: "Fer",
    enum: ["Fer","Alliages d'aluminium","Acier","Plastiques","Acier Inoxydable","Métaux tendres"],
  },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "user",required:true },
  category: {
    type: String,
    default: "Usinage CNC",
    enum: ["Usinage CNC","Impression 3D","Tolerie","Moulage Par Injection","Moulage Sous Pression"],
  },
});
module.exports = Piece = mongoose.model("piece", pieceSchema);
