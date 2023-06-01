import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./productDetail.css";
import MyContext from "../../../mycontext";
import { ToastContainer, toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const { cartItems, setCartItems } = useContext(MyContext);
  const [product, setProduct] = useState([]);

  const notify = () => toast("Product added to the cart");

  const rate = product?.rating?.rate;
  const count = product?.rating?.count;

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const onHandleAddToCart = () => {
    setCartItems([...cartItems, product]);
    notify();
  };

  useEffect(() => {
    console.log("caaaart", cartItems);
  }, [cartItems]);

  useEffect(() => {
    getProduct(); 
  }, []);

  // const toastElList = document.querySelectorAll('.toast')
  // const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

  return (
    <div className="container">
      {/* <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> */}
      <div className="container-xl prod-detail">
        <ToastContainer />
        <div className="row">
          <div className="col-xl-6">
            <div className="prod-img">
              <img src={product.image} />
            </div>
          </div>
          <div className="col-xl-6">
            <h3 className="product-title">{product.title}</h3>
            <div className="rating">
              <div className="stars">
                <span
                  className={`fa fa-star ${rate > 1 ? "checked" : "none"}`}
                ></span>
                <span
                  className={`fa fa-star ${rate > 2 ? "checked" : "none"}`}
                ></span>
                <span
                  className={`fa fa-star ${rate > 3 ? "checked" : "none"}`}
                ></span>
                <span
                  className={`fa fa-star ${rate > 4 ? "checked" : "none"}`}
                ></span>
                <span
                  className={`fa fa-star ${rate > 5 ? "checked" : "none"}`}
                ></span>
              </div>
            </div>
            <p className="product-description">{product.description}</p>
            <h5 className="price">
              current price: <span>{product.price}</span>
            </h5>
            <span className="review-no">{rate} reviews</span>
            <p className="vote">
              <strong>{rate * 100}</strong> of buyers enjoyed this product!{" "}
              <strong>({count} rating)</strong>
            </p>
            <div className="action">
              <button
                className="add-to-cart btn btn-success"
                onClick={onHandleAddToCart}
                type="button"
              >
                Add to Cart
              </button>
              <button className="like btn btn-success" type="button">
                <span className="fa fa-heart heart"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetail;
