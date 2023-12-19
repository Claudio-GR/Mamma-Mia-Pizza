import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";

const Home = () => {
    const {Pizzas, setPizzas} = useContext(Pizzas_context)
    console.log(Pizzas)
    return (
        <div className="App">
            <h1>Pizza Mamma Mia!</h1>
            <div className="gallery grid-columns-5 p-3">
                {Pizzas.map((pizza) => (
                    <div /*onClick={() => addlike(picture.id)} className="photo" style={{backgroundImage: `url(${picture.src.medium})`}}*/ key={pizza.id}>
                        <section>
                            <h3>{pizza.name}</h3>
                            <p> {pizza.desc} </p> {/* aquí se inserta la descripción de la fotografía */}
                            {/* aquí se podría agregar más info sobre la foto */}
                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
  };
export default Home;