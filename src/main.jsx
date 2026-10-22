import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './About.jsx' // We will create this next
import './index.css'
import Login from './Login'
import Signup from './Signup.jsx'
import { createRoot } from 'react-dom/client';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
], {
  basename: "/ShrijeetAmbastha_Task28" // 👈 ADD THIS CONFIGURATION ARRAY HERE
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)