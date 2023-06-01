import { useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import IMG from "../../images/logo.png";
import "./navbar.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [showProducts, setShowProducts] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleProductButtonClick = () => {
    setShowProducts(true);
    setShowCart(false);
  };

  const handleCartButtonClick = () => {
    setShowCart(true);
    setShowProducts(false);
  };

  return (
    <>
      <nav class="bg-[#171C2A] py-4">
        <div class="navBar">
          <a href="index.html">
            <img src={IMG} alt="LWS" class="max-w-[140px]" />
          </a>
          <div class="flex gap-4">
            <a
              href="#products"
              class="navHome"
              id="lws-home"
              onClick={handleProductButtonClick}
            >
              {" "}
              Home{" "}
            </a>

            <a
              href="#cart"
              class="navCart"
              id="lws-cart"
              onClick={handleCartButtonClick}
            >
              <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{cart.length}</span>
            </a>
          </div>
        </div>
      </nav>

      {showProducts && <Products />}
      {showCart && <Cart />}
    </>
  );
};

export default NavBar;
