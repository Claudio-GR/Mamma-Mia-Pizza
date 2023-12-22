import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Pizzas_context } from "../context/pizza-menu";
import { useParams } from 'react-router-dom';
import Add_button from '../components/AddingButton';
import Sus_button from '../components/SustractingButton';

const PizzaProfile = () => {
  const { Pizzas} = useContext(Pizzas_context);
const {id} = useParams()
const conFilter = Pizzas.filter((e)=>e.id==id)

  return (
    <div>
      { conFilter.map((e)=>(
      <Card style={{ width: '18rem' }} key={e.id}>
      <Card.Img variant="top" src={e.img} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <hr></hr>
        <p>{e.desc}</p> 
          <ul>
          {e.ingredients.map(ing => <li>{ing}</li>)}
          </ul>
          <p>{`$${e.price}`}</p>
       
        <div className="buttons">
                    {e.Qty!==0 ? 
                      <div className="d-flex justify-content-around">
                        <Sus_button pizza_id={e.id}/>
                        <h5 className="m-2">
                          {e.Qty}
                        </h5>
                        <Add_button pizza_id={e.id} text={"+"} color={"primary"}/>
                      </div>
                      :
                      <Add_button pizza_id={e.id} text={"Añadir"} color={"danger"}/>
                    }
                   
                  </div>
      </Card.Body>
    </Card>
        ))
      }
   
    </div>
  )
}



export default PizzaProfile