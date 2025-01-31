import React from 'react'
import Hero from '../components/Hero'
import ServiceSection from '../components/ServiceSection'
import InstituteSection from '../components/InstituteSection'
import Testimonial from '../components/Testimonial'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <>
      <div>
      <Hero/>
      <ServiceSection/>
      <InstituteSection/>
      <Testimonial/>
      <BlogSection/>
      <Footer/>
      </div>
    </>
  )
}

export default Landing
