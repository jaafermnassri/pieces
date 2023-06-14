import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
            <Link to="/detail">
            <button style={{backgroundColor:" #4caf5000",border: "2px solid #ffffff",color: "white",padding:" 15px 32px",textAlign:" center",textDecoration:" none",display:" inline-block",fontSize: "16px",margin:" 4px 2px",cursor:" pointer"}}>plus de détail</button>
            </Link>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
