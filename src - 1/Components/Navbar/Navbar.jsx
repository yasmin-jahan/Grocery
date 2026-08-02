import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    // SCROLL NAVBAR SHADOW 
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    //    SIDENAV SHOW
    const [sidenav, setSidenav] = useState(false);

    const sidenavShow = () => {
        setSidenav(!sidenav);
    }

    return (
        <header className={`header_section ${isScrolled ? 'drop-shadow-[-5px_0px_9px_rgba(0,0,0,.2)]' : ''}`} >
            <div className="container">
                <nav className='navbar flex justify-between items-center'>

                    {/* LOGO  */}
                    <a href="#" className='logo font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>

                    {/* DESKTTOP MENU  */}
                    <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
                        <div className="sidebar_header">
                            <div className="sidebar_brand">
                                <a href="#" className='logo font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>
                            </div>

                            <a className="sidebar_close" onClick={sidenavShow} >
                                <IoClose />
                            </a>
                        </div>
                        {/* INPUT FIELD  */}
                        <div className='mobile_search_info serch_info border-1 border-orange-500  justify-center items-center hidden'>
                            <input className='flex-1 focus:outline-none' type="text" name='text' id='text' placeholder='Search...' autoComplete='off' />
                            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white flex justify-center items-center rounded-full text-xl'><IoIosSearch /></button>
                        </div>
                        <ul className='menu_item  items-center'>
                            <li><a href="#" className='font-semi-bold tracking-wider text-orange-500 transition-all duration-300 ease-in-out'>Home</a></li>
                            <li><a href="#" className='font-semi-bold tracking-wider text-zinc-800 hover:text-orange-500 transition-all duration-300 ease-in-out'>About Us</a></li>
                            <li><a href="#" className='font-semi-bold tracking-wider text-zinc-800 hover:text-orange-500 transition-all duration-300 ease-in-out'>Process</a></li>
                            <li><a href="#" className='font-semi-bold tracking-wider text-zinc-800 hover:text-orange-500 transition-all duration-300 ease-in-out'>Contact Us</a></li>
                        </ul>
                    </div>

                    {/* NAV ACTION  */}
                    <div className='flex items-center gap-x-3 md:gap-x-5'>

                        {/* INPUT FIELD  */}
                        <div className='serch_info md:flex px-2 py-1 border-2 border-orange-500 rounded-full justify-center
                items-center hidden'>
                            <input className='flex-1 focus:outline-none' type="text" name='text' id='text' placeholder='Search...' autoComplete='off' />
                            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoIosSearch /></button>
                        </div>



                        <a href="#" className='heart text-zinc-800 hover:text-orange-500 transition-all duration-300 ease-in-out'><GoHeartFill /></a>
                        <a href="#" className='shopping text-zinc-800 hover:text-orange-500 transition-all duration-300 ease-in-out'><HiShoppingBag /></a>

                        {/* HAMBURGER  */}
                        <a href="#" className='hamburger text-zinc-800' onClick={sidenavShow}><TbMenu2 /></a>
                    </div>
                </nav>
            </div>

            {/* OVERLAY */}
            <div
                className={`overlay ${sidenav ? 'active' : ''}`}
                onClick={sidenavShow}
            ></div>
        </header>
    )
}

export default Navbar