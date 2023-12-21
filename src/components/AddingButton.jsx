import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";
import Button from "react-bootstrap/Button";

const Add_button = ({pizza_id}) => {
    const { Pizzas, SetPizzas} = useContext(Pizzas_context);
    const Add_qty = (id) => {
        console.log("Pizzas befor change", Pizzas);
        const newQtys = Pizzas.map((pizza) => {
          if (pizza.id === id) {
            return {
              ...pizza,
              Qty: pizza.Qty + 1,
              Total: (pizza.Qty + 1) * pizza.price,
            };
          }
          return pizza;
        });
        SetPizzas(newQtys);
        console.log("Pizzas after change", Pizzas);
      };
      
      return (
                <Button variant="primary" onClick={() => Add_qty(pizza_id)}>
                    +
                </Button>
      )
}

export default Add_button