import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
import './Hero.css'

const Hero = () => {
  return (
   <section className='hero_section'>
      <div className="container">
        <div className="hero_wrapper">
            <div className="hero_area   items-center ">
                {/* HERO CONTENT  */}
          <div className='hero_content_area flex-1'>
            <span className='heading_span bg-orange-100 text-orange-500  px-5 py-2 rounded-full'>Export Best Quality...</span>
            <h1 className='mt-4 font-bold text-zinc-800'>Tasty Organic <span className='text-orange-500'>Friuts</span> & <span className='text-orange-500'>Veggies</span>  In Your City</h1>
            <p className='text-zinc-600 mt-4 sm:mt-5 mb-6 sm:mb-10'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
            <Button content="Shop Now" />
          </div>

          {/* HERO IMAGE  */}
          <div className='hero_image flex-1'>
            <img src={Grocery} alt="Hero Image" />
          </div>
            </div>
        </div>
      </div>
      
   </section>
  )
}

export default Hero