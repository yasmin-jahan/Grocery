import React from 'react'
import './Footer.css'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
  return (
   <footer className='footer_section'>
    <div className="container">
        <div className="footer_wrapper">
            <div className="footer_area">
                <div className="footer_content_wrapper">

                    <div className="footer_content logo_content">
                         {/* LOGO  */}
                    <a href="#" className='logo font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>
                    <p className='text-zinc-600'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <span className='copyright text-zinc-900'>2025 &copy; All Right Reserved</span>
                    </div>

                    <div className="footer_content">
                        <div className="footer_title">
                            <h4>Company</h4>
                        </div>
                        <div className="footer_text">
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Faqs</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer_content">
                        <div className="footer_title">
                            <h4>Support</h4>
                        </div>
                        <div className="footer_text">
                            <ul>
                                <li><a href="">Support Center</a></li>
                                <li><a href="">Feedback</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer_content">
                        <div className="footer_title">
                            <h4>Stay Connected</h4>
                        </div>
                        <div className="footer_text">
                            <p className='text-zinc-600'>Questions or Feedback ? <br /> We'd love to hear from you.</p>
                            <div className="email_form">
                                <input type="email" type='email' name='email' autoComplete='off' placeholder='Email Address' />
                                <button> <IoIosArrowForward /> </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer