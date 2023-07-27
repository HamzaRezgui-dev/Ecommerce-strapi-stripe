import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 20,
      price: 10,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 20,
      price: 10,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 20,
      isNew: true,
      price: 10,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 20,
      isNew: true,
      price: 10,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia cum
          deleniti ipsam. Nam, rerum molestiae quo dignissimos aliquam facere
          ullam omnis sapiente quod dolorum, cumque tempora illum perspiciatis
          voluptatem dolore.
        </p>
      </div>
      <div className="bottom">
        {data.map((element) => (
          <Card element={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
