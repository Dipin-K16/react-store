import React, { useEffect, useState } from "react";
import ProductCard from "./product-card/productCard";
import axios from "axios";
import "./product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   console.log("products", products);
  // }, [products]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="product-container">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-3 col-md-6 col-sm-6">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
