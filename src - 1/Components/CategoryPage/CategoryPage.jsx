import React from 'react'
import Banner from '../Banner/Banner'
import productList from '../ProductList/ProductList'
import products from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Heading from '../Heading/Heading'
import './CategoryPage.css'

const CategoryPage = ({title, bgImage, categories=[]}) => {
  //  FILTER 
  let filteredItems =  categories.includes('All')
  ? productList
  : productList.filter(item=> categories.includes(item.category))

    const renderProduct = filteredItems.map(product=>{
        return(
            <Cards image={product.image} name={product.name} price={product.price}/>
        )
    })

  return (
    <>
     <Banner title={title} bgImage={bgImage} />
    <section className='all_product_section'>
       
      <div className="container">
        <div className="all_product_wrapper">
            <div className="all_product_area">
              <div className="all_product_heading">
                 <Heading highlight="All" heading="Products" />
              </div>
                  <div className='all_product_content_area grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7 md:gap-5 mt-10 md:mt-20'>
            {renderProduct}
        </div>
            </div>
        </div>
      </div>

        </section>
        </>
  )
}

export default CategoryPage