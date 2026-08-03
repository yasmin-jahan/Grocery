import React, { useState } from 'react'
import './Products.css'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'
import products from '../ProductList/ProductList'
import {Link} from 'react-router-dom'



const Products = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActivetab] = useState('All');

    let filteredItems = activeTab === 'All'
    ? ProductList : ProductList.filter(item=>item.category === activeTab);


    const renderCards = filteredItems.slice(0,8).map(product => {
        return(
            <Cards  image={product.image} name={product.name} price={product.price} />
        )
    })
    
  return (
    <section className='products_section'>
        <div className="container">
            <div className="products_wrapper">
                <div className="products_area">
                    <div className="products_heading">
                        <Heading highlight="Our" heading="Products" />
                    </div>
                    {/* TABS  */}
                    <div className="products_tabs_wrapper">
                        <div className="products_tabs flex gap-3">{categories.map(category => {
                            return(
                                <button className={`cursor-pointer rounded-lg hover:bg-gradient-to-b from-orange-400 to-orange-500 transition-all duration-400 ease-in-out hover:text-white ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-white'}`} key={category} onClick={() => setActivetab(category)}> {category} </button>
                            )
                        })}</div>
                      
                    </div>
                      {/* TABS  */}

                    {/* PRODUCT LISTING  */}
                    <div className="products_card_wrapper grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7 md:gap-5 mt-10 md:mt-20">
                        {renderCards}
                    </div>
                    {/* PRODUCT LISTING  */}

                    {/* VIEW ALL BUTTON  */}
                    <div className="view-bt text-center mt-8 sm:mt-15">
                        {/* <Button content="View All" /> */}
                        <Link to="/allproducts" className='common_btn bg-gradient-to-b from-orange-400 to-orange-500 text-white  rounded-lg cursor-pointer hover:scale-105 hover:to-orange-600 transition-all duration-300'>View All</Link>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Products
