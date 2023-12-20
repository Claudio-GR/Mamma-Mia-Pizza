import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, NavLink } from "react-router-dom";

const Home = () => {
  const { Pizzas, SetPizzas, Total_cart, SetTotal_cart } =
    useContext(Pizzas_context);

  const Total_Calculator = () => {
    const Cart_Calculator = Pizzas.map((pizza) => pizza.Total);
    console.log("Cart Calculator: ", Cart_Calculator);

    SetTotal_cart(Cart_Calculator.reduce((a, b) => a + b, 0));
    console.log("Total Cart: ", Total_cart);
  };

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
    Total_Calculator();
  };
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
    Total_Calculator();
  };

  const navigate = useNavigate();
  const goToDetails = () => {
    navigate("/pizza/:id");
  };
  const goToCart = () => {
    navigate("/carrito");
  };
  return (
    <div className="App">
      <h1>Pizza Mamma Mia!</h1>
      <h2>{Total_cart}</h2>
      <div className="gallery grid-columns-5 p-3">
        {Pizzas.map((pizza) => (
          <div key={pizza.id}>
            <section>
              <Card className="photo" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  onClick={goToDetails}
                  src={pizza.img}
                  alt=""
                />
                <Card.Body>
                  <h3>{pizza.name}</h3>
                  <p> {pizza.price} </p>{" "}
                  {/* aquí se inserta la descripción de la fotografía */}
                  <div>
                    <button onClick={() => Sus_qty(pizza.id)}>-</button>
                    <p>{pizza.Qty}</p>
                    <button onClick={() => Add_qty(pizza.id)}>+</button>
                    <p>{pizza.Total}</p>
                  </div>
                  <div className="buttons">
                    <Button variant="primary" onClick={goToDetails}>
                      ver mas
                    </Button>
                    <Button variant="primary" onClick={goToCart}>
                      Carrito
                    </Button>

                    {/* aquí se podría agregar más info sobre la foto si */}
                  </div>
                </Card.Body>
              </Card>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
