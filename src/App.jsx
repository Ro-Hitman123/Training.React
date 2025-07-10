import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from  "./Pages/About"
import Home from  "./Pages/Home"
import { Route, Routes } from 'react-router-dom'
import Toolbar from './components/Navigation/Toolbar'
import PageNotFound from './components/UI/PageNotFound'
import ImageCarousel from './components/imageCarousel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImageCarousel />
    <Toolbar/>
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<PageNotFound />}/>
     </Routes>
    </>
  )
}

export default App
