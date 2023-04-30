const mongoose = require('mongoose')
const deviseSchema = new mongoose.Schema({
    Name: { type: String, required: true, uppercase: true, trim: true }, // String is shorthand for {type: String}
    createdOn: { type: Date, default: Date.now },
    Largeur:{type:Number},
    Longueur:{type:Number},
    Hauteur:{type:Number},
    material: {
    type: String,
    default: "Fer",
    enum: ["Aliminium","Fer","Inox","Plastique"],
  },
  category: {
    type: String,
    default: "Usinage CNC",
    enum: ["Usinage CNC","Impression 3D","Tolerie","Moulage Par Injection","Moulage Sous Pression"],
  },
  price:Number,
  days:Number,
});
module.exports = Piece = mongoose.model("piece", deviseSchema);
