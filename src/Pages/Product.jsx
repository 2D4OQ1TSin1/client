import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const [product, setProduct] = useState({});
  const { productID } = useParams();

  const fetchInfo = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/product/${productId}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch product with ID ${productId}`);
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchInfo(productID);
  }, [productID]);

  return <ProductDisplay product={product} />;
};

export default Product;
