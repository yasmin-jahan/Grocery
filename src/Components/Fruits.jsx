import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/fruits-Banner.jpg'

const Fruits = () => {
  return (
  <div>
     <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} categories={['Fruits', 'vegetables']}/>
  </div>
  )
}

export default Fruits