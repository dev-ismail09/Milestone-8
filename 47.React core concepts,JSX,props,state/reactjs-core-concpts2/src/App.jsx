import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const allProducts = [
    {name: 'Laptop', price: 120000, brand: 'Apple'},
    {name: 'Mobile', price: 90000, brand: 'Apple'},
    {name: 'Table', price: 920000, brand: 'Apple'},
    {name: 'AirPods', price: 20000, brand: 'Apple'},
  ]
  return(
    <div>
       {
        allProducts.map(product => <Products name={product.name} price={product.price} brand={product.brand}></Products>)
       }
    </div>
  )
}

function Products(props){
  return(
    <div className='product-class'>
      <h1>Product Name: {props.name}</h1>
      <h3>Price: {props.price}</h3>
      <h3>Brand: {props.brand}</h3>
    </div>
  )
}



export default App
