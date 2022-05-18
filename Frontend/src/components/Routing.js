import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ViewHotel from './Customer/ViewHotels';
import Home from './Home';
import HotelAdminDashboard from './HotelAdmin/HotelAdminDashboard';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './SysAdmin/Dashboard';

const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element= {<Home/>}/>
                <Route path='/login' exact element= {<Login/>}/>
                <Route path='/signup' exact element= {<Signup/>}/>
                <Route path='/admindashboard' exact element= {<Dashboard/>}/>
                <Route path='/hoteladmindashboard' exact element= {<HotelAdminDashboard/>}/>
                <Route path='/viewhotels' exact element={<ViewHotel/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing