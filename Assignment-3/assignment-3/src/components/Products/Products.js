import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/actions";
import { addProducts, decreaseQuantity } from "../../redux/products/actions";

const Products = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const [prodName, setProdName] = useState();
  const [prodCategory, setProdCategory] = useState();
  const [prodImg, setprodImg] = useState();
  const [prodPrice, setprodPrice] = useState();
  const [prodQuantity, setprodQuantity] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let productsObj = {
      prodName,
      prodCategory,
      prodImg,
      prodPrice,
      prodQuantity,
    };
    dispatch(addProducts(productsObj));
    setProdName("");
    setProdCategory("");
    setprodImg("");
    setprodPrice("");
    setprodQuantity("");
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(decreaseQuantity(product.prodName));
  };

  return (
    <>
      <main class="py-16">
        <div class="productWrapper">
          <div class="productContainer" id="lws-productContainer">
            {products.map((prod) => (
              <div class="lws-productCard">
                <img
                  class="lws-productImage"
                  src={prod.prodImg}
                  alt="product"
                />
                <div class="p-4 space-y-2">
                  <h4 class="lws-productName">{prod.prodName}</h4>
                  <p class="lws-productCategory">{prod.prodCategory}</p>
                  <div class="flex items-center justify-between pb-2">
                    <p class="productPrice">
                      BDT <span class="lws-price">{prod.prodPrice}</span>
                    </p>
                    <p class="productQuantity">
                      QTY <span class="lws-quantity">{prod.prodQuantity}</span>
                    </p>
                  </div>
                  <button
                    class="lws-btnAddToCart"
                    onClick={() => handleAddToCart(prod)}
                    disabled={prod.prodQuantity === 0}
                  >
                    {prod.prodQuantity === 0 ? "Out of Stock" : "Add To Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div class="formContainer">
              <h4 class="formTitle">Add New Product</h4>
              <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                <div class="space-y-2">
                  <label for="name">Product Name</label>
                  <input
                    class="addProductInput"
                    id="lws-inputName"
                    type="text"
                    required
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                  />
                </div>
                <div class="space-y-2">
                  <label for="category">Category</label>
                  <input
                    class="addProductInput"
                    id="lws-inputCategory"
                    type="text"
                    required
                    value={prodCategory}
                    onChange={(e) => setProdCategory(e.target.value)}
                  />
                </div>
                <div class="space-y-2">
                  <label for="image">Image Url</label>
                  <input
                    class="addProductInput"
                    id="lws-inputImage"
                    type="text"
                    required
                    value={prodImg}
                    onChange={(e) => setprodImg(e.target.value)}
                  />
                </div>
                <div class="grid grid-cols-2 gap-8 pb-4">
                  <div class="space-y-2">
                    <label for="price">Price</label>
                    <input
                      class="addProductInput"
                      type="number"
                      id="lws-inputPrice"
                      required
                      value={prodPrice}
                      onChange={(e) => setprodPrice(e.target.value)}
                    />
                  </div>
                  <div class="space-y-2">
                    <label for="quantity">Quantity</label>
                    <input
                      class="addProductInput"
                      type="number"
                      id="lws-inputQuantity"
                      required
                      value={prodQuantity}
                      onChange={(e) => setprodQuantity(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  id="lws-inputSubmit"
                  class="submit"
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
