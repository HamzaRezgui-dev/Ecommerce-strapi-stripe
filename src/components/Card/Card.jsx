import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ element }) => {
  return (
    <Link className="link" to={`/products/${element.id}`}>
      <div className="card">
        <div className="image">
          {element.isNew && <span>New Season</span>}
          <img src={element.img} alt="" className="mainImg" />
          <img src={element.img2} alt="" className="secondImg" />
        </div>
        <h2>{element.title}</h2>
        <div className="prices">
          <h3>{element.oldPrice}TND</h3>
          <h3>{element.price}TND</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
