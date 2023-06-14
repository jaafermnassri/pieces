import React from "react";
import "./navigation.css"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from '../Redux/actions/userActions';
import ForClient from "./private/ForClient";
import ForAdmin from "./private/ForAdmin";
export const Navigation = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userinfo = useSelector((state)=>state.userReducer.user)
  const IsAdmin = useSelector((state)=>state.userReducer.user.role)
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container" style={{width:" 90%"}}>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          
          <Link to="/" className="navbar-brand page-scroll" href="#page-top">
            Pieces Méchaniques
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
              Caractéristiques
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                à propos
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Devis
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Les Avis
              </a>
            </li>
            <li>
            {IsAdmin==="client"?   
              <Link to="/Plist" className="page-scroll">
                Mes Devis
              </Link>:"" }
            </li>
            <li>
            
            {IsAdmin==="admin"? <Link to="/dashboard" className="page-scroll">
                Table de bord
              </Link> :null}
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
             
              {localStorage.getItem("token") ? 
  <div className="logi" onClick={() => {dispatch(logout());navigate("/login", { replace: true });}}>Logout</div> :<Link to="/login">Login</Link>}
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
