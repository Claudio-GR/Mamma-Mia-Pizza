import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";
import Button from "react-bootstrap/Button";

const Sus_button = ({pizza_id}) => {
    const { Pizzas, SetPizzas} = useContext(Pizzas_context);
      const Sus_qty = (id) => {
        console.log("Pizzas befor change", Pizzas);
        const newQtys = Pizzas.map((pizza) => {
          if (pizza.id === id && pizza.Qty !== 0) {
            return {
              ...pizza,
              Qty: pizza.Qty - 1,
              Total: (pizza.Qty - 1) * pizza.price,
            };
          }
          return pizza;
        });
        SetPizzas(newQtys);
        console.log("Pizzas after change", Pizzas);
      };
      
      return (
                <Button variant="danger"  onClick={() => Sus_qty(pizza_id)}>
                    -
                </Button>

      )
}

export default Sus_button