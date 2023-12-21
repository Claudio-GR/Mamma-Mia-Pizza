import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";

const Add_button = ({pizza_id, text, color}) => {
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
                <Button variant={color} onClick={() => Add_qty(pizza_id)}>
                    {text}
                </Button>
      )
}

export default Add_button;