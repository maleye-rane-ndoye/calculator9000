import { Routes,Route } from 'react-router-dom'
import './App.css'
import Calculator from './DumbComponents/Calculator'
import Menu from './DumbComponents/Menu'
import AllCalculs from './DumbComponents/AllCalculs'
import React from './DumbComponents/React'

function App() {
  

  return (
    <>
     <Menu/>
        <Routes>
          <Route path="/" element={<Calculator/>} />
        </Routes>
        <Routes>
          <Route path="/AllCalculs" element={<AllCalculs/>} />
        </Routes>
        <Routes>
          <Route path="/React" element={<React/>} />
        </Routes>
      
    </>
  )
}

export default App
