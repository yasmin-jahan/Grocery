import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
import './Cards.css'

const Cards = ({image, name, price}) => {
  return (

   <div className="products_card_area bg-white px-3 py-4 sm:px-4 sm:py-6 rounded-xl">
     <div className='products_card_content_area'>
        <div className="products_card_icons flex justify-between">
            <span className='text-zinc-300 cursor-pointer'> <FaHeart /> </span>
        <button className='bg-gradient-to-b cursor-pointer from-orange-400 to-orange-500 text-white rounded-lg'> <FaPlus /> </button>
        </div>
        <div className="products_card_imgae w-full h-50">
            <img src={image} alt="" className='w-full mx-auto h-full object-contain' />
        </div>
        <div className="products_card_content text-center">
            <h3 className='text-zinc-800 font-semibold'>{name}</h3>
            <p className='font-bold mt-2 mb-2 sm:mt-4 sm:mb-3'>${price.toFixed(2)}</p>
            <Button content="Shop Now" />
        </div>
    </div>
   </div>
 
  )
}

export default Cards