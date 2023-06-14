import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Devis</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row justify-content-between">
          <div className="portfolio-items" style={{borderRadius:"20%"}} >
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    style={{padding:"25px",borderRadius:"20%"}} >
                    
                    <Image       
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                    
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
