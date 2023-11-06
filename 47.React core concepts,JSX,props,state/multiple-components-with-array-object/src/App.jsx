import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const nameArray =['Ismail', 'Abir', 'Hemel', 'Ridoy', 'Ratul'];
  const arryObject = [
    {name: 'Dr. Mahfuz', job: 'Doctor'},
    {name: 'Dr. Shila', job: 'Doctor'},
    {name: 'Dr. Rifa', job: 'Doctor'}
  ]
  return(
    <div className='App'>
      {
        nameArray.map(name => <Person name={name}></Person>)
      }
      {
        arryObject.map(name => <Person name={name.job}></Person>)
      }

      {/* <Person name={nameArray[0]} job={jobArray[0]}></Person>
      <Person name={nameArray[1]} job={jobArray[1]}></Person>
      <Person name={nameArray[2]} job={jobArray[2]}></Person>
      <Person name={nameArray[3]} job={jobArray[3]}></Person> */}
    </div>
  );
}

// same in look, different in data
function Person(props) {
  // console.log(props);
  return(
    <div className='StyleDiv'>
      <h1>Name: {props.name}</h1>
      <p>{props.job}</p>
    </div>
  )
}

export default App
