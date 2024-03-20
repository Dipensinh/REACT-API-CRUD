import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider } from 'react-router-dom'
import Mainrouter from './Mainrouter'

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={Mainrouter}>
 </RouterProvider>
)
