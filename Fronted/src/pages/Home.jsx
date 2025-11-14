import React from 'react'
import Navbar from '../Components/Navbar'
import Review from '../Components/Review'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Review />
            <About />
            <Footer />
        </div>
    )
}

export default Home