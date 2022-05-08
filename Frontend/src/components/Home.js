import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import HomeBanner from './HomeContent/HomeBanner'
import HomeCards from './HomeContent/HomeCards'

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeBanner/>
        <HomeCards/>
        <Footer/>
    </div>
  )
}

export default Home