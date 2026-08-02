import React from 'react'
import './Banner.css'

const Banner = ({title, bgImage}) => {
  return (
   <section className='banner_section' style={{backgroundImage: `url(${bgImage})`}}>
        <div className="banner_wrapper">
            <div className="banner_area">
                <div className="banner_heading  flex justify-center items-center" >
                    <h2 className='text-zinc-800 bg-white p-3 sm:p-4 xl:p-5 rounded-xl font-bold'>{title}</h2>
                    </div>
            </div>
        </div>
   </section>
  )
}

export default Banner