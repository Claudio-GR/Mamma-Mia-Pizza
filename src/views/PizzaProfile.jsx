import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Pizzas_context } from "../context/pizza-menu";
import { useParams } from 'react-router-dom';
import Add_button from '../components/AddingButton';
import Sus_button from '../components/SustractingButton';
import Container from 'react-bootstrap/Container';

const PizzaProfile = () => {
  const { Pizzas} = useContext(Pizzas_context);
const {id} = useParams()
const conFilter = Pizzas.filter((e)=>e.id==id)
const imgProfile = conFilter.map((e)=>e.img)

  return (
    <div className='sectionProfile'>
      <div className='fontWeigth'>
      <Container className="pizza_profile">
        <Container className='m-4'>
          <img className='imgProfile' src={imgProfile}/>
        </Container>
        <Container>
          { conFilter.map((e)=>(
          <Card.Body  key={e.id}>
            <Card.Title  style={{textTransform: 'capitalize'}}>{e.name}</Card.Title>
            <hr></hr>
            <p>{e.desc}</p> 
            <p>Ingredientes:</p>
              <ul>
              {e.ingredients.map(ing => <li className='spanIngredients'>{ing}</li>)}
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
            ))
          }
        </Container>
      </Container>
      </div>
   
    </div>
  )
}



export default PizzaProfile