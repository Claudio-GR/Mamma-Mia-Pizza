import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Pizzas_provider from './context/pizza-menu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Pizzas_provider>
        <App />
      </Pizzas_provider>
    </BrowserRouter>
  </React.StrictMode>,
)
