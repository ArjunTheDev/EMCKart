import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Product from './components/Product'
import Signup from './components/Signup'
import Login from './components/Login'
import ProductUpload from './components/ProductUpload'
import Checkout from './components/Checkout'

function App() {

  return (
    <>     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Product />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/productUpload' element={<ProductUpload />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
