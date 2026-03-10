import { Route, Router } from 'react-router'
import './App.css'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop.jsx'
import Auth from './Pages/Auth.jsx'
import Checkout from './Pages/Checkout.jsx'
import Navbar from './Pages/navbar.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } ></Route>
        <Route path='/auth' element={ <Auth /> } ></Route>
        <Route path='/shop' element={ <Shop /> } ></Route>
        <Route path='/checkout' element={ <Checkout /> } ></Route>
      </Routes>
    </>
  )
}

export default App
