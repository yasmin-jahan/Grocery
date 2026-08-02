import React from 'react'
import './Heading.css'

const Heading = (props) => {
    return (
        <div className="common_heading">
            <h2 className='font-bold text-zinc-900'><span className='text-orange-500'>{props.highlight}</span> {props.heading} </h2>
        </div>
    )
}

export default Heading