import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function App() {
  return(
    <div className='App'>
       {/* <Counter></Counter> */}
       <ExternalUsers></ExternalUsers>
    </div>
  )
}
function ExternalUsers() {
  const [users, setUsers] = useState([])
  // useEffect(()=>{},[])
  // const myfunc = () => {}
  useEffect(()=>{

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))

  },[])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return(
    <div style={{border: '2px solid red', margin: '20px'}}> 
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0); // give Array [0, f]
  
  const decreaseCount = () => setCount(count - 1);
  const increaseCount = () => setCount(count + 1);

  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
export default App