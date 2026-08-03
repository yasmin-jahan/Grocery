import {React, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import './Testimonial.css'
import Heading from '../Heading/Heading'
import Customer1 from '../../assets/customer1.jpg';
import Customer2 from '../../assets/customer2.jpg';
import Customer3 from '../../assets/customer3.jpg';
import Customer4 from '../../assets/customer4.jpg';
import Customer5 from '../../assets/customer5.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {

    
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
                matchHeightByRow('.testimonial_author h4');
                matchHeightByRow('.testimonial_comments p');
            };
    
            applyHeights();
    
            window.addEventListener('resize', applyHeights);
    
            return () => window.removeEventListener('resize', applyHeights);
    
        }, []);
    
        // SET HEIGHT OF ELEMENT ENDS




    return (
        <section className='testimonial_section'>
            <div className="container">
                <div className="testimonial_wrapper">
                    <div className="testimonial_area">
                        <div className="testimonial_heading">
                            <Heading highlight="Customers" heading="Saying" />
                        </div>
                        <div className="testimonial_slider_area">

                            <Swiper
                                modules={[Navigation]}
                                navigation
                                // pagination={{ clickable: true }}
                                // spaceBetween={30}
                                slidesPerView={1}
                                loop
                                breakpoints={{
                                    // 0px - 767px
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },

                                    // 768px - 1199px
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },

                                    // 1200px and above
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {/* <div className="swiper_custom_buttons">
                             <div class="swiper-button-prev swiper_prev_btn"><svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"></path></svg></div>

                           <div class="swiper-button-next swiper_next_btn"><svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"></path></svg></div>
                        </div> */}
                                {
                                    review.map((item) => (

                                        <SwiperSlide key={item.id}>
                                            <div className="testimonial_slider_content_wrapper">
                                                <div className="testimonial_slider_content_area">
                                                    <div className="testimonial_slider_content">
                                                        <div className="testimonial_image">
                                                            <img src={item.image} alt="Customer 1" />
                                                        </div>
                                                        <div className="testimonial_author">
                                                            <h4 className='text-zinc-900'>{item.name}</h4>
                                                            <span className='text-zinc-600'>{item.profession}</span>
                                                            <div className="testimonial_star text-yellow-400">
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial_comments">
                                                        <p className='text-zinc-600'>{item.para}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}

                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial


const review = [
    {
        id: 1,
        name: 'Emily Johnson',
        profession: 'Food Blogger',
        rating: 3,
        para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
        image: Customer1
    },
    {
        id: 2,
        name: 'David Smith',
        profession: 'Chef',
        rating: 3,
        para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
        image: Customer2
    },
    {
        id: 3,
        name: 'Alya Zahra',
        profession: 'Model',
        rating: 3,
        para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
        image: Customer3
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        rating: 3,
        para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
        image: Customer4
    },
    {
        id: 5,
        name: 'Natcha Phongchai',
        profession: 'Nutritionist',
        rating: 3,
        para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
        image: Customer5
    }

]