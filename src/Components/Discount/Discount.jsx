import React from 'react'
import './Discount.css'
import Button from '../Button/Button'
// import FreshFruit from '../../assets/fresh-fruit.png'

const Discount = () => {
  return (
   <section className='discount_section bg-white'>
    <div className="container">
        <div className="discount_wrapper">
            <div className="discount_area">
               <div className="discount_content_wrapper flex">
                <div className="disocunt_text ">
                     <span className='font-bold text-orange-500 '>20%</span>
                </div>
                <div className="discount_content_area">
                    <h2 className='text-zinc-800 font-bold'>First Order <span>Discount!</span></h2>
                    <p className='text-zinc-600 my-4 md:my-6'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                    <Button content="Get a Discount" />
                </div>
               </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Discount