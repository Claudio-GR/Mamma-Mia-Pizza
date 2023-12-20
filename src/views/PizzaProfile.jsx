import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PizzaProfile = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>INSERTE NOMBRE DE PIZZA</Card.Title>
        <hr></hr>
        <p>AQUI VA LA DESCRIPCCION DE LA PIZZA SELECCIONADA</p> 
          <p>Ingredientes se traeran como lista </p>
          <p>Ingresar aca el precio de la pizza</p>
       
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  )
}

export default PizzaProfile