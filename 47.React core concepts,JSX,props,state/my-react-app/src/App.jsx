import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const singerName = "Argit Islam";
const details = {job: "singer", Home: "India", salary: 200000}

const singerStyle = {
  color: "red",
  backgroundColor: 'white'
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="container">
        <h1>Container with className</h1>
        <img src="/public/vite.svg" alt="" />
      </div>
      <div className="music">
          <p style={singerStyle}>Music: {singerName}</p>
          <p>Job: {details.job}</p>
          <p style={{color: "red", backgroundColor: 'yellow'}}>Home: {details.Home}</p>
          <p>Salary: {details.salary}</p>
        </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
