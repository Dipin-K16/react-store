import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="mt-2">
      <div className="container d-flex">
        <div className="row justify-content-lg-between">
          <div className="col-md-4 align-items-center mt-5 p-3">
            <h3>React Store</h3>
            <p>Where the world comes to shop...</p>
          </div>
          <div className="col-md-2 align-items-center mt-5 p-3 ms-3">
            <h5>Products</h5>
            <p>
              <a href="#" className="text-reset">
                Fashion
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Accessories
              </a>
            </p>
            <p>
              <a href="#" className="text-reset">
                Gadgets
              </a>
            </p>
            <p>
              <a href="#" className="text-reset"></a>
            </p>
          </div>
          <div className="col-md-2 align-items-center mt-5 p-3">
            <h5>Contact us</h5>
            <p>Thalassery, kerala</p>
            <p>
              <i className="fas fa-phone me-1"></i> Phone: 9855625874
            </p>
            <p>
              <i className="fas fa-phone me-1"></i> Phone: 9854561822
            </p>
            <p>www.reactstore.com</p>
          </div>
          <div className="col-md-2 align-items-center mt-5 p-3">
            <h5>Social</h5>
            <p>
              <i className="fab fa-instagram me-1"></i>wwwww.instagram.com
            </p>
            <p>
              <i className="fab fa-facebook me-1"></i>wwwww.facebook.com
            </p>
            <p>
              <i className="fab fa-twitter me-1"></i>ww.twitter.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
