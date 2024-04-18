import React, { useEffect, useState } from "react";
import "./NewArrivals.css";
import Item from "../Item/Item";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/latest/products")
      .then((res) => res.json())
      .then((data) => {
        setNewArrivals(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="new-arrivals">
      <h1>NEW ARRIVALS</h1>
      <hr />
      <div className="arrivals">
        {newArrivals.map((item, index) => {
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

export default NewArrivals;
