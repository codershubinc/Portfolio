import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home/Home'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Latout from '../Latout.jsx'
import Github from './Components/GitHub/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Latout />} >
      <Route path='/' element={<Home />} />
      <Route path='/github/:id' element={<Github />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
