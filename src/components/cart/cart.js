import React, { useContext, useEffect } from "react";
import MyContext from "../../mycontext";
import "./cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(MyContext);
  let subTotal = 0;

  cartItems.forEach((element) => {
    subTotal += element.price;
  });

  const handleRemove = (index) => {
    // const updatedCatItems = cartItems;
    // updatedCatItems.splice(index, 1);
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    console.log("removed cart item", cartItems);
  }, [cartItems]);

  console.log("caaaart itemssss", cartItems);

  return (
    <div className="product-cart-container">
      <div className="subtotal">
        <h3>Sub total: {subTotal}</h3>
      </div>
      <div className="subtotal-button">
        <a type="button" className="btn btn-success shadow-0 mt-2">
          Proceed to buy ( {cartItems?.length} items)
        </a>
      </div>
      <div className="subtotal">
        {subTotal==0 && (<div> No items in the cart </div>)}
      </div>
      <div className="row">
        {cartItems.map((product, index) => (
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card w-100 my-2 shadow-2-strong">
              <img
                src={product?.image}
                className="card-img-top"
                style={{ aspectRatio: 1 / 1 }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product?.title}</h5>
                <p className="card-text">$ {product?.price}/-</p>
                <div className="rate"></div>
                <a type="button" className="btn btn-success shadow-0 mt-2">
                  Buy now
                </a>
                <a
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="btn btn-success shadow-0 mt-2"
                >
                  Remove from cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> 
      
    </div>
  );
};

export default Cart;
