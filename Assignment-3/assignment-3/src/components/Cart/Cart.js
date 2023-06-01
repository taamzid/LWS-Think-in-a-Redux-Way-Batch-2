import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cart/actions";
import { addProducts, decreaseQuantity } from "../../redux/products/actions";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const uniqueProducts = [...new Set(cart.map((c) => c.prodName))];

  const counts = cart.reduce((acc, product) => {
    if (acc[product.prodName]) {
      acc[product.prodName]++;
    } else {
      acc[product.prodName] = 1;
    }
    return acc;
  }, {});

  const prices = cart.reduce((acc, product) => {
    if (!acc[product.prodName]) {
      acc[product.prodName] = product.prodPrice;
    }
    return acc;
  }, {});

  let subtotal = 0;
  uniqueProducts.forEach((c) => {
    subtotal += prices[c] * counts[c];
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(decreaseQuantity(product));
  };

  return (
    <main class="py-16 cart">
      <div class="container 2xl:px-8 px-2 mx-auto">
        <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div class="cartListContainer">
          <div class="space-y-6">
            {uniqueProducts.map((c) => (
              <div class="cartCard">
                <div class="flex items-center col-span-6 space-x-6">
                  <img class="lws-cartImage" src="" alt="product" />

                  <div class="space-y-2">
                    <h4 class="lws-cartName">{c}</h4>
                    <p class="lws-cartCategory"></p>
                    <p>
                      BDT <span class="lws-cartPrice">{prices[c]}</span>
                    </p>
                  </div>
                </div>
                <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                  <div class="flex items-center space-x-4">
                    <button
                      class="lws-incrementQuantity"
                      onClick={() => handleAddToCart(c)}
                    >
                      <i class="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span class="lws-cartQuantity">{counts[c]}</span>
                    <button class="lws-decrementQuantity">
                      <i class="text-lg fa-solid fa-minus"></i>
                    </button>
                  </div>

                  <p class="text-lg font-bold">
                    BDT{" "}
                    <span class="lws-calculatedPrice">
                      {prices[c] * counts[c]}
                    </span>
                  </p>
                </div>

                <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                  <button class="lws-removeFromCart">
                    <i class="text-lg text-red-400 fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div class="billDetailsCard">
              <h4 class="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
              </h4>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p>
                    BDT <span class="lws-subtotal">{subtotal}</span>
                  </p>
                </div>

                <div class="flex items-center justify-between">
                  <p>Discount</p>
                  <p>
                    BDT <span class="lws-discount">0</span>
                  </p>
                </div>

                <div class="flex items-center justify-between">
                  <p>VAT</p>
                  <p>
                    BDT <span class="vat">0</span>
                  </p>
                </div>

                <div class="flex items-center justify-between pb-4">
                  <p class="font-bold">TOTAL</p>
                  <p class="font-bold">
                    BDT <span class="lws-total">{subtotal}</span>
                  </p>
                </div>
                <button class="placeOrderbtn">place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
