import React, { useEffect, useState } from "react";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;
  const rate = product?.rating?.rate;

  useEffect(() => {}, []);

  return (
    <div className="product-card">
      <div className="card w-100 my-2 shadow-2-strong">
        <img
          src={product.image}
          className="card-img-top-card"
          style={{ aspectRatio: 1 / 1 }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text prod-price">${product.price}/-</p>
          <div className="rate">
          <span className={`fa fa-star ${rate > 1 ? 'checked':'none'}`}></span>
               <span className={`fa fa-star ${rate > 2 ? 'checked':'none'}`}></span>
              <span className={`fa fa-star ${rate > 3 ? 'checked':'none'}`}></span>
              <span className={`fa fa-star ${rate > 4 ? 'checked':'none'}`}></span>
               <span className={`fa fa-star ${rate > 5 ? 'checked':'none'}`}></span>
            <span className="text-muted">({product.rating.rate})</span>
          </div>
          <Link to={`/product/${product.id}`}>
          <a type="button" className="btn btn-success buy-btn shadow-0 me-1">
            Buy now
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
