import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPieces } from '../../Redux/actions/pieceActions';


import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';


const Dashboard = () => {

 // modalbutton
 
 //modal button

  useEffect(() => {
    dispatch(getAllPieces());
  }, [])
  
  const dispatch = useDispatch();
  const allpieces = useSelector(state=>state.pieceReducer.pieces)
  

  return (
    <div style={{width:"80%",margin:"5% auto"}}>
       <h2>Liste des devis</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Catégorie</TableCell>
              <TableCell>matériel</TableCell>
              <TableCell>type de matériel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allpieces.map(allpieces => (
              <TableRow key={allpieces._id}>
                <TableCell >
                  <Link to={`/accept/${allpieces._id}`}>{allpieces.category}</Link>
                </TableCell >
                <TableCell >{allpieces.material}</TableCell>
                <TableCell >{allpieces.typematerial}</TableCell>
                <TableCell > <Link to={`/accept/${allpieces._id}`}><Button variant="outlined" >Voir Plus</Button> </Link> 
              
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Dashboard