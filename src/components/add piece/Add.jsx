import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import {materiel,typemateriel} from './options';

import './add.css'
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsPiece, editPiece } from '../../Redux/actions/pieceActions';
import ForClient from '../private/ForClient';
const Add = () => {

  const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();    
  const IsAdmin = useSelector((state)=>state.userReducer.user.role)
  const oldPiece = useSelector((state)=> state.pieceReducer.onePiece)
  const [updatedPiece, setUpdatedPiece] = useState(oldPiece)
  
  useEffect(() => {
  dispatch(detailsPiece(id));
  }, []);
  useEffect(() => {
    setUpdatedPiece(oldPiece);
    }, [oldPiece]);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    
    dispatch(editPiece(id,updatedPiece,navigate));
  };

  return (
    <MDBContainer style={{marginTop:"10%"}}>

      <MDBRow className='bg-light mb-3'>
      
      <MDBCol sm='5' offsetMd='6'>
    <div className='choices'>
    <form method='POST' >
      <div>Quantité
    <MDBInput  id='form1' type='number' /></div>

      <div>Matériel<select name="material" value={updatedPiece.material} onChange={(e)=>setUpdatedPiece({...updatedPiece,material:e.target.value})} className="selectpicker" data-live-search="true" >{materiel.map(materiel => (<option key={materiel.id} value={materiel.name}>{materiel.name}</option>))} </select></div>

      <div>Type de Matériau
      <select name="typematerial" value={updatedPiece.typematerial} onChange={(e)=>setUpdatedPiece({...updatedPiece,typematerial:e.target.value})} id="selectOptions">{typemateriel.map(typemateriel => (<option key={typemateriel.id} value={typemateriel.name}>{typemateriel.name}</option>))} </select> </div>

      <div>Finition de surface
      <select name="surface" value={updatedPiece.surface} onChange={(e)=>setUpdatedPiece({...updatedPiece,surface:e.target.value})} id="selectOptions">{materiel.map(materiel => (<option key={materiel.id} value={materiel.name}>{materiel.name}</option>))} </select> </div>

      <div>Choisissez la couleur
      <select name="couleur" value={updatedPiece.couleur} onChange={(e)=>setUpdatedPiece({...updatedPiece,couleur:e.target.value})} id="selectOptions">{materiel.map(materiel => (<option key={materiel.id} value={materiel.name}>{materiel.name}</option>))} </select> </div>
      </form>
    </div>
    
    <div><button type="submit" onClick={(e)=>{handleSubmit(e)}} className="btn btn-custom btn-lg page-scroll"  size='lg'>Changer</button></div>
    </MDBCol>
    
    <div class="vl"></div>
    

    <MDBCol className='secando' sm='5' offsetSm='2' md='6' offsetMd='0'>
     
    <table className="table caption-top">
  <caption className='taswira'>
    <img className='pimage' src="https://freehali.com/freehali-assets/uploads/2018/06/piece.jpg" alt="" />
  </caption>
  <thead>
    <tr>
      
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Quantité</td>
      <td>@mdo</td>
    </tr>
    <tr>
      
      <td>Matériel</td>
      <td>dfg</td>
    </tr>
    <tr>
      
      <td>Type de Matériau</td>
      <td>@mdo</td>
    </tr>
    <tr>
      
      <td>Finition de surface</td>
      <td>@mdo</td>
    </tr>
    <tr>
      
      <td>Couleur</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>

        </MDBCol>
        
    </MDBRow>
    </MDBContainer>
  )
}

export default Add