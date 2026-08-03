import React from 'react'
import Heading from '../Heading/Heading'
import './Process.css'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {

    const renderSteps = steps.map(item=> {
        return(
             <div className='process_content_area'>
                <div className="process_content_number">
                    <span className='number text-white bg-zinc-800'>{item.number}</span>
                </div>
                <div className="process_text_area">
                    <div className="process_icon"><span className='bg-gradient-to-b from-orange-400 to-orange-500 text-white'>{item.icon}</span></div>
                    <div className="process_text">
                        <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
                        <p className='text-zinc-700'>{item.para}</p>
                    </div>
                </div>
             </div>
        )
    })


  return (
   <section className='process_section'>
    <div className="container">
        <div className="process_wrapper">
            <div className="process_area">
                <div className="process_heading">
                    <Heading highlight="Our" heading="Porcess" />
                </div> 
                <div className="process_content_wrapper">{renderSteps}</div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Process

const steps = [
    {
        id : 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icon : <PiPlant />
    },
      {
        id : 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icon : <PiFactory />
    },
      {
        id : 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon : <SlBadge />
    },
      {
        id : 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon : <BsTruck />
    }
]