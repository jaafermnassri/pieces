import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePiece, getAllPieces } from '../../Redux/actions/pieceActions';


import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';

import { Link } from 'react-router-dom';


const PieceList = () => {
 
  

  useEffect(() => {
    dispatch(getAllPieces());
  }, [])
  
  const dispatch = useDispatch();
  const thisUser = useSelector(state=>state.userReducer.user)
  const plist = useSelector(state=>state.pieceReducer.pieces.filter(piece=>piece.user===thisUser._id))
  

  return (
    <div style={{width:"80%",margin:"5% auto"}}>
       <h2>Liste de mes devis</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plist.map(plist => (
              <TableRow key={plist._id}>
                <TableCell >
                  <Link to={`/add/${plist._id}`}>{plist.category}</Link>
                </TableCell >
                <TableCell >{plist.material}</TableCell>
                <TableCell >{plist.typematerial}</TableCell>
                
                <TableCell ><Button onClick={() => dispatch(deletePiece(plist._id))} variant="outlined" startIcon={<i class="fa fa-trash" aria-hidden="true"></i>}>Annuler</Button></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default PieceList