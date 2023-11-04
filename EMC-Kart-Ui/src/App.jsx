import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Product from './components/Product'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
