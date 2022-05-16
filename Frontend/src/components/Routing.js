import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Home';
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
              

            </Routes>
        </BrowserRouter>
    )
}

export default Routing