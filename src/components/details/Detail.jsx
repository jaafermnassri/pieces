
import React from 'react'
import Footer from '../footer/Footer';
import { Link } from "react-router-dom";
const Detail = () => {
  return (
    <>
    <div className='col-md-8 col-md-offset-2 section-title'><h1 style={{margin:"0 auto",textAlign:"center",fontSize:"52px",fontWeight:"700",color:"#333"}}>Usage CNC</h1></div>
    <div id="about" style={{marginTop:"7%"}}>
      
    <div className="container">
   
      <div className="row">
      
      
        <div className="col-xs-12 col-md-6">
          {" "}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kMi_0HXXaTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>{" "}
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2>à propos </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit veritatis fugit vel cupiditate inventore eveniet repellat, mollitia fugiat at qui voluptates ut earum? Nulla aliquid facere nihil corporis animi?</p>
            <h3>Pour avancer</h3>
            <Link to="/upload">
            <a
                  href="#portfolio"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Créer un devis
                </a>{" "}</Link>
            {/* <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <Footer/>
  </>
      );
    }
    
    export default Detail
   
