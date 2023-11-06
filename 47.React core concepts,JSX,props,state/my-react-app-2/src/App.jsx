import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return(
    <div>
      <Person name="Ismail Hosen" job="Web Developer"></Person>
      <Person name="Abir" job="Video Edit"></Person>
      <Person name="Hemel" job="Gaming"></Person>
      <p>A new element</p>
      <Friend name="Ismail" Number="01881881367"></Friend>
      <Friend name="Abir" Number="01881880000"></Friend>
      <Friend name="Hemel" Number="01881881111"></Friend>
    </div>
  );
}

// same in look, different in data
function Person(props) {
  // console.log(props);
  return(
    <div className='StyleDiv'>
      <h1>Name: {props.name}</h1>
      <p>Job: {props.job}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props)
  return (
    <div className='StyleDiv'>
      <h1>{props.name}</h1>
      <p>Number: {props.Number}</p>
    </div>
  )
}

export default App
