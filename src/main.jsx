import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Shop from './components/shop/Shop.jsx'


const router = createBrowserRouter([
 {
  path : '/',
  element : <App></App>,
  errorElement : <ErrorPage></ErrorPage>,
  children : [
    {
        path : '/',
        element : <Home></Home>
    },
    {
        path : '/Shop',
        element : <Shop></Shop>,
        loader : () => fetch('products.json')
        
    },
    
    {
        path : '/about',
        element :<About></About>
    }
    
  ]
 },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
 

