import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Review from './Components/Review'
import { ToastContainer } from 'react-toastify'


const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <Header />
            <Review />
            <About />
            <Footer />
          </>
        ),
      },
      {
        path: "/home",
        element: (
          <>
            <Navbar />
            <Header />
            <Review />
            <About />
            <Footer />
          </>
        ),
      },
      {
        path: "/services",
        element: (
          <>
            <Navbar />
            <Services />
            <Footer />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <Navbar />
            <About />
            <Footer />
          </>
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
