
import { useState } from 'react'
import {NavbarComponent} from './components/navbar/NavbarComponent'
import {Home} from './pages/home/Home'
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponent/>
     <Routes >
      <Route path="/" element={ <Home /> } />
    </Routes>
    </>
  )
}

export default App
