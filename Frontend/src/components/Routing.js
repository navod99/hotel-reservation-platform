import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Addroom from './Addroom';
import ViewHotel from './Customer/ViewHotels';
import Home from './Home';
import HotelAdminDashboard from './HotelAdmin/HotelAdminDashboard';
import Login from './Login';
import AddReservation from './Reservation/AddReservation.js'
import Date from './Reservation/date.js'
import Signup from './Signup';
import Updatehotel from './Updateroom';
import Dashboard from './SysAdmin/Dashboard';
import ViewBooking from './Reservation/ViewBoking'
import ViewRoom from './ViewRoom';
const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element= {<Home/>}/>
                <Route path='/login' exact element= {<Login/>}/>
              <Route path ='/AddReservation'exact element= {<AddReservation/>}/>
                <Route path='/signup' exact element= {<Signup/>}/>
                <Route path='/admindashboard' exact element= {<Dashboard/>}/>
                <Route path='/mybooking' exact element={<ViewBooking />} />
                <Route path='/Edit' exact element = {<AddReservation/>}/>
                <Route path = '/addhotel' exact element={<Addroom/>}/>
                <Route path = '/updatehotel' exact element={<Updatehotel/>}/>
               <Route path = '/viewrooms/:id' exact element={<ViewRoom/>}/>

                <Route path='/admindashboard' exact element= {<Dashboard/>}/>
                <Route path='/hoteladmindashboard' exact element= {<HotelAdminDashboard/>}/>
                <Route path='/viewhotels' exact element={<ViewHotel/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing