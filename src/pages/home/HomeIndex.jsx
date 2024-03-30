import React from 'react'
import HeroSlider from './heroSlider/HeroSlider'
import FindCar from './findCar/FindCar'
import AboutUs from './aboutUs/AboutUs'
import Popularservices from './popularServices/Popularservices'
import HotOffer from './hotOffer/HotOffer'
import Banner from './banner/Banner'
import Testimonials from './testimonials/Testimonials'
import Blog from './blog/Blog'

const HomeIndex = () => {
  return (
    <div>
      <HeroSlider/>
      <FindCar/>
      <AboutUs/>
      <Popularservices/>
      <HotOffer/>
      <Banner/>
      <Testimonials/>
      <Blog/>
    </div>
  )
}

export default HomeIndex