import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

function App() {
  return (
    <>  
    <div className='bg-slate-500 h-screen'>
      <Header />
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
