import React from 'react'
import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";
import { Cart_total } from "../context/cart";
import Button from "react-bootstrap/Button";
import Add_button from '../components/AddingButton';
import Sus_button from '../components/SustractingButton';
import ListGroup from 'react-bootstrap/ListGroup';

const MyCart = () => {
  const { Pizzas, SetPizzas} = useContext(Pizzas_context);
  const {Total_cart, SetTotal_cart} = useContext(Cart_total);

  return (
    <div className='MyCart'>
      <h3>Detalles del pedido:</h3>
      <div className='Cart_details'>
        <ListGroup variant='flush' className='Pizza_list'>
        {Pizzas.map((pizza) => {
            if (pizza.Qty!==0){
              return(
                <ListGroup.Item key={pizza.id} className='d-flex justify-content-between'>
                  <div className='d-flex justify-content-start'>
                    <img className='Cart_img' src={pizza.img} alt="" />
                    <p>{pizza.name}</p>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <p>{`$ ${pizza.Total}`}</p>
                    <Sus_button pizza_id={pizza.id}/>
                    <h5>{pizza.Qty}</h5>
                    <Add_button text={"+"} pizza_id={pizza.id}/>
                  </div>
                </ListGroup.Item>
              )
            }
          })
          }
        </ListGroup>
        <h2>Total: {`$${Total_cart}`}</h2>
        <Button variant='success'>Ir a pagar</Button>
      </div>
    </div>
  )
}

export default MyCart