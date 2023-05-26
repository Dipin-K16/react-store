import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import SideNav from "./components/side-nav/side-nav";
import MyContext from "./mycontext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/product/product";
import ProductDetail from "./components/product/product-detail/productDetail";
import Login from "./components/login/login";
import NewDeals from "./components/new-deals/newDeals";
import { useEffect, useState } from "react";
import Cart from "./components/cart/cart";
import AddProduct from "./components/add-product/addProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const[cartItems,setCartItems]=useState([])
  const[product,setProduct]=useState([])

  useEffect(()=>{
    console.log("cart item app.js",cartItems);
  },[cartItems])

  

  return (
    <div className="app-container">
      <MyContext.Provider value={{cartItems,setCartItems}}>
        <BrowserRouter>
          <header>
            <Header />
          </header>
          <section className="main-section">
            <nav>
              <SideNav />
            </nav>
            <section className="body-section">
              <Routes>
                <Route path="/" element={<Product />} />
                <Route path="login" element={<Login/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="add-product" element={<AddProduct/>}/>
                <Route path="new-deals" element={<NewDeals/>}/>
                <Route path="product/:id" element={<ProductDetail/>}/>
              </Routes>
            </section>
          </section>
          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
