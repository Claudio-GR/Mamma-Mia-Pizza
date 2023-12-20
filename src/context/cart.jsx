import { createContext, useState, useEffect} from "react";
import { useContext } from "react";
import { Pizzas_context } from "../context/pizza-menu";

export const Cart_total = createContext();

const Total_provider = ({ children}) => {
    const [Total_cart, SetTotal_cart] = useState(0)
    const {Pizzas, SetPizzas} = useContext(Pizzas_context)

    const Total_Calculator= () =>{
        const Cart_Calculator = Pizzas.map(pizza => pizza.Total); 
        console.log('Cart Calculator: ', Cart_Calculator)
    
        SetTotal_cart(Cart_Calculator.reduce((a, b) => a+b, 0))    
        console.log('Total Cart: ', Total_cart)
        }

    useEffect(() =>{
        Total_Calculator();
    }, [Pizzas]);

    return (
        <Cart_total.Provider value={{Total_cart, SetTotal_cart}}>
            {children}
        </Cart_total.Provider>)
}

export default Total_provider