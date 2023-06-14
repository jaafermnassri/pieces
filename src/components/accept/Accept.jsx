import React, { useEffect, useState } from 'react'
import "./accept.css"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsPiece } from '../../Redux/actions/pieceActions';
const Accept = () => {

    const {id} = useParams()
    useEffect(() => {
        dispatch(detailsPiece(id));
        }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();    
    const thisPiece = useSelector((state)=> state.pieceReducer.onePiece)
   
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const handleClicks = () => {
    setIsClicked(true);
  };
        
  return (
    <div className='pdet'>
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
      <td>{thisPiece.material}</td>
    </tr>
    <tr>
      
      <td>Type de Matériau</td>
      <td>{thisPiece.typematerial}</td>
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
<div>
{isClicked ?  <h4>Acceptée</h4> :  <button onClick={handleClick} type="submit" style={{margin:"2rem"}} className="btn btn-custom btn-lg page-scroll"  size='lg'>Accepter</button> }
{/* {isClicked ?  <h4>Refusée</h4> :      <button onClick={handleClicks} type="submit" style={{margin:"2rem"}} className="btn btn-custom btn-lg page-scroll"  size='lg'>Réfuser</button> } */}</div> 
      
    </div>
  )
}

export default Accept