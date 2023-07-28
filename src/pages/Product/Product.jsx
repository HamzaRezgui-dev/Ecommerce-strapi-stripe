import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";
const Product = () => {
  const [selectedImg, setselectedImg] = useState(0);
  const [quantity, setquantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setselectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setselectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>LEBSA MAHLEHA</h1>
        <span className="price">199TND</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit animi in eligendi quis ut deserunt amet soluta totam
          incidunt voluptates est inventore, impedit consequatur suscipit magnam
          voluptas optio. Odio, eveniet.
        </p>
        <div className="quantity">
          <button
            onClick={() => setquantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setquantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <br />
        <div className="info">
          <span>DESCRIPTION</span>
          <span>ADDITIONAL INFORMATION</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
