import React from "react";

function Card(props) {
  return (
    <div className="col-sm-3 mt-5">
      <div className="card">
        <img src={props.imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make
            up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
