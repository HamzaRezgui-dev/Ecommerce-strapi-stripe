import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto in modi beatae doloremque maxime rem magnam quam saepe iure eveniet sunt tempore! Molestiae itaque tenetur at incidunt, velit id!",
      title: "Hat",
      oldPrice: 20,
      price: 10,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto in modi beatae doloremque maxime rem magnam quam saepe iure eveniet sunt tempore! Molestiae itaque tenetur at incidunt, velit id!",
      title: "Hat",
      oldPrice: 20,
      price: 10,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x {item.price}TND</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>130TND</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">RESET CART</span>
    </div>
  );
};

export default Cart;
