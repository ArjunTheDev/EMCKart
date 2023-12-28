import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Product from './components/Product'
import Signup from './components/Signup'
import Login from './components/Login'
import ProductUpload from './components/ProductUpload'
import Checkout from './components/Checkout'
import { useSelector } from 'react-redux'
import NotFound from './components/Notfound'
import Final from './components/Final'

function App() {
  const { userData } = useSelector((state) => state.user);

  const authCheck = (component) => {
    return userData?.name ? component : <Navigate to="/login" />;
  };

  return (
    <>     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={authCheck(<Product />)}
          />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/productUpload'
            element={authCheck(<ProductUpload />)}
          />
          <Route
            path='/checkout'
            element={authCheck(<Checkout />)}
          />
          <Route
            path='/finalFun'
            element={authCheck(<Final />)} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
