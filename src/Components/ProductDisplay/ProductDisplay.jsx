import React, { useContext, useEffect } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star.png";
import star_dull_icon from "../Assets/star_dull.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { cartItems, addToCart } = useContext(ShopContext);

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div>
          <div className="product-display-right-prices">
            <div className="product-display-right-prices-old">
              ${product.old_price}
            </div>
            <div className="product-display-right-prices-new">
              ${product.new_price}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
