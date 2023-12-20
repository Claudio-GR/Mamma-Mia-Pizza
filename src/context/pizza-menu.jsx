import { createContext, useState, useEffect} from "react";
const Pizza_URL = '/pizzas.json';

export const Pizzas_context = createContext();

const Pizzas_provider = ({ children}) => {
    const [Pizzas, SetPizzas] = useState([])
    const [Total_cart, SetTotal_cart] = useState(0)


    const Pizzas_data = async () => {
        try {
             const resolution=await fetch(Pizza_URL)

             if(!resolution.ok){
                 throw new Error ("Hay un error en la data");
             }
             //console.log("respuesta de la api", resolution)
            
             const Pizza_data =await resolution.json();
             //console.log('this is picture_data', Pizza_data);
             SetPizzas(Pizza_data.map((pizza) => ({...pizza, Qty:0, Total:0})))
             //console.log('context data: ', Pizzas)
         } catch(error){
             console.error({message:error})
         }
     }


    useEffect(() =>{
        Pizzas_data();
    }, []);

    return (
        <Pizzas_context.Provider value={{Pizzas, SetPizzas, Total_cart, SetTotal_cart}}>
            {children}
        </Pizzas_context.Provider>)
}

export default Pizzas_provider