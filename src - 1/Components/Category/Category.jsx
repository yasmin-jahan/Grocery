import { React, useEffect } from 'react'
import './Category.css'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'
import {Link} from 'react-router-dom'

const Category = () => {

    // SET HEIGHT OF ELEMENT 
    const getItemsPerRow = () => {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 991) return 2;
        return 3;
    };
    useEffect(() => {

        const matchHeightByRow = (selector) => {
            const itemsPerRow = getItemsPerRow();
            const elements = [...document.querySelectorAll(selector)];

            elements.forEach(el => el.style.height = 'auto');

            for (let i = 0; i < elements.length; i += itemsPerRow) {
                const row = elements.slice(i, i + itemsPerRow);
                const max = Math.max(...row.map(el => el.offsetHeight));

                row.forEach(el => {
                    el.style.height = `${max}px`;
                });
            }
        };

        const applyHeights = () => {
            matchHeightByRow('.shop_card_content h3');
            matchHeightByRow('.shop_card_content p');
        };

        applyHeights();

        window.addEventListener('resize', applyHeights);

        return () => window.removeEventListener('resize', applyHeights);

    }, []);

    // SET HEIGHT OF ELEMENT ENDS


    // RENDER CARDS 
    const renderCards = category.map((card) => (
        <div className='shop_category_card_content' key={card.id}>
            <div className='shop_card_image'>
                <img src={card.image} alt="" />
            </div>
            <div className="shop_card_content bg-white">
                <h3 className='text-zinc-800'>{card.title}</h3>
                <p className='text-zinc-600'>{card.description}</p>
                {/* <Button content="See All" /> */}
                <Link to={card.path} className='common_btn bg-gradient-to-b from-orange-400 to-orange-500 text-white  rounded-lg cursor-pointer hover:scale-105 hover:to-orange-600 transition-all duration-300'>See All</Link>
            </div>
        </div>
    ));

    return (
        <section className='shop_category_section'>
            <div className="container">
                <div className="shop_category_wrapper">
                    <div className="shop_category_area">
                        <div className="shop_category_heading">
                            <Heading highlight="Shop" heading="by Category" />
                        </div>
                        {/* CARDS  */}
                        <div className="shop_category_card_wrapper">
                            <div className="shop_category_card_area">
                                {renderCards}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Category


const category = [
    {
        id: 1,
        title: 'Fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: FruitsCat,
        path: '/fruits'
    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: DairyCat,
        path: '/dairy'
    },
    {
        id: 3,
        title: 'Meat & SeaFood',
        description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        image: SeaFoodCat,
        path: '/seafood'
    }
]