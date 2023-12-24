import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { Cart_total } from "../context/cart";
import imgPizza from "../assets/img/pizza.png"
import Container from 'react-bootstrap/Container';
import { NumericFormat } from 'react-number-format';

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
        <Container>
          <div className="toLogo">
            <Navbar.Brand className="navBrand" onClick={handleClick}>
              <img className="navIcon" src={imgPizza} />
            </Navbar.Brand>
            <NavLink style={{textDecoration: 'none'}} className={activeClass} to="/">
              <span className="spanNavText">Pizzeria mamma mia!</span>
            </NavLink>
          </div>
        </Container>
        <Container>
          <div className="toCart">
            <NavLink style={{textDecoration: 'none'}} className={activeClass}  to="/carrito">
            <span className="spanNavText"> Carrito:</span> <span className="spanCartTotal"> <NumericFormat value={Total_cart} displayType={'text'} thousandSeparator={true} prefix={'$'}/></span>
            </NavLink>
          </div>
        </Container>
      </section>
    </Navbar>
    //
  );
};

export default Navigation;
