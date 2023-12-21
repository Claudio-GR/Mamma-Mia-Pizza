import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { Cart_total } from "../context/cart";

const Navigation = () => {
  const {Total_cart, SetTotal_cart} = useContext(Cart_total);
  const activeClass = "navLinkActive";
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Navbar className="navigation">
      <section className="navLinks">
        <div>
          <Navbar.Brand className="navBrand" onClick={handleClick}>
            <img className="navIcon" src={<FaPizzaSlice />} />
          </Navbar.Brand>
          <NavLink className={activeClass} to="/">
            Pizzeria mamma mia!
          </NavLink>
        </div>
        <div>
          <NavLink className={activeClass} to="/carrito">
            Carrito: {Total_cart}
          </NavLink>
        </div>
      </section>
    </Navbar>
    //
  );
};

export default Navigation;
