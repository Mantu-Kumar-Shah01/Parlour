import React from 'react'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import About from './Components/About'
import Review from './Components/Review'
import { ToastContainer } from 'react-toastify'
import BookAppointment from './Components/BookAppointment'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import FormPage from './pages/FormPage'

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (<Home/>),
      },
      {
        path: "/services",
        element: (
        <ServicesPage/>
        ),
      },
      {
        path: "/contact",
        element: (
         <ContactPage/>
        ),
      },
      {
        path: "/about",
        element: (
        <AboutPage/>
        ), 
      },
      {
        path: "/Form",
        element: (
         <FormPage/>
        ),
      },
      {
        path: "*", // fallback for unknown routes
        element: <h1>404 | Page Not Found</h1>,
      },
    ],
    {
      basename: "/Parlour", // 👈 IMPORTANT for GitHub Pages
    }
  )

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
