import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Add } from './Add'
import { Add1 } from './assets/Add1'
import Product from './Products'
import Product1 from './Product1'
import Register from './Register'
import RegisterUser from './User.Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <RegisterUser/>
    </>
  )
}

export default App
