import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componentes/Navbar'
import { Route, Routes ,BrowserRouter } from 'react-router-dom'
import Relojes from './Componentes/paginas/Relojes'
import Contacto from './Componentes/paginas/Contacto'
import Escritura from './Componentes/paginas/Escritura'
import Home from './Componentes/paginas/Home'
import ItemlistContainer from './Componentes/ItemlistContainer/ItemlistContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <BrowserRouter>
     <Navbar/>
    <Routes>
     <Route path='/Home' element = {<Home/>}/>
     <Route path='/Contacto' element = {<Contacto/>}/>
     <Route path='Escritura/' element = {<Escritura/>}/>
     <Route path='/Relojes' element = {<Relojes/>}/>
    </Routes>
    </BrowserRouter>
    <ItemlistContainer greeting="Mis productos"/>
    </>
  )
}

export default App
