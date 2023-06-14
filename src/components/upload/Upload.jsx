import React, { useState } from 'react'
import Footer from '../footer/Footer'
import './upload.css'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addPiece } from '../../Redux/actions/pieceActions';
const Upload = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fichier, setFichier] = useState("");
  const [largeur, setLargeur] = useState("");
  const [longueur, setLongueur] = useState("");
  const [material, setMaterial] = useState("Fer")
  // const [description, setDescription] = useState("");
 
  const handleSubmit = (event) => {
    
    event.preventDefault();

    const data = new FormData();
    data.append("fichier", fichier);
    data.append("largeur",largeur);
    data.append("longueur", longueur);
    data.append("material",material)
    // data.append("description",description)
    
    dispatch(addPiece(data,navigate));
  };



  return (

    <div style={{marginTop:"2%"}}>
        <header id="header">
        <div className="introo">
        <div className="overlay">
          <div className="container">
            <div className="row">
              
             <div className="col-xs-12 col-md-6">
                <div style={{marginTop:"30%"}}> 
                <h1 >
                  Telecharger votre fichier ici
                  <span></span>
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur provident minima maiores porro iusto velit ipsa, eum eveniet neque expedita aliquam ab similique ut nulla et cupiditate, molestias dolorem quas.</p>
                {/* <a
                  href="#portfolio"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Telecharger votre modèle
                </a>{" "} */}
                {/* sqldzkjzjzj */}
                
              <label style={{width:"100%"}} htmlFor="images" className="drop-container">
              <span className="drop-title">Télécharger</span>
              <i style={{fontSize:"4rem"}} class="fa fa-upload" aria-hidden="true"></i> 
                  
              <form method="POST" onSubmit={handleSubmit}>    
              <input name='fichier' onChange={(e) => {setFichier(e.target.files[0]);}} style={{display:"none"}}  type="file" id="images" accept="image/*" required />
              {localStorage.getItem("token") ? 
              <button type='submit' className="btn btn-custom btn-lg page-scroll">ok</button> : <Link to="/login"><button  className="btn btn-custom btn-lg page-scroll">ok</button></Link>}
              </form>
              </label>
              
                {/* dfgjhkjehjhkjh */}
                </div>   
              </div>

              <div className="col-xs-12 col-md-6"> <img src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-798.jpg" alt="" /> </div>
            </div>
          </div>
        </div>
      </div>
      </header>
      <Footer/>
    </div>
  )
}

export default Upload