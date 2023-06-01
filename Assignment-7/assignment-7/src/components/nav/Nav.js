import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.svg";
import "./nav.css";

const Nav = () => {
  return (
    <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
      <Link to="/">
        <img alt="" src={logoImage} />
      </Link>
    </nav>
  );
};

export default Nav;
