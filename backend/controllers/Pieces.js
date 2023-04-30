const Piece = require('../models/Piece')
// const upload = require('../utils/multer')

const AddPiece = async(req,res)=> {
    const url = `${req.protocol}://${req.get("host")}`;
        try {
            const newPiece = new Piece({...req.body,user: req.user._id});
            // newPiece.file = `${url}/${req.file.path}`;
            
            await newPiece.save();
            res.send(newPiece);
        } catch (error) {
            res.status(400).send(error.message);
          console.log(error);
        }  
}

const getAllPieces = async(req,res)=> {
    try {
        const pieces = await Piece.find({});
        res.send(pieces);
    } catch (error) {
        res.status(400).send(error.message);
            console.log(error);
    }
}



const deletePiece = async(req,res)=>{
    try {
        const deleted = await Piece.deleteOne({_id:req.params.idDelete});
        (deleted.deletedCount)? res.send({msg:'Piece deleted successfully'}):res.send({msg:"Piece is already deleted"})
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error);
    }
}



const updatePiece = async(req,res)=>{
    try {
        const updating = await Piece.updateOne({_id:req.params.idUpdate},{...req.body});
        const updated = await Piece.findOne({_id:req.params.idUpdate}) 
        res.send({msg:"updated successfully",updated})
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error); 
    }
}

const getOnePiece = async(req,res)=>{
    try {
        const findOnePiece = await Piece.findOne({ _id: req.params.id });
        res.send(findOnePiece);
      } catch (error) {
        res.status(400).send(error.message);
        console.log(error);
      }
}
const SearchPiece = async(req,res)=>{
    try {
        const pieces = await Piece.find({Name:{$regex:req.query.Name},material:{$regex:req.query.material}}).populate();
          res.send(pieces);   
    } catch (error) {
        res.status(400).send(error.message);
            console.log(error);
    }
}

module.exports = {AddPiece,getAllPieces,deletePiece,updatePiece,getOnePiece,SearchPiece};