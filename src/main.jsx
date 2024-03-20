import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Profile from './pages/Profile.jsx'
import Cart from './pages/Cart.jsx'
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/signup" element={<Signup/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/profile" element={<Profile/>}/>
      <Route path ="/cart" element={<Cart/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
