import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import Userdata from './Userdata';
import Navbar from './Navbar';
import Useradd from './Useradd';
import Useredit from './Useredit';
import Userdetails from './Userdetails';

const Mainrouter = createBrowserRouter ([
    {
        path : "/",
        element : <><Navbar/><Userdata/></>
    },
    {
        path : "/useradd",
        element : <><Navbar/><Useradd/></>
    },
    {
        path : "/useredit/:userid",
        element : <><Navbar/><Useredit/></>
    },
    {
        path : "/userdetails/:userid",
        element : <><Navbar/><Userdetails/></>
    }
])
export default Mainrouter