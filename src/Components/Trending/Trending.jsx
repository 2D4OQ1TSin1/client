import React, { useEffect, useState } from "react";
import "./Trending.css";
import Item from "../Item/Item";

const Trending = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/random/products")
      .then((res) => res.json())
      .then((data) => {
        setRandomProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="trending">
      <h1>TRENDING PRODUCTS</h1>
      <hr />
      <div className="trending-item">
        {randomProducts.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
