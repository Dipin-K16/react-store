import React, { useState } from "react";
import './addProduct.css'

const AddProduct = () => {
  const [prodTitle, setProdTitle] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [category, setcategory] = useState();

  const handleAddProducy = (event) => {
    event.preventDefault();
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: prodTitle,
        price: price,
        description: description,
        image: image,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((data) => {
        console.log(data);
        alert("product added")
      });

    // console.log("Add product",prodTitle,price,description,category,image);
  };

  return (
    <div className="container form-body">
      <div className="row">
        <div className="col-xs-12">
          <form>
            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label for="name"> Product title </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={prodTitle}
                    onChange={(event) => setProdTitle(event.target.value)}
                  />

                  <div className="form-group">
                    <label for="name"> Price </label>
                    <input
                      type="text"
                      id="price"
                      className="form-control"
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="col-xs-12">
                    <div className="form-group">
                      <label for="imagePath"> Image URL </label>
                      <input
                        type="text"
                        id="imagePath"
                        className="form-control"
                        formControlName="imagePath"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12"></div>
              </div>
              <div className="">
                <div className="col-xs-12">
                  <div className="form-group">
                    <label for="description"> Description </label>
                    <textarea
                      type="text"
                      id="description"
                      className="form-control"
                      rows="3"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label for="category"> Category </label>
                  <input
                    type="text"
                    id="category"
                    className="form-control"
                    value={category}
                    onChange={(event) => setcategory(event.target.value)}
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-xs-12 d-flex justify-content-lg-between">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={handleAddProducy}
                  >
                    Add Product
                  </button>
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
