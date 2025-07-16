import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from  "./Pages/About"
import Home from  "./Pages/Home"
import { Route, Routes } from 'react-router-dom'
import Toolbar from './components/Navigation/Toolbar'
import PageNotFound from './components/UI/PageNotFound'
import CardDetails from './Pages/CardDetails'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Event from './Pages/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Toolbar/>
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/card/:id' element={<CardDetails />}/>
      <Route path='/Blog' element={<Blog />}/>
      <Route path='/Event' element={<Event />}/>

      
     </Routes>
    </>
  )
}

export default App
