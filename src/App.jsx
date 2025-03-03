import './App.css'
// import Header from './Pages/Header'
import Content from './Pages/Content'
import ProductAdd from './Components/Admin/ProductAdd'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ProductView from './Components/User/ProductView'
import EachProductView from './Components/Admin/EachProductView'
import UserEachProduct from './Components/User/UserEachProduct'
import Cart from './Components/User/Cart'
import Footer from './Pages/Footer'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import HeaderForUser from './Components/User/HeaderForUser'
// import HeaderForRole from './Pages/HeaderForRole'

function App() {
 

  return (
    <>
     {/* <Header /> */}
     {/* <HeaderForRole/> */}
      <Routes>
        <Route element={ <Content />} path='/'></Route>
        <Route element={  <ProductAdd />} path='/product'></Route>
        <Route element={<Login />} path='/login'></Route>
        <Route element={<Signup />} path='/signup'></Route>
        <Route element={<ProductView />} path='/productView'></Route>
        <Route element={<EachProductView />} path='/:id/eachproductview'></Route>
        <Route element={<UserEachProduct />} path='/:id/usereachproduct'></Route>
        <Route element={<Cart />} path='/:id/cart'></Route>
        <Route element={<About />} path='/about'></Route>
        <Route element={<ContactUs />} path='/contact'></Route>
        <Route element={<HeaderForUser />} path='/headerforuser'></Route>

      </Routes>
      <Footer/>
    
    
    </>
  )
}

export default App
