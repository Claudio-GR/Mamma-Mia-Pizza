import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaProfile from './views/PizzaProfile'
import MyCart from './views/MyCart'

function App() {

  return (
    <>
      <Navigation/>
<Routes>
  <Route path='/'
  element={<Home/>}>
  </Route>
  <Route path='/pizza/:id'
  element={<PizzaProfile/>}>
  </Route>
  <Route path='/carrito'
  element={<MyCart/>}>
  </Route>
  {/* <Route path='*'
  element={<NotFound/>}>
  </Route> */}
</Routes>
    </>
  )
}

export default App
