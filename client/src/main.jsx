import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Router} from "react-router-dom";
import Startpage from './pages/Startpage.jsx'
import Artistpage from "./pages/Artistpage.jsx";
import Filterpage from "./pages/Filterpage.jsx";
import Paymentpage from "./pages/Paymentpage.jsx";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={
          createBrowserRouter(
              createRoutesFromElements(
                  <Route path={'/'}>
                      <Route index element={<App/>}/>
                      <Route path={'/Startpage'} element={<Startpage/>}/>
                      <Route path={'/Artists'} element={<Artistpage/>}/>
                      <Route path={'/Filterpage'} element={<Filterpage/>}/>
                      <Route path={'/Paymentpage'} element={<Paymentpage/>}/>
                  </Route>
              )
          )
      }/>

  </React.StrictMode>,
)
