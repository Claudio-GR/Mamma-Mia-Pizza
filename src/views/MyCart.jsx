import React from 'react'
import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";
import { Cart_total } from "../context/cart";
import Button from "react-bootstrap/Button";
import Add_button from '../components/AddingButton';
import Sus_button from '../components/SustractingButton';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

const MyCart = () => {
  const { Pizzas, SetPizzas} = useContext(Pizzas_context);
  const {Total_cart, SetTotal_cart} = useContext(Cart_total);
  const navigate = useNavigate();

  return (
    <div className='MyCart'>
      <h3>Detalles del pedido:</h3>
      <div className='Cart_details'>
        <ListGroup variant='flush' className='Pizza_list p-3'>
        {Pizzas.map((pizza) => {
            if (pizza.Qty!==0){
              return(
                <ListGroup.Item key={pizza.id} className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex justify-content-start m-1' >
                    <img className='Cart_img d-flex' src={pizza.img} alt="" onClick={()=>navigate(`/pizza/${pizza.id}`)} />
                    <p style={{textTransform: 'capitalize'}} className='pizzaCarrito' onClick={()=>navigate(`/pizza/${pizza.id}`)}>{pizza.name}</p>
                  </div>
                  <div className='d-flex justify-content-end align-items-center'>
                    <p className='m-3'><NumericFormat value={pizza.Total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                    <Sus_button pizza_id={pizza.id}/>
                    <h5 className='ps-3 pe-3'>{pizza.Qty}</h5>
                    <Add_button pizza_id={pizza.id} text={"+"} color={"primary"}/>
                  </div>
                </ListGroup.Item>
              )
            }
          })
          }
        </ListGroup>
        <h2 className='mt-3 ms-3'>Total: <NumericFormat value={Total_cart} displayType={'text'} thousandSeparator={true} prefix={'$'}/></h2>
        <Button variant='success' className='m-3'>Ir a pagar</Button>
      </div>
    </div>
  )
}

export default MyCart