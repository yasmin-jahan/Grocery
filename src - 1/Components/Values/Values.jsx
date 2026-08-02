import { React, useLayoutEffect }  from 'react'
import './Value.css'
import Heading from '../Heading/Heading'
import Basket from '../../assets/basket-full-vegetables.png'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";

const Values = () => {
useLayoutEffect(() => {
    const syncHeights = () => {
        const leftTitles = document.querySelectorAll(".value_left_content h3");
        const rightTitles = document.querySelectorAll(".value_right_content h3");

        leftTitles.forEach((left, index) => {
            const right = rightTitles[index];
            if (!right) return;

            left.style.height = "auto";
            right.style.height = "auto";

            const max = Math.max(left.offsetHeight, right.offsetHeight);

            left.style.height = `${max}px`;
            right.style.height = `${max}px`;
        });

        const leftDesc = document.querySelectorAll(".value_left_content p");
        const rightDesc = document.querySelectorAll(".value_right_content p");

        leftDesc.forEach((left, index) => {
            const right = rightDesc[index];
            if (!right) return;

            left.style.height = "auto";
            right.style.height = "auto";

            const max = Math.max(left.offsetHeight, right.offsetHeight);

            left.style.height = `${max}px`;
            right.style.height = `${max}px`;
        });
    };

    syncHeights();

    window.addEventListener("resize", syncHeights);
    return () => window.removeEventListener("resize", syncHeights);
}, []);


    const LeftValues = vlaue.slice(0, 2).map(item => {
        return (
            <div className='value_left_content_area' key={item.id}>
                <div className='value_left_icon'>
                    <span className=' text-white bg-gradient-to-b from-orange-400 to-orange-500 rounded-full'>{item.icon}</span>
                </div>
                <div className='value_left_content value_content'>
                    <h3 className='text-zinc-800 font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.description}</p>
                </div>
            </div>
        )
    });

    const RightValues = vlaue.slice(2).map(item => {
        return (
            <div className='value_right_content_area' key={item.id}>
                <div className='value_right_icon'>
                    <span className=' text-white bg-gradient-to-b from-orange-400 to-orange-500  rounded-full'>{item.icon}</span>
                </div>
                <div className='value_right_content value_content'>
                    <h3 className='text-zinc-800 font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.description}</p>
                </div>
            </div>
        )
    });

    return (
        <section className='value_section'>
            <div className="container">
                <div className="value_wrapper">
                    <div className="value_area">
                        <div className="value_heading">
                            <Heading highlight="Our" heading="Values" />
                        </div>
                        <div className="value_content_area flex">
                            <div className="value_left_content_wrapper common_value_content min-h-100 flex flex-col justify-between">{LeftValues}</div>

                            <div className="value_image common_value_content">
                                <img src={Basket} alt="Basket Fruit" />
                            </div>

                            <div className="value_right_content_wrapper common_value_content min-h-100 flex flex-col justify-between">{RightValues}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values


const vlaue = [
    {
        id: 1,
        title: 'Trust',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Organic',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />
    }
]