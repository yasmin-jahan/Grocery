import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgAll from '../../assets/all-banner.jpg'

const Allproducts = () => {
  return (
    <div>
       <CategoryPage title="All Products" bgImage={bgAll} categories={['All']} />  

    </div>
  )
}

export default Allproducts