import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";

const Home = () => {
    const {Pizzas, SetPizzas, Total_cart, SetTotal_cart} = useContext(Pizzas_context)

    const Total_Calculator= () =>{
        const Cart_Calculator = Pizzas.map(pizza => pizza.Total); 
       console.log('Cart Calculator: ', Cart_Calculator)
   
       SetTotal_cart(Cart_Calculator.reduce((a, b) => a+b, 0))    
       console.log('Total Cart: ', Total_cart)
    }
    
    const Add_qty = (id) => {
        console.log('Pizzas befor change', Pizzas)    
        const newQtys = Pizzas.map((pizza)=> {
            if(pizza.id===id) {
              return {
                ...pizza, Qty: pizza.Qty+1, Total: (pizza.Qty+1)*pizza.price
              }
            }
            return pizza
            }
          );
          SetPizzas(newQtys);
          console.log('Pizzas after change', Pizzas)    
          Total_Calculator();
    }
    const Sus_qty = (id) => {
        console.log('Pizzas befor change', Pizzas)    
        const newQtys = Pizzas.map((pizza)=> {
            if(pizza.id===id && pizza.Qty!==0) {
              return {
                ...pizza, Qty: pizza.Qty-1, Total: (pizza.Qty-1)*pizza.price
              }
            }
            return pizza
            }
          );
          SetPizzas(newQtys);
          console.log('Pizzas after change', Pizzas)    
          Total_Calculator();
    }
    return (
        <div className="App">
            <h1>Pizza Mamma Mia!</h1>
            <h2>{Total_cart}</h2>
            <div className="gallery grid-columns-5 p-3">
                {Pizzas.map((pizza) => (
                    <div key={pizza.id}>
                        <section>
                            <img src={pizza.img} alt="" />
                            <h3>{pizza.name}</h3>
                            <p> {pizza.price} </p> {/* aquí se inserta la descripción de la fotografía */}
                            <div>
                                <button onClick={() => Sus_qty(pizza.id)}>-</button>
                                <p>{pizza.Qty}</p>
                                <button onClick={() => Add_qty(pizza.id)}>+</button>
                                <p>{pizza.Total}</p>
                            </div>
                            {/* aquí se podría agregar más info sobre la foto */}
                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
  };
export default Home;