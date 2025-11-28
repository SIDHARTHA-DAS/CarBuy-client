
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Page404 from './pages/Page404'
import Footer from './components/Footer'
import LayOut from './pages/Owner/LayOut'
import DashBord from './pages/Owner/DashBord'
import AddCar from './pages/Owner/AddCar'
import ManageCar from './pages/Owner/ManageCar'
import ManageBooking from './pages/Owner/ManageBooking'
import Login from './components/Login'
import {Toaster} from "react-hot-toast"
import { useAppContext } from './context/AppContext'

const App = () => {

   
  const {showLogin} =useAppContext()
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
    <Toaster/>
      {showLogin && <Login/>}
    
      {!isOwnerPath && <NavBar/>}
       
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/owner' element={<LayOut/>}>
            <Route index element={<DashBord/>}/>
            <Route path='add-car' element={<AddCar/>}/>
            <Route path='manage-cars' element={<ManageCar/>}/>
            <Route path='manage-bookings' element={<ManageBooking/>}/>
        </Route>
        <Route path='*' element={<Page404/>}/>
       </Routes>

      {!isOwnerPath && <Footer/>}
        
    </>
  )
}

export default App
